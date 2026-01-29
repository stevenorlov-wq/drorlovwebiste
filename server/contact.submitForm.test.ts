import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the notifyOwner function
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("contact.submitForm", () => {
  it("should successfully submit a contact form with valid data", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submitForm({
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "416-555-1234",
      referredByPhysician: true,
      preferredLocation: "polyclinic",
      comment: "I would like to schedule an appointment.",
    });

    expect(result).toEqual({
      success: true,
      message: "Thank you for contacting us. We will get back to you shortly.",
    });
  });

  it("should reject invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.submitForm({
        firstName: "John",
        lastName: "Doe",
        email: "invalid-email",
        phone: "416-555-1234",
        referredByPhysician: false,
        preferredLocation: "wharton",
        comment: "",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Valid email is required");
    }
  });

  it("should reject empty last name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.submitForm({
        firstName: "",
        lastName: "Doe",
        email: "john@example.com",
        phone: "416-555-1234",
        referredByPhysician: false,
        preferredLocation: "polyclinic",
        comment: "",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("First name is required");
    }
  });

  it("should reject invalid preferred location", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.submitForm({
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        phone: "416-555-1234",
        referredByPhysician: false,
        preferredLocation: "invalid-location" as any,
        comment: "",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      expect(error.message).toContain("Invalid option");
    }
  });

  it("should handle optional comment field", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submitForm({
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      phone: "416-555-5678",
      referredByPhysician: false,
      preferredLocation: "wharton",
    });

    expect(result.success).toBe(true);
  });
});
