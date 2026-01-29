import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submitForm: publicProcedure
      .input(
        z.object({
          firstName: z.string().min(1, "First name is required"),
          lastName: z.string().min(1, "Last name is required"),
          email: z.string().email("Valid email is required"),
          phone: z.string().min(1, "Phone number is required"),
          referredByPhysician: z.boolean(),
          preferredLocation: z.enum(["polyclinic", "wharton"]),
          comment: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const locationName =
          input.preferredLocation === "polyclinic"
            ? "Polyclinic - North York"
            : "Wharton Medical Clinic";

        const referralStatus = input.referredByPhysician
          ? "Yes, referred by physician"
          : "No physician referral";

        const emailContent = `New Contact Form Submission\n\nName: ${input.firstName} ${input.lastName}\nEmail: ${input.email}\nPhone: ${input.phone}\nPreferred Location: ${locationName}\nPhysician Referral: ${referralStatus}\n\nAdditional Comments:\n${input.comment || "(No additional comments provided)"}`;

        const notificationSent = await notifyOwner({
          title: `New Contact Form Submission from ${input.firstName} ${input.lastName}`,
          content: emailContent,
        });

        if (!notificationSent) {
          console.warn(
            "[Contact] Failed to send notification for contact form submission"
          );
        }

        return {
          success: true,
          message: "Thank you for contacting us. We will get back to you shortly.",
        };
      }),
  }),
});

export type AppRouter = typeof appRouter;
