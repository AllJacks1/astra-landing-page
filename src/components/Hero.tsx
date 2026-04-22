import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import "../styles/Hero.css";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleExplore = () => {
    const ecosystem = document.querySelector("#ecosystem");
    if (ecosystem) ecosystem.scrollIntoView({ behavior: "smooth" });
  };

  const handleWatchVideo = () => {
    // TODO: Implement video modal or redirect
    console.log("Play video");
  };

  return (
    <section
      ref={sectionRef}
      className={`hero ${isVisible ? "hero--visible" : ""}`}
      aria-labelledby="hero-title"
    >
      {/* Ambient background glow */}
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Badge */}
        {/* <div className="hero__badge">
          <span className="hero__badge-dot" aria-hidden="true" />
          Trusted by 500+ Partners Nationwide
        </div> */}

        {/* Headline */}
        <h1 id="hero-title" className="hero__title">
          Astra Group of Companies
        </h1>

        {/* Subheadline */}
        <p className="hero__subtitle">Your Partner in Every Business Journey</p>

        {/* Description */}
        <p className="hero__description">
          Integrated business solutions supporting startups, SMEs, and
          enterprise partners across sales, marketing, HR, finance, technology,
          and operations.
        </p>

        {/* CTA Group */}
        <div className="hero__actions">
          <button
            className="hero__btn hero__btn--primary"
            onClick={handleExplore}
            type="button"
          >
            Explore Our Ecosystem
            <ArrowRight size={18} aria-hidden="true" />
          </button>

          <button
            className="hero__btn hero__btn--secondary"
            onClick={handleWatchVideo}
            type="button"
          >
            <Play size={18} aria-hidden="true" />
            Watch Our Story
          </button>
        </div>

        {/* Social Proof */}
        {/* <div className="hero__social-proof">
          <div className="hero__avatars" aria-hidden="true">
            {["A", "B", "C", "D"].map((letter, i) => (
              <div key={i} className="hero__avatar">
                {letter}
              </div>
            ))}
          </div>
          <p className="hero__social-text">
            <strong>500+</strong> businesses empowered since 2010
          </p>
        </div> */}
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
      </div>
    </section>
  );
}
