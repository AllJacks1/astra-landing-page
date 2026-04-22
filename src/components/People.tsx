import { useEffect, useRef, useState } from "react";
import {
  Users,
  Shuffle,
  Globe,
  ShieldCheck,
  Target,
  Award,
} from "lucide-react";
import "../styles/People.css";

const pillars = [
  {
    icon: Users,
    title: "Business Unit Leaders",
    subtitle: "Ownership at every level",
    color: "#2A3A9D",
    features: [
      "Dedicated owners and leaders per function",
      "Accountable for performance and execution",
      "Trained in Astra systems and standards",
    ],
    stat: "50+",
    statLabel: "Unit Leaders",
  },
  {
    icon: Shuffle,
    title: "Cross-Trained Teams",
    subtitle: "Versatility by design",
    color: "#3B4FB8",
    features: [
      "Multi-skilled across sales, marketing, HR, finance, and operations",
      "Flexible deployment based on client needs",
      "Built for collaboration, not silos",
    ],
    stat: "200+",
    statLabel: "Team Members",
  },
  {
    icon: Globe,
    title: "Multi-Industry Exposure",
    subtitle: "Experience that transfers",
    color: "#1E2A70",
    features: [
      "Experience across real estate, logistics, hospitality, and services",
      "Adaptable to different business environments",
      "Practical, execution-driven mindset",
    ],
    stat: "4",
    statLabel: "Core Industries",
  },
] as const;

const trustIndicators = [
  { icon: ShieldCheck, label: "Background Verified" },
  { icon: Target, label: "KPI-Driven" },
  { icon: Award, label: "Certified Professionals" },
] as const;

export default function People() {
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

  return (
    <section
      ref={sectionRef}
      id="people"
      className={`people ${isVisible ? "people--visible" : ""}`}
      aria-labelledby="people-title"
    >
      <div className="container people__inner">
        {/* Section Header */}
        <div className="people__header">
          <span className="people__label">Our People</span>
          <h2 id="people-title" className="people__title">
            The Team Behind Every Success
          </h2>
          <p className="people__description">
            We invest in people who take ownership, adapt fast, and deliver
            results—because your business deserves nothing less than a team
            built for execution.
          </p>
        </div>

        {/* Trust Bar */}
        <div className="people__trust-bar" role="list">
          {trustIndicators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="people__trust-item"
                role="listitem"
              >
                <Icon size={18} aria-hidden="true" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Pillars Grid */}
        <div className="people__grid" role="list">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.title}
                className="people__card"
                role="listitem"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card Top */}
                <div className="people__card-top">
                  <div
                    className="people__icon"
                    style={{
                      background: `${pillar.color}14`,
                      color: pillar.color,
                    }}
                  >
                    <Icon size={24} strokeWidth={2} aria-hidden="true" />
                  </div>
                  {/* <div
                    className="people__stat-badge"
                    style={{ background: pillar.color }}
                  >
                    <span className="people__stat-value">{pillar.stat}</span>
                    <span className="people__stat-label">
                      {pillar.statLabel}
                    </span>
                  </div> */}
                </div>

                {/* Card Content */}
                <h3 className="people__card-title">{pillar.title}</h3>
                <p className="people__card-subtitle">{pillar.subtitle}</p>

                {/* Features */}
                <ul className="people__features">
                  {pillar.features.map((feature) => (
                    <li key={feature} className="people__feature">
                      <span
                        className="people__feature-dot"
                        style={{ background: pillar.color }}
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom accent */}
                <div
                  className="people__card-accent"
                  style={{ background: pillar.color }}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Banner */}
        <div className="people__trust-banner">
          <div className="people__trust-banner-inner">
            <ShieldCheck size={28} aria-hidden="true" />
            <blockquote className="people__trust-banner-quote">
              Every Astra team member is trained, verified, and accountable. We
              don't outsource trust—we build it, one deployment at a time.
            </blockquote>
            <span className="people__trust-banner-divider" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
