import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import "../styles/Hero.css";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

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

  // Particle system
  const initParticles = useCallback((canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const particleCount = Math.min(80, Math.floor(rect.width / 15));
    const colors = ["#2A3A9D", "#3B4FB8", "#10B981", "#6366F1"];

    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, []);

  const animateParticles = useCallback(function animate() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);

    particlesRef.current.forEach((particle, i) => {
      // Mouse interaction
      const dx = mouseRef.current.x - particle.x;
      const dy = mouseRef.current.y - particle.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 150;

      if (dist < maxDist) {
        const force = (maxDist - dist) / maxDist;
        particle.speedX -= (dx / dist) * force * 0.02;
        particle.speedY -= (dy / dist) * force * 0.02;
      }

      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Damping
      particle.speedX *= 0.99;
      particle.speedY *= 0.99;

      // Boundary wrap
      if (particle.x < 0) particle.x = rect.width;
      if (particle.x > rect.width) particle.x = 0;
      if (particle.y < 0) particle.y = rect.height;
      if (particle.y > rect.height) particle.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.opacity;
      ctx.fill();

      // Draw connections
      particlesRef.current.slice(i + 1).forEach((other) => {
        const cdx = particle.x - other.x;
        const cdy = particle.y - other.y;
        const cDist = Math.sqrt(cdx * cdx + cdy * cdy);

        if (cDist < 120) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = particle.color;
          ctx.globalAlpha = (1 - cDist / 120) * 0.15;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    });

    ctx.globalAlpha = 1;
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    initParticles(canvas);
    rafRef.current = requestAnimationFrame(animateParticles);

    const handleResize = () => initParticles(canvas);
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [initParticles, animateParticles]);

  const handleExplore = () => {
    const ecosystem = document.querySelector("#ecosystem");
    if (ecosystem) ecosystem.scrollIntoView({ behavior: "smooth" });
  };

  const handleWatchVideo = () => {
    const why = document.querySelector("#capabilities");
    if (why) why.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className={`hero ${isVisible ? "hero--visible" : ""}`}
      aria-labelledby="hero-title"
    >
      {/* Layered background system */}
      <div className="hero__bg" aria-hidden="true">
        {/* Deep gradient base */}
        <div className="hero__bg-deep" />

        {/* Animated mesh orbs */}
        <div className="hero__bg-orb hero__bg-orb--1" />
        <div className="hero__bg-orb hero__bg-orb--2" />
        <div className="hero__bg-orb hero__bg-orb--3" />

        {/* Particle canvas */}
        <canvas ref={canvasRef} className="hero__bg-canvas" />

        {/* Floating star constellation */}
        <div className="hero__bg-stars">
          <div className="hero__bg-star-cluster">
            <svg
              className="hero__bg-star hero__bg-star--main"
              viewBox="0 0 200 200"
              fill="none"
            >
              <path
                d="M100 0L123.5 76.5L200 100L123.5 123.5L100 200L76.5 123.5L0 100L76.5 76.5L100 0Z"
                fill="currentColor"
              />
            </svg>
            <div className="hero__bg-star-ring" />
            <div className="hero__bg-star-ring hero__bg-star-ring--2" />
          </div>
          <svg
            className="hero__bg-star hero__bg-star--small-1"
            viewBox="0 0 200 200"
            fill="none"
          >
            <path
              d="M100 0L123.5 76.5L200 100L123.5 123.5L100 200L76.5 123.5L0 100L76.5 76.5L100 0Z"
              fill="currentColor"
            />
          </svg>
          <svg
            className="hero__bg-star hero__bg-star--small-2"
            viewBox="0 0 200 200"
            fill="none"
          >
            <path
              d="M100 0L123.5 76.5L200 100L123.5 123.5L100 200L76.5 123.5L0 100L76.5 76.5L100 0Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Light rays */}
        <div className="hero__bg-rays" />

        {/* Glass overlay */}
        <div className="hero__bg-glass" />
      </div>

      <div className="container hero__inner">
        {/* Floating badge */}
        <div className="hero__badge">
          <span className="hero__badge-pulse" />
          <span>Integrated Business Solutions</span>
        </div>

        {/* Headline */}
        <h1 id="hero-title" className="hero__title">
          Astra Group
          <span className="hero__title-accent"> of Companies</span>
        </h1>

        {/* Subheadline */}
        <p className="hero__subtitle">Your Partner in Every Business Journey</p>

        {/* Description */}
        <p className="hero__description">
          End-to-end support across sales, marketing, HR, finance, technology,
          and operations for startups, SMEs, and enterprise partners.
        </p>

        {/* CTA Group */}
        <div className="hero__actions">
          <button
            className="hero__btn hero__btn--primary"
            onClick={handleExplore}
            type="button"
          >
            <span className="hero__btn-shine" />
            <span>Explore Our Ecosystem</span>
            <ArrowRight size={18} aria-hidden="true" />
          </button>

          <button
            className="hero__btn hero__btn--secondary"
            onClick={handleWatchVideo}
            type="button"
          >
            Why choose Astra?
          </button>
        </div>

        {/* Stats */}
        {/* <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">8</span>
            <span className="hero__stat-label">Business Units</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">500+</span>
            <span className="hero__stat-label">Partners</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">15+</span>
            <span className="hero__stat-label">Years</span>
          </div>
        </div> */}
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
        <div className="hero__scroll-dot" />
      </div>
    </section>
  );
}
