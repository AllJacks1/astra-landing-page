import { useEffect, useRef, useState } from "react";
import {
  TrendingUp,
  Megaphone,
  Truck,
  Users,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import "../styles/About.css";

const capabilities = [
  {
    icon: TrendingUp,
    title: "Revenue Generation",
    description:
      "Drive sustainable growth through strategic sales optimization and market expansion initiatives.",
  },
  {
    icon: Megaphone,
    title: "Brand & Demand Creation",
    description:
      "Build powerful brand narratives and generate qualified demand across digital channels.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description:
      "Streamline supply chain operations with intelligent logistics and distribution solutions.",
  },
  {
    icon: Users,
    title: "Talent & Organization",
    description:
      "Attract, develop, and retain top-tier talent with modern HR and organizational strategies.",
  },
  {
    icon: Cpu,
    title: "Technology Enablement",
    description:
      "Accelerate digital transformation with cutting-edge technology infrastructure and tools.",
  },
  {
    icon: ShieldCheck,
    title: "Risk & Protection",
    description:
      "Safeguard your business with comprehensive risk management and compliance frameworks.",
  },
] as const;

export default function About() {
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
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`about ${isVisible ? "about--visible" : ""}`}
      aria-labelledby="about-title"
    >
      <div className="container about__inner">
        {/* Section Header */}
        <div className="about__header">
          <span className="about__label">Who We Are</span>
          <h2 id="about-title" className="about__title">
            About Astra
          </h2>
          <p className="about__description">
            Astra Group of Companies is an integrated business solutions group
            providing end-to-end support in Sales, Marketing, HR, Finance,
            Technology, and Operations.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="about__grid" role="list">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={capability.title}
                className="about__card"
                role="listitem"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="about__icon">
                  <Icon size={24} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="about__card-title">{capability.title}</h3>
                <p className="about__card-description">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Bar */}
        {/* <div className="about__trust">
          <p className="about__trust-label">Trusted by industry leaders</p>
          <div className="about__trust-logos" aria-hidden="true">
            {["Partner A", "Partner B", "Partner C", "Partner D"].map(
              (partner) => (
                <div key={partner} className="about__trust-logo">
                  {partner}
                </div>
              ),
            )}
          </div>
        </div> */}
      </div>
    </section>
  );
}
