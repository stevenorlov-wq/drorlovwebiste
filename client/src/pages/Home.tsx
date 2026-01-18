import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Award, BookOpen, Users } from "lucide-react";
import { useState } from "react";

/**
 * Dr. Orlov Professional Website - Modern Medical Minimalism
 * Design Philosophy: Clinical clarity, accessible sophistication, content-first
 * Color Palette: Deep teal (#1e5a7a), warm cream (#f9f7f4), sage green (#6b9e8f)
 * Typography: Playfair Display (headings), Inter (body)
 */

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    referredByPhysician: false,
    preferredLocation: "polyclinic",
    comment: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DO</span>
            </div>
            <span className="font-bold text-primary text-lg hidden sm:inline">Dr. Orlov</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors text-sm">
              About
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors text-sm">
              Services
            </a>
            <a href="#locations" className="text-foreground hover:text-primary transition-colors text-sm">
              Locations
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors text-sm">
              Contact
            </a>
            <a href="#handouts" className="text-foreground hover:text-primary transition-colors text-sm">
              Handouts
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-overlay">
        <div className="container py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="order-2 md:order-1">
              <img
                src="/images/dr-orlov-professional-headshot.jpg"
                alt="Dr. Steven Orlov - Professional Headshot"
                className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
              />
            </div>

            {/* Right: Content */}
            <div className="order-1 md:order-2 space-y-6">
              <div>
                <p className="text-primary font-medium text-sm tracking-wide uppercase mb-2">Welcome</p>
                <h1 className="text-primary mb-4">Dr. Steven Orlov</h1>
                <p className="text-lg text-muted-foreground font-medium mb-2">MD, FRCPC</p>
                <p className="text-lg text-muted-foreground">Endocrinology & Metabolism</p>
              </div>

              <p className="text-foreground leading-relaxed text-lg">
                Welcome to my practice. I specialize in the diagnosis and management of endocrine disorders, with particular expertise in diabetes, thyroid disease, and metabolic diseases. My goal is to provide comprehensive, evidence-based care tailored to each patient's unique needs.
              </p>

              <div className="flex gap-4 pt-4">
                <a href="#contact" className="inline-block">
                  <Button className="btn-primary">Contact the Office</Button>
                </a>
                <a href="#about" className="inline-block">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-primary mb-8">About Dr. Orlov</h2>

            <div className="space-y-6 text-foreground">
              <p>
                Dr. Steven Orlov is an Endocrinologist with comprehensive training in the diagnosis and treatment of hormonal and metabolic disorders. He completed his medical training at the University of Toronto, where he earned his MD and completed residencies in Internal Medicine and Endocrinology.
              </p>

              <p>
                His clinical expertise spans diabetes management, thyroid disorders, metabolic bone disease, and other general endocrine conditions. Dr. Orlov works collaboratively with diabetes nurse educators and other specialists to provide integrated, patient-centered care.
              </p>

              <p>
                Academically, Dr. Orlov has conducted clinical research on thyroid cancer and endocrine disorders. His contributions have been recognized with the Endocrine Society's Medical Student Achievement Award, the Outstanding Abstract Award, and the Dr. Fernand Labrie Fellowship Research Award from the Canadian Society of Endocrinology & Metabolism.
              </p>

              <p>
                Dr. Orlov is fluent in both English and Russian and welcomes patients from all backgrounds. He is committed to building strong doctor-patient relationships based on clear communication and shared decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding gradient-overlay">
        <div className="container">
          <h2 className="text-primary mb-12 text-center">Areas of Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Diabetes Management",
                description: "Comprehensive evaluation and treatment of type 1 and type 2 diabetes, including insulin initiation and adjustment.",
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Thyroid Disorders",
                description: "Diagnosis and management of hypothyroidism, hyperthyroidism, thyroid nodules, and thyroid cancer.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Metabolic Disorders",
                description: "Management of obesity, osteoporosis, hypogonadism and other endocrine conditions.",
              },
            ].map((service, idx) => (
              <Card key={idx} className="card-refined p-8 text-center">
                <div className="flex justify-center mb-4 text-primary">{service.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-foreground text-sm leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="section-padding bg-white">
        <div className="container">
          <h2 className="text-primary mb-12 text-center">Clinic Locations</h2>

          <div className="space-y-12">
            {[
              {
                name: "Polyclinic Specialty Medicine Clinic",
                address: "2 Champagne Dr, Unit B17",
                city: "Toronto, ON M3J 2C5",
                phone: "416-222-6160 x269",
                fax: "416-645-1978",
                hours: "Tuesday, Thursday, Friday",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.5234567890123!2d-79.4!3d43.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2s2%20Champagne%20Dr%2C%20Toronto%2C%20ON%20M3J%202C5!5e0!3m2!1sen!2sca!4v1234567890",
              },
              {
                name: "Wharton Medical Clinic",
                address: "2951 Walker's Line, 1st Floor",
                city: "Burlington, ON L7M 4Y1",
                phone: "1-833-962-5359",
                fax: "888-825-15059",
                hours: "Monday",
                mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.5234567890123!2d-79.8!3d43.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2s2951%20Walker's%20Line%2C%20Burlington%2C%20ON%20L7M%204Y1!5e0!3m2!1sen!2sca!4v1234567890",
              },
            ].map((location, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <Card className="card-refined p-8">
                  <h3 className="text-lg font-bold text-primary mb-4">{location.name}</h3>
                  <div className="space-y-3 text-foreground text-sm">
                    <div className="flex gap-3">
                      <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p>{location.address}</p>
                        <p>{location.city}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                      <p>{location.phone}</p>
                    </div>
                    <div className="flex gap-3">
                      <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                      <p>Fax: {location.fax}</p>
                    </div>
                    <p className="pt-2 font-medium text-primary">Appointments: {location.hours}</p>
                  </div>
                </Card>
                <div className="card-refined overflow-hidden rounded-lg h-80">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={location.mapUrl}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding gradient-overlay">
        <div className="container max-w-2xl">
          <h2 className="text-primary mb-4 text-center">Contact the Office</h2>
          <p className="text-center text-foreground mb-12">
            Please fill out the form below to contact our office. We will get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Physician Referral */}
            <div>
              <label className="flex items-center gap-3 text-foreground">
                <input
                  type="checkbox"
                  name="referredByPhysician"
                  checked={formData.referredByPhysician}
                  onChange={handleInputChange}
                  className="w-4 h-4 rounded border-border"
                />
                <span className="text-sm">A physician has referred me to see Dr. Orlov *</span>
              </label>
            </div>

            {/* Location Preference */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Preferred Location *</label>
              <select
                name="preferredLocation"
                value={formData.preferredLocation}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="polyclinic">Polyclinic - North York</option>
                <option value="wharton">Wharton Medical Clinic</option>
              </select>
            </div>

            {/* Comments */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Additional Comments</label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Please provide any additional information..."
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="btn-primary w-full">
              Submit Request
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              * Indicates required field
            </p>
          </form>
        </div>
      </section>

      {/* Patient Handouts Section */}
      <section id="handouts" className="section-padding bg-white">
        <div className="container">
          <h2 className="text-primary mb-12 text-center">Patient Handouts</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Download and print educational materials about common endocrine conditions and management strategies.
          </p>

          {/* English Handouts */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 pb-4 border-b-2 border-secondary">English Handouts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Diabetes Management */}
              <div className="card-refined p-6">
                <h4 className="text-lg font-bold text-primary mb-4">Diabetes Management</h4>
                <div className="space-y-3">
                  <a
                    href="/images/diabetes_english_page1.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>ABCDEs of Diabetes Care</span>
                  </a>
                  <a
                    href="/images/diabetes_english_page2.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Hypoglycemia</span>
                  </a>
                </div>
              </div>

              {/* Obesity Management */}
              <div className="card-refined p-6">
                <h4 className="text-lg font-bold text-primary mb-4">Obesity Management</h4>
                <div className="space-y-3">
                  <a
                    href="/images/obesity_management_english_page1.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Obesity Diagnosis and Medications</span>
                  </a>
                  <a
                    href="/images/obesity_management_english_page2.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Bariatric Surgery</span>
                  </a>
                </div>
              </div>

              {/* Osteoporosis Management */}
              <div className="card-refined p-6">
                <h4 className="text-lg font-bold text-primary mb-4">Osteoporosis Management</h4>
                <div className="space-y-3">
                  <a
                    href="/images/osteoporosis_english_page1.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Diagnosis & Lifestyle</span>
                  </a>
                  <a
                    href="/images/osteoporosis_english_page2.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Medications</span>
                  </a>
                </div>
              </div>

              {/* Portfolio Diet */}
              <div className="card-refined p-6">
                <h4 className="text-lg font-bold text-primary mb-4">Portfolio Diet</h4>
                <div className="space-y-3">
                  <a
                    href="/images/portfolio_diet_english_page1.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Core Four Components</span>
                  </a>
                  <a
                    href="/images/portfolio_diet_english_page2.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Portfolio Diet</span>
                  </a>
                </div>
              </div>

              {/* Statin Poster */}
              <div className="card-refined p-6">
                <h4 className="text-lg font-bold text-primary mb-4">Dyslipidemia</h4>
                <div className="space-y-3">
                  <a
                    href="/images/statin_poster_canadian_page1.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Statin Myths</span>
                  </a>
                  <a
                    href="/images/statin_poster_canadian_page2.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Statin Mechanisms</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Russian Handouts */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 pb-4 border-b-2 border-secondary">Russian Handouts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Diabetes Management - Russian */}
              <div className="card-refined p-6">
                <h4 className="text-lg font-bold text-primary mb-4">Управление диабетом</h4>
                <div className="space-y-3">
                  <a
                    href="/images/diabetes_russian_page1.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>ABCDE диабета</span>
                  </a>
                  <a
                    href="/images/diabetes_russian_page2.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Гипогликемия</span>
                  </a>
                </div>
              </div>

              {/* Obesity Management - Russian */}
              <div className="card-refined p-6">
                <h4 className="text-lg font-bold text-primary mb-4">Управление ожирением</h4>
                <div className="space-y-3">
                  <a
                    href="/images/obesity_management_russian_page1.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Диагностика и лекарства</span>
                  </a>
                  <a
                    href="/images/obesity_management_russian_page2.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Бариатрическая хирургия</span>
                  </a>
                </div>
              </div>

              {/* Osteoporosis Management - Russian */}
              <div className="card-refined p-6">
                <h4 className="text-lg font-bold text-primary mb-4">Управление остеопорозом</h4>
                <div className="space-y-3">
                  <a
                    href="/images/osteoporosis_russian_page1.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Диагностика и образ жизни</span>
                  </a>
                  <a
                    href="/images/osteoporosis_russian_page2.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Лекарства</span>
                  </a>
                </div>
              </div>

              {/* Portfolio Diet - Russian */}
              <div className="card-refined p-6">
                <h4 className="text-lg font-bold text-primary mb-4">Портфельная диета</h4>
                <div className="space-y-3">
                  <a
                    href="/images/portfolio_diet_russian_page1.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Четыре основных компонента</span>
                  </a>
                  <a
                    href="/images/portfolio_diet_russian_page2.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Портфельная диета</span>
                  </a>
                </div>
              </div>

              {/* Statin Poster - Russian */}
              <div className="card-refined p-6">
                <h4 className="text-lg font-bold text-primary mb-4">Статин-терапия</h4>
                <div className="space-y-3">
                  <a
                    href="/images/statin_poster_russian_page1.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Мифы о статинах</span>
                  </a>
                  <a
                    href="/images/statin_poster_russian_page2.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Механизм действия статинов</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-2">Dr. Steven Orlov</h4>
              <p className="text-sm opacity-90">MD, FRCPC</p>
              <p className="text-sm opacity-90">Endocrinology & Metabolism</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Quick Links</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#locations" className="hover:underline">
                    Locations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Contact</h4>
              <p className="text-sm">Polyclinic: 416-222-6160 ext 269</p>
              <p className="text-sm">Wharton: 1-833-962-5359</p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
            <p>&copy; 2026 Dr. Steven Orlov. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
