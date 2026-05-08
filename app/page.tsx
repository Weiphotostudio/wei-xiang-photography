"use client";

export default function PortfolioPage() {
  const images = [
    "/photos/graduation-1.jpg",
    "/photos/graduation-2.jpg",
    "/photos/graduation-3.jpg",

    "/photos/portrait-1.jpg",
    "/photos/portrait-2.jpg",
    "/photos/portrait-3.jpg",

    "/photos/editorial-1.jpg",
    "/photos/editorial-2.jpg",
    "/photos/editorial-3.jpg",
  ];

  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#2b2b2b] px-6 py-24 md:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="mb-20 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500">
            Full Portfolio
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-light">
            Visual Storytelling
          </h1>
        </div>

        <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">

          {images.map((src, index) => (
            <div
              key={index}
              className="break-inside-avoid overflow-hidden rounded-[2rem] bg-white shadow-lg group"
            >
              <img
                src={src}
                alt={`Portfolio ${index}`}
                className="w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}
