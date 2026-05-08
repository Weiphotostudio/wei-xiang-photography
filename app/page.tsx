"use client";
import React from "react";

export default function WeiPhotographyStudio() {
  const packages = [
    {
      title: "Glow Session",
      price: "¥499",
      details:
        "1 person · 2 fully retouched photos · 2 color-graded selects · 1-hour studio session · Natural styling guidance + simple posing",
    },
    {
      title: "Glam Session",
      price: "¥899",
      details:
        "Max 2 people · 3 fully retouched photos · 3 color-graded selects · 2-hour studio session · Creative direction included",
    },
    {
      title: "Glam Outdoors",
      price: "¥799",
      details:
        "3 fully retouched photos · 2 color-graded selects · 2.5-hour outdoor session · Outfit variation · Natural light storytelling",
    },
    {
      title: "Shimmer Session",
      price: "¥1799",
      details:
        "Max 3 people · 7 fully retouched photos · 5 color-graded selects · 3-hour styled concept shoot · Priority editing",
    },
    {
      title: "Shimmer Outdoors",
      price: "¥1499",
      details:
        "7 fully retouched photos · 5 color-graded selects · 3–4 hour session · Multiple locations · Cinematic natural light approach",
    },
  ];

  const availableDates = [
    "2026-05-14",
    "2026-05-18",
    "2026-05-22",
    "2026-05-28",
    "2026-06-03",
    "2026-06-10",
  ];

  const [selectedDate, setSelectedDate] = React.useState("");
  const [selectedSession, setSelectedSession] = React.useState("");

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
          alt="hero"
          className="absolute inset-0 h-full w-full object-cover grayscale scale-105"
        />
        <div className="absolute inset-0 bg-black/60" />

        <nav className="relative z-10 flex justify-between px-10 py-8 text-white">
          <div className="uppercase tracking-[0.3em]">
            Wei Xiang Photography
          </div>

          <div className="hidden md:flex gap-8 text-sm uppercase">
            <a href="#packages">Packages</a>
            <a href="#calendar">Booking</a>
          </div>
        </nav>

        <div className="relative z-10 flex h-[80%] items-center justify-center text-center text-white px-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-light">
              Capturing Emotion
              <span className="block italic">With Elegance</span>
            </h1>

            <button
              onClick={scrollToBooking}
              className="mt-10 border px-8 py-4 uppercase tracking-[0.2em]"
            >
              Book Your Session
            </button>
          </div>
        </div>
      </header>

      {/* PACKAGES */}
      <section id="packages" className="px-6 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.title} className="bg-white p-8 rounded-2xl shadow">
              <h3 className="text-2xl">{pkg.title}</h3>
              <div className="text-3xl mt-4">{pkg.price}</div>
              <p className="mt-4 text-sm text-gray-600">{pkg.details}</p>

              <button
                onClick={() => {
                  setSelectedSession(pkg.title);
                  scrollToBooking();
                }}
                className="mt-6 w-full bg-black text-white py-3 uppercase"
              >
                Reserve Package
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section id="calendar" className="px-6 py-24 bg-[#ece6dc]">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow">

          <h2 className="text-3xl mb-6">Booking</h2>

          <select
            value={selectedSession}
            onChange={(e) => setSelectedSession(e.target.value)}
            className="w-full p-3 border mb-4"
          >
            <option value="">Select Session</option>
            {packages.map((p) => (
              <option key={p.title} value={p.title}>
                {p.title}
              </option>
            ))}
          </select>

          <select
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full p-3 border mb-4"
          >
            <option value="">Select Date</option>
            {availableDates.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border mb-4"
          />

          <button
            onClick={() => {
              if (!selectedDate || !selectedSession) {
                alert("Please select a session and date");
                return;
              }

              alert(
                `Booking Request Sent!\n\nSession: ${selectedSession}\nDate: ${selectedDate}`
              );
            }}
            className="w-full bg-black text-white py-4 uppercase"
          >
            Request Booking
          </button>

          {selectedDate && selectedSession && (
            <div className="mt-6 text-center text-sm text-gray-600">
              Selected: {selectedSession} on {selectedDate}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
