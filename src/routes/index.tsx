import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Home,
  UtensilsCrossed,
  Shirt,
  Sofa,
  Bed,
  Lightbulb,
  Box,
  MessageCircle,
  Palette,
  Wrench,
  Key,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Quote,
} from "lucide-react";

import heroInterior from "../assets/hero-interior.jpg";
import portfolioKitchen from "../assets/portfolio-kitchen.jpg";
import portfolioBedroom from "../assets/portfolio-bedroom.jpg";
import portfolioLiving from "../assets/portfolio-living.jpg";
import portfolioWardrobe from "../assets/portfolio-wardrobe.jpg";
import portfolioKidsRoom from "../assets/portfolio-kidsroom.jpg";
import portfolioCeiling from "../assets/portfolio-ceiling.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Home,
    title: "Full Home Interiors",
    description: "Complete design-to-handover solutions for every room in your home.",
  },
  {
    icon: UtensilsCrossed,
    title: "Modular Kitchen",
    description: "Functional, beautiful kitchens tailored to your cooking habits and space.",
  },
  {
    icon: Shirt,
    title: "Wardrobes & Storage",
    description: "Custom closets and storage that maximize space and minimize clutter.",
  },
  {
    icon: Sofa,
    title: "Living Room Design",
    description: "Welcoming living spaces designed for comfort, conversation, and style.",
  },
  {
    icon: Bed,
    title: "Bedroom Design",
    description: "Restful bedrooms that blend soft textures, warm tones, and smart storage.",
  },
  {
    icon: Lightbulb,
    title: "False Ceiling & Lighting",
    description: "Ambient lighting and ceiling designs that set the perfect mood.",
  },
  {
    icon: Box,
    title: "3D Visualization",
    description: "Realistic 3D renders so you can see your home before we build it.",
  },
];

const processSteps = [
  {
    icon: MessageCircle,
    title: "Free Consultation",
    description: "We visit your site, understand your lifestyle, and discuss your vision and budget.",
  },
  {
    icon: Palette,
    title: "Design & 3D Visualization",
    description: "We create layouts, mood boards, and photorealistic 3D renders for your approval.",
  },
  {
    icon: Wrench,
    title: "Execution",
    description: "Our team manages materials, carpentry, electricals, and finishing with weekly updates.",
  },
  {
    icon: Key,
    title: "Handover",
    description: "Your fully finished home is handed over on time, ready for you to move in.",
  },
];

const portfolio = [
  { src: portfolioLiving, title: "Warm Minimalist Living Room", category: "Living Room" },
  { src: portfolioKitchen, title: "Modern Modular Kitchen", category: "Kitchen" },
  { src: portfolioBedroom, title: "Serene Master Bedroom", category: "Bedroom" },
  { src: portfolioWardrobe, title: "Luxury Walk-in Wardrobe", category: "Storage" },
  { src: portfolioKidsRoom, title: "Playful Kids Bedroom", category: "Kids Room" },
  { src: portfolioCeiling, title: "Ambient Ceiling & Lighting", category: "Lighting" },
];

const testimonials = [
  {
    name: "Priya & Rohan Deshmukh",
    location: "Wakad, Pune",
    text: "The team understood exactly how we wanted our 3 BHK to feel. The timeline was clear, communication was great, and the final result looks even better than the 3D visuals.",
  },
  {
    name: "Anita Kulkarni",
    location: "Kharadi, Pune",
    text: "We renovated our 15-year-old apartment and Iinfinity spaace transformed it completely. The modular kitchen and wardrobes are beautiful and so practical.",
  },
  {
    name: "Vikram & Neha Patil",
    location: "Baner, Pune",
    text: "From the first call to handover, everything felt personal and professional. They handled both design and execution, which made the whole process stress-free.",
  },
];

const faqs = [
  {
    question: "How much does interior design cost?",
    answer:
      "Pricing depends on the size of your home, materials chosen, and scope of work. We discuss this transparently during a free consultation call after understanding your requirements.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A typical 2-3 BHK interior project takes 6 to 10 weeks from design approval to handover. Timelines vary based on customization and site readiness.",
  },
  {
    question: "Do you handle both design and execution?",
    answer:
      "Yes. We offer end-to-end turnkey services — from design and 3D visualization to material procurement, execution, and final handover.",
  },
  {
    question: "Which areas in Pune do you serve?",
    answer:
      "We serve all major areas in Pune including Wakad, Baner, Kharadi, Hinjewadi, Koregaon Park, Kalyani Nagar, Magarpatta, and surrounding neighborhoods.",
  },
  {
    question: "Do I need to be present during execution?",
    answer:
      "Not for every step. We share regular photo and video updates, and only need you for key approvals and the final handover walkthrough.",
  },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    cityArea: "",
    projectType: "",
    message: "",
  });

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Iinfinity spaace,%0A%0AI'm ${formData.name} interested in interior design services.%0A%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0ACity/Area: ${formData.cityArea}%0AProject Type: ${formData.projectType}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/918625010816?text=${message}`, "_blank");
    setFormSubmitted(true);
  };

  const openConsultation = () => {
    setModalOpen(true);
    setFormSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/50 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="font-serif text-xl font-semibold tracking-tight text-foreground">
            Iinfinity<span className="text-gold"> Spaace</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={openConsultation}
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              Get a Free Consultation
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background p-6 md:hidden">
          <div className="flex items-center justify-between">
            <span className="font-serif text-xl font-semibold">
              Iinfinity<span className="text-gold"> Space</span>
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-lg font-medium text-foreground"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openConsultation();
              }}
              className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-base font-medium text-primary-foreground"
            >
              Get a Free Consultation
            </button>
          </nav>
        </div>
      )}

      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center pt-16">
        <img
          src={heroInterior}
          alt="Warm minimalist living room interior designed by Iinfinity Spaace in Pune"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1088}
        />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Interior Design Studio · Pune, India
          </p>
          <h1 className="font-serif text-4xl font-medium leading-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl">
            Where Homes Find Their Story
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/90 sm:text-lg md:text-xl">
            Transforming new and renovated homes across Pune into warm, personalized spaces that reflect how you
            actually live. End-to-end design, 3D visualization, and turnkey execution.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={openConsultation}
              className="inline-flex items-center justify-center rounded-md bg-gold px-7 py-3.5 text-base font-semibold text-foreground transition-all hover:bg-gold/90"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              onClick={() => scrollToSection("#portfolio")}
              className="inline-flex items-center justify-center rounded-md border border-cream/30 bg-cream/10 px-7 py-3.5 text-base font-medium text-cream backdrop-blur-sm transition-all hover:bg-cream/20"
            >
              View Our Work
            </button>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-cream/80">
            <div className="text-center">
              <p className="font-serif text-3xl font-semibold text-gold">5+</p>
              <p className="text-sm">Years Experience</p>
            </div>
            <div className="hidden h-10 w-px bg-cream/20 sm:block" />
            <div className="text-center">
              <p className="font-serif text-3xl font-semibold text-gold">50+</p>
              <p className="text-sm">Homes Transformed</p>
            </div>
            <div className="hidden h-10 w-px bg-cream/20 sm:block" />
            <div className="text-center">
              <p className="font-serif text-3xl font-semibold text-gold">Pune</p>
              <p className="text-sm">Citywide Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-gold">About Us</p>
              <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl">
                Designing spaces that feel like home
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Founded in Pune, Iinfinity Spaace is an interior design studio built on the belief that every home
                  should tell its owner's story. Over the last 5 years, we've had the privilege of transforming more
                  than 50 homes across the city.
                </p>
                <p>
                  We don't believe in one-size-fits-all templates. Instead, we listen — to your routines, your family,
                  your tastes — and design spaces that are beautiful, functional, and unmistakably yours.
                </p>
                <p>
                  Whether you've just picked up the keys to a new apartment or are ready to breathe new life into an
                  older home, we guide you from the first sketch to the final handover.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-8">
                <div>
                  <p className="font-serif text-3xl font-semibold text-primary">5+</p>
                  <p className="text-sm text-muted-foreground">Years of Experience</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-semibold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Completed Projects</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-semibold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Turnkey Execution</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-sand">
                <img
                  src={portfolioLiving}
                  alt="Warm minimalist living room by Iinfinity Spaace"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={1024}
                  height={1024}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden max-w-xs rounded-xl bg-card p-6 shadow-lg lg:block">
                <Quote className="h-8 w-8 text-gold" />
                <p className="mt-3 text-sm italic text-card-foreground">
                  "They made our house feel like a home we had always imagined."
                </p>
                <p className="mt-3 text-xs font-medium text-muted-foreground">— Priya Deshmukh, Wakad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-gold">Our Services</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-foreground sm:text-4xl md:text-5xl">
              Everything your home needs
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              From a single room refresh to a complete home transformation, we handle every detail.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-md"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-medium text-card-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-gold">How We Work</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-foreground sm:text-4xl md:text-5xl">
              A simple, stress-free process
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-7 w-7" />
                </div>
                <div className="mt-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold">Step {index + 1}</span>
                  <h3 className="mt-2 font-serif text-xl font-medium text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-px w-full lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-gold">Portfolio</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-foreground sm:text-4xl md:text-5xl">
              Spaces we've brought to life
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              A glimpse of warm, minimalist interiors designed for homes across Pune.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item) => (
              <div key={item.title} className="group overflow-hidden rounded-2xl bg-card">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-gold">{item.category}</p>
                  <h3 className="mt-1 font-serif text-lg font-medium text-card-foreground">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-gold">Testimonials</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-foreground sm:text-4xl md:text-5xl">
              What homeowners say
            </h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-md"
              >
                <Quote className="h-8 w-8 text-gold" />
                <p className="mt-4 text-base leading-relaxed text-card-foreground">{testimonial.text}</p>
                <div className="mt-6 border-t border-border pt-6">
                  <p className="font-serif font-medium text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-gold">FAQ</p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-foreground sm:text-4xl md:text-5xl">
              Common questions
            </h2>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card px-6 py-5 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="font-serif text-lg font-medium text-card-foreground">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA Footer */}
      <section id="contact" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-gold">Get in Touch</p>
              <h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl">
                Ready to design your dream home?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Tell us about your project and we'll get back to you within 24 hours. Pricing is discussed after a
                free consultation call based on your specific requirements.
              </p>
              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a href="tel:+918625010816" className="text-muted-foreground transition-colors hover:text-primary">
                      +91 86250 10816
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:hello@iinfinityspaace24.com"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      hello@iinfinityspaace24.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-gold">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 font-serif text-2xl font-medium text-card-foreground">Message sent!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We've opened WhatsApp with your details. Send the message and we'll respond shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        cityArea: "",
                        projectType: "",
                        message: "",
                      });
                    }}
                    className="mt-6 text-sm font-medium text-primary hover:underline"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-card-foreground">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-card-foreground">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-card-foreground">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="cityArea" className="mb-1.5 block text-sm font-medium text-card-foreground">
                        City / Area
                      </label>
                      <input
                        id="cityArea"
                        name="cityArea"
                        type="text"
                        required
                        value={formData.cityArea}
                        onChange={handleFormChange}
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="e.g. Wakad, Pune"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium text-card-foreground">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleFormChange}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select a project type</option>
                      <option value="Full Home Interior">Full Home Interior</option>
                      <option value="Modular Kitchen">Modular Kitchen</option>
                      <option value="Wardrobes & Storage">Wardrobes & Storage</option>
                      <option value="Living Room Design">Living Room Design</option>
                      <option value="Bedroom Design">Bedroom Design</option>
                      <option value="Renovation">Renovation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-card-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleFormChange}
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Tell us about your home, budget, and timeline..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90"
                  >
                    Get a Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    Pricing discussed after a free consultation call based on your requirements.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <a href="/" className="font-serif text-2xl font-semibold text-foreground">
                Iinfinity<span className="text-gold"> Spaace</span>
              </a>
              <p className="mt-2 text-sm text-muted-foreground">
                End-to-end interior design studio in Pune, India.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Iinfinity Spaace. All rights reserved.</p>
            <p className="mt-1">Pune, Maharashtra, India · +91 86250 10816</p>
          </div>
        </div>
      </footer>

      {/* Consultation Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 p-4 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-card p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="font-serif text-2xl font-medium text-card-foreground">Get a Free Consultation</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in your details and we'll get back to you within 24 hours.
            </p>
            <form
              onSubmit={(e) => {
                handleFormSubmit(e);
                setModalOpen(false);
              }}
              className="mt-6 space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Name"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <input
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder="Phone"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleFormChange}
                placeholder="Email"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <select
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleFormChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                <option value="">Select project type</option>
                <option value="Full Home Interior">Full Home Interior</option>
                <option value="Modular Kitchen">Modular Kitchen</option>
                <option value="Wardrobes & Storage">Wardrobes & Storage</option>
                <option value="Living Room Design">Living Room Design</option>
                <option value="Bedroom Design">Bedroom Design</option>
                <option value="Renovation">Renovation</option>
                <option value="Other">Other</option>
              </select>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleFormChange}
                placeholder="Tell us about your project..."
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                Send Enquiry
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Pricing discussed after a free consultation call.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
