"use client";

import React, { useEffect, useRef, useState } from "react";
import { PopupButton } from "react-calendly";

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
        "1 person · 2 fully retouched photos · 2 color-graded selects · 1-hour studio session",
    },
    {
      title: "Glam Session",
      price: "¥899",
      details:
        "Max 2 people · 3 fully retouched photos · 2-hour session",
    },
    {
      title: "Glam Outdoors",
      price: "¥799",
      details:
        "Outdoor cinematic portrait session",
    },
    {
      title: "Shimmer Session",
      price: "¥1799",
      details:
        "3-hour styled shoot · 7 retouched photos",
    },
    {
      title: "Shimmer Outdoors",
      price: "¥1499",
      details:
        "Cinematic multi-location shoot",
    },
  ];

  const portfolio = [
    { image: "/photos/graduation-1.jpg", title: "Graduation Stories" },
    { image: "/photos/portrait-1.jpg", title: "Portrait Sessions" },
    { image: "/photos/editorial-1.jpg", title: "Editorial Moments" },
  ];

  const calendlyURL =
    "https://calendly.com/weixiangphotos/new-meeting";

  const [rootElement, setRootElement] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.body);
  }, []);

  const scrollToBooking = () => {
    document.getElementById("calendar")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#2b2b2b] font-serif">

      {/* HERO */}
      <header className="relative h-screen overflow-hidden">

        <img
          src="/photos/header.jpg"
          className="absolute inset-0 h-full w-full object-cover grayscale scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

        <nav className="relative z-10 flex items-center justify-between px-10 py-8 text-white backdrop-blur-md bg-black/20">

          <div className="text-2xl md:text-4xl font-light tracking-[0.18em] uppercase">
            WEIXIANG PHOTOGRAPHY
          </div>

          <div className="hidden md:flex gap-8 text-sm uppercase text-white/90">
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

            <p className="mt-8 text-white/80">
              Elegant portrait photography crafted with cinematic tones and timeless emotion.
            </p>

            {/* TOP BUTTON */}
            <div className="mt-10">
              {rootElement && (
                <PopupButton
                  url={calendlyURL}
                  rootElement={rootElement}
                  text="Book Meeting"
                  className="inline-block rounded-full border border-white px-8 py-4 uppercase tracking-[0.2em] hover:bg-white hover:text-black transition"
                />
              )}
            </div>

          </div>

        </div>
      </header>

      {/* PORTFOLIO */}
      <FadeInSection>
        <section id="portfolio" className="px-6 py-24 md:px-16">

          <div className="max-w-7xl mx-auto text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500">
              Portfolio
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-light">
              Curated Visual Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">

            {portfolio.map((item) => (
              <a
                key={item.title}
                href="/portfolio"
                className="group overflow-hidden rounded-[2rem] bg-white shadow-lg"
              >
                <img
                  src={item.image}
                  className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-light">{item.title}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-neutral-500">
                    View Gallery
                  </p>
                </div>
              </a>
            ))}

          </div>

        </section>
      </FadeInSection>

      {/* PACKAGES */}
      <FadeInSection>
        <section id="packages" className="bg-[#ece6dc] px-6 py-24 md:px-16">

          <div className="max-w-6xl mx-auto text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-600">
              Packages
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-light">
              Signature Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className="rounded-[2rem] bg-white p-10 shadow-xl border border-neutral-100"
              >
                <h3 className="text-2xl font-light">{pkg.title}</h3>
                <div className="mt-6 text-5xl font-light">{pkg.price}</div>
                <p className="mt-6 text-neutral-600">{pkg.details}</p>

                <button
                  onClick={scrollToBooking}
                  className="mt-10 w-full rounded-full bg-black px-6 py-4 text-sm uppercase tracking-[0.2em] text-white"
                >
                  Reserve Package
                </button>

              </div>
            ))}

          </div>

        </section>
      </FadeInSection>

      {/* BOOKING */}
      <FadeInSection>
        <section id="calendar" className="py-24 px-6 text-center bg-[#f8f5f0]">

          <h2 className="text-4xl md:text-5xl font-light">
            Book Your Session
          </h2>

          <p className="mt-4 text-gray-600">
            Click below to open our booking calendar.
          </p>

          <div className="mt-10 flex justify-center">

            {rootElement && (
              <PopupButton
                url={calendlyURL}
                rootElement={rootElement}
                text="Book Now"
                className="bg-black text-white px-10 py-5 rounded-full uppercase tracking-[0.2em] hover:bg-neutral-800 transition"
              />
            )}

          </div>

        </section>
      </FadeInSection>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 px-6 py-10 text-center text-sm text-neutral-500">
        © 2026 WEIXIANG PHOTOGRAPHY · Crafted with elegance and light.
      </footer>

    </div>
  );
}