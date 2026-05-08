"use client";
import React from 'react';

export default function WeiPhotographyStudio() {
  const packages = [
    {
      title: 'Glow Session',
      price: '¥499',
      details:
        '1 person · 2 fully retouched photos · 2 color-graded selects · 1-hour studio session · Natural styling guidance + simple posing',
    },
    {
      title: 'Glam Session',
      price: '¥899',
      details:
        'Max 2 people · 3 fully retouched photos · 3 color-graded selects · 2-hour studio session · Creative direction included',
    },
    {
      title: 'Glam Outdoors',
      price: '¥799',
      details:
        '3 fully retouched photos · 2 color-graded selects · 2.5-hour outdoor session · Outfit variation · Natural light storytelling',
    },
    {
      title: 'Shimmer Session',
      price: '¥1799',
      details:
        'Max 3 people · 7 fully retouched photos · 5 color-graded selects · 3-hour styled concept shoot · Priority editing',
    },
    {
      title: 'Shimmer Outdoors',
      price: '¥1499',
      details:
        '7 fully retouched photos · 5 color-graded selects · 3–4 hour session · Multiple locations · Cinematic natural light approach',
    },
  ];

  const portfolio = [
    { image: '/photos/graduation-1.jpg', title: 'Graduation Stories' },
    { image: '/photos/portrait-1.jpg', title: 'Portrait Sessions' },
    { image: '/photos/editorial-1.jpg', title: 'Editorial Moments' },
  ];

  const availableDates = [
    '2026-05-14',
    '2026-05-18',
    '2026-05-22',
    '2026-05-28',
    '2026-06-03',
    '2026-06-10',
  ];

  const [selectedDate, setSelectedDate] = React.useState('');
  const [selectedSession, setSelectedSession] = React.useState('');

  const scrollToBooking = () => {
    document.getElementById("calendar")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#2b2b2b] font-serif">

      <header className="relative h-screen overflow-hidden">

        <img
          src="/photos/header.jpg"
          alt="Photography Hero"
          className="absolute inset-0 h-full w-full object-cover grayscale scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

        <nav className="relative z-10 flex items-center justify-between px-10 py-8 text-white backdrop-blur-md bg-black/20">
          <div className="text-2xl tracking-[0.3em] uppercase text-white">
            Wei Xiang Photography
          </div>

          <div className="hidden md:flex gap-8 text-sm tracking-wide uppercase text-white/90">
            <a href="#portfolio">Portfolio</a>
            <a href="#packages">Packages</a>
            <a href="#calendar">Availability</a>

            {/* FIXED */}
            <a href="#calendar">Booking</a>
          </div>
        </nav>

        <div className="relative z-10 flex h-[80%] items-center justify-center px-6 text-center text-white">
          <div className="max-w-3xl">

            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-white/80">
              Timeless Photography Experience
            </p>

            <h1 className="text-5xl md:text-7xl leading-tight font-light text-white">
              Capturing Emotion
              <span className="block italic">With Elegance</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-white/80 leading-relaxed">
              Elegant portrait photography crafted with soft cinematic tones, refined styling, and timeless emotion.
            </p>

            {/* FIXED */}
            <a
              href="#calendar"
              className="inline-block mt-10 rounded-full border border-white px-8 py-4 text-sm uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition duration-300"
            >
              Book Your Session
            </a>

          </div>
        </div>
      </header>

      <section id="portfolio" className="px-6 py-24 md:px-16">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16 text-center">
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500">
              Portfolio
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-light">
              Curated Visual Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {portfolio.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-[2rem] bg-white shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-light">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="bg-[#ece6dc] px-6 py-24 md:px-16">
        <div className="max-w-6xl mx-auto">

          <div className="mb-16 text-center">
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
                <p className="mt-6 leading-relaxed text-neutral-600">
                  {pkg.details}
                </p>

                {/* FIXED BUTTON ONLY */}
                <button
                  onClick={() => {
                    setSelectedSession(pkg.title);
                    scrollToBooking();
                  }}
                  className="mt-10 w-full rounded-full bg-black px-6 py-4 text-sm uppercase tracking-[0.2em] text-white transition hover:opacity-90"
                >
                  Reserve Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="calendar" className="bg-[#ece6dc] px-6 py-24 md:px-16">

        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-600">
              Availability
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-light">
              Available Booking Dates
            </h2>
          </div>

          <div className="max-w-2xl mx-auto rounded-[2rem] bg-white p-10 shadow-2xl border border-neutral-100">

            <select
              value={selectedSession}
              onChange={(e) => setSelectedSession(e.target.value)}
              className="w-full rounded-2xl border px-5 py-4 mb-4"
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
              className="w-full rounded-2xl border px-5 py-4 mb-4"
            >
              <option value="">Select Date</option>
              {availableDates.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>

            <input
              type="email"
              placeholder="hello@example.com"
              className="w-full rounded-2xl border px-5 py-4 mb-4"
            />

            <button
              onClick={() => {
                if (!selectedDate || !selectedSession) {
                  alert("Please select session and date");
                  return;
                }

                alert(
                  `Booking Request Sent!\nSession: ${selectedSession}\nDate: ${selectedDate}`
                );
              }}
              className="w-full rounded-full bg-black px-8 py-5 text-sm uppercase tracking-[0.25em] text-white transition hover:opacity-90"
            >
              Request Booking
            </button>

          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 px-6 py-10 text-center text-sm tracking-wide text-neutral-500">
        © 2026 Wei Xiang Photography · Crafted with elegance and light.
      </footer>

    </div>
  );
}
