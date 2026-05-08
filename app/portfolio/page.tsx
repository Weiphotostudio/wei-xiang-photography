"use client";

import React from "react";

export default function PortfolioPage() {
  const images = [
    "/photos/graduation-1.jpg",
    "/photos/portrait-1.jpg",
    "/photos/editorial-1.jpg",

    "/photos/gallery-01.jpg",
    "/photos/gallery-02.jpg",
    "/photos/gallery-03.jpg",
    "/photos/gallery-04.jpg",
    "/photos/gallery-05.jpg",
    "/photos/gallery-06.jpg",
    "/photos/gallery-07.jpg",
    "/photos/gallery-08.jpg",
    "/photos/gallery-09.jpg",
    "/photos/gallery-10.jpg",
  ];

  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const nextImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      (selectedIndex - 1 + images.length) % images.length
    );
  };

  return (
    <main className="min-h-screen bg-[#f8f5f0] px-6 py-24 md:px-16">

      <div className="max-w-7xl mx-auto">

        {/* TOP BAR */}
        <div className="mb-20 flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="text-center md:text-left">

            <p className="uppercase tracking-[0.3em] text-sm text-neutral-500">
              Full Portfolio
            </p>

            <h1 className="mt-4 text-5xl md:text-6xl font-light text-[#2b2b2b]">
              Visual Storytelling
            </h1>

          </div>

          {/* HOME BUTTON */}
          <a
            href="/"
            className="rounded-full border border-black px-8 py-4 text-sm uppercase tracking-[0.2em] text-black transition hover:bg-black hover:text-white"
          >
            Return Home
          </a>

        </div>

        {/* MASONRY GALLERY */}
        <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">

          {images.map((src, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="break-inside-avoid overflow-hidden rounded-[2rem] bg-white shadow-lg group w-full"
            >

              <img
                src={src}
                alt={`Portfolio ${index + 1}`}
                className="w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </button>
          ))}

        </div>

      </div>

      {/* FULLSCREEN VIEWER */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">

          {/* CLOSE */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white text-5xl font-light"
          >
            ×
          </button>

          {/* LEFT */}
          <button
            onClick={prevImage}
            className="absolute left-6 md:left-10 text-white text-5xl hover:opacity-70 transition"
          >
            ‹
          </button>

          {/* IMAGE */}
          <img
            src={images[selectedIndex]}
            alt="Expanded"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain"
          />

          {/* RIGHT */}
          <button
            onClick={nextImage}
            className="absolute right-6 md:right-10 text-white text-5xl hover:opacity-70 transition"
          >
            ›
          </button>

          {/* COUNTER */}
          <div className="absolute bottom-8 text-white text-sm tracking-[0.2em] uppercase">
            {selectedIndex + 1} / {images.length}
          </div>

        </div>
      )}

    </main>
  );
}