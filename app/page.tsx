"use client";

import React, { useEffect, useRef, useState } from "react";

/* ---------------- CALENDLY BADGE SAFE INIT ---------------- */
declare global {
  interface Window {
    Calendly: any;
  }
}

/* ---------------- SCROLL FADE HOOK ---------------- */
const useScrollFade = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};

/* ---------------- FADE WRAPPER ---------------- */
const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const { ref, visible } = useScrollFade();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export default function WeiPhotographyStudio() {
  const packages = [
    {
      title: "Glow Session",
      price: "¥499",
      details:
        "1 person · 2 fully retouched photos · 2 color-graded selects · 1-hour studio session · Natural posing guidance",
    },
    {
      title: "Glam Session",
      price: "¥899",
      details:
        "Max 2 people · 3 fully retouched photos · 2-hour studio session · Creative direction included",
    },
    {
      title: "Glam Outdoors",
      price: "¥799",
      details:
        "Outdoor cinematic shoot · 3 retouched photos · natural light storytelling",
    },
    {
      title: "Shimmer Session",
      price: "¥1799",
      details:
        "3-hour styled shoot · 7 retouched photos · priority editing",
    },
    {
      title: "Shimmer Outdoors",
      price: "¥1499",
      details:
        "Multi-location cinematic session · 7 retouched photos",
    },
  ];

  const portfolio = [
    { image: "/photos/graduation-1.jpg", title: "Graduation Stories" },
    { image: "/photos/portrait-1.jpg", title: "Portrait Sessions" },
    { image: "/photos/editorial-1.jpg", title: "Editorial Moments" },
  ];

  /* ---------------- CALENDLY INIT (SAFE) ---------------- */
  useEffect(() => {
    const initCalendly = () => {
      if (!window.Calendly) return;

      window.Calendly.initBadgeWidget({
        url: "https://calendly.com/weixiangphotos/new-meeting",
        text: "Reserve your Session",
        color: "#424242",
        textColor: "#ffffff",
        branding: true,
      });
    };

    const script = document.createElement("script");
    script.src =
      "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = initCalendly;

    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#2b2b2b] font-serif">

      {/* HERO */}
      <header className="relative h-screen overflow-hidden">

        <img
          src="/photos/header.jpg"
          className="absolute inset-0 h-full w-full object-cover grayscale scale-105"
        />

        <div className="absolute inset-0 bg-black/60" />

        <nav className="relative z-10 flex justify-between px-10 py-8 text-white">
          <div className="text-xl md:text-3xl tracking-[0.2em] uppercase">
            WEIXIANG PHOTOGRAPHY
          </div>

          <div className="hidden md:flex gap-8 text-sm uppercase">
            <a href="#portfolio">Portfolio</a>
            <a href="#packages">Packages</a>
            <a href="#calendar">Booking</a>
          </div>
        </nav>

        <div className="relative z-10 flex h-[80%] items-center justify-center text-center text-white px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-light">
              Capturing Emotion
              <span className="block italic">With Elegance</span>
            </h1>

            <p className="mt-6 text-white/80">
              Cinematic portrait photography crafted with intention.
            </p>
          </div>
        </div>
      </header>

      {/* PORTFOLIO */}
      <FadeInSection>
        <section id="portfolio" className="px-6 py-24 md:px-16">
          <div className="text-center mb-12">
            <p className="uppercase text-sm tracking-[0.3em] text-gray-500">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-light mt-4">
              Visual Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolio.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl overflow-hidden bg-white shadow"
              >
                <img src={p.image} className="h-[450px] w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-xl">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* PACKAGES */}
      <FadeInSection>
        <section id="packages" className="bg-[#ece6dc] py-24 px-6">
          <div className="text-center mb-12">
            <p className="uppercase text-sm tracking-[0.3em] text-gray-600">
              Packages
            </p>
            <h2 className="text-4xl md:text-5xl font-light mt-4">
              Signature Experiences
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className="bg-white p-8 rounded-2xl shadow"
              >
                <h3 className="text-2xl font-light">{pkg.title}</h3>
                <p className="text-3xl mt-4">{pkg.price}</p>
                <p className="mt-4 text-gray-600">{pkg.details}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* BOOKING */}
      <FadeInSection>
        <section
          id="calendar"
          className="py-24 px-6 text-center bg-[#f8f5f0]"
        >
          <h2 className="text-4xl md:text-5xl font-light">
            Book Your Session
          </h2>

          <p className="mt-4 text-gray-600">
            Click the button to choose your time.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            (Booking button appears bottom-right of screen)
          </p>
        </section>
      </FadeInSection>

      {/* FOOTER */}
      <footer className="text-center py-10 text-sm text-gray-500 border-t">
        © 2026 WEIXIANG PHOTOGRAPHY
      </footer>
    </div>
  );
}