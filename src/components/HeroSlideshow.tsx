import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";

const slides = [hero1, hero2, hero3];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={src}
            alt={`Community service slide ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="pl-6 md:pl-12 lg:pl-20 max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight font-heading mb-6">
            We Serve.
          </h1>

          <p className="hidden md:block text-base md:text-lg text-primary-foreground/90 leading-relaxed mb-8 max-w-xl">
            Lions-liikumise põhieesmärgiks on heategevus ja püüame
            seda oma võimaluste piires teha.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/toetused" className="btn-gold text-base">
              Toeta meie tegevust
            </Link>

            <Link
              to="/projektid"
              className="btn-secondary border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Meie projektid
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-primary-foreground scale-110"
                : "bg-primary-foreground/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;