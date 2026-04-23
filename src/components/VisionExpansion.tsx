import React, { useEffect, useRef, useState } from "react";
import { MapPin, Globe, Building2, Network, Target } from "lucide-react";
import "../styles/VisionExpansion.css";

interface RoadmapPhase {
  icon: React.ReactNode;
  phase: string;
  title: string;
  description: string;
  details: string[];
  status: "active" | "upcoming" | "future";
}

const phases: RoadmapPhase[] = [
  {
    icon: <MapPin size={22} strokeWidth={2} />,
    phase: "01",
    title: "Strengthen Mindanao",
    description: "Deepen our operational roots and market presence across the Mindanao region.",
    details: [
      "Expand local distribution networks",
      "Scale insurance and business solutions",
      "Reinforce partner and developer relationships",
    ],
    status: "active",
  },
  {
    icon: <Globe size={22} strokeWidth={2} />,
    phase: "02",
    title: "National Presence",
    description: "Expand to key cities nationwide with dedicated service coverage.",
    details: [
      "Strategic entry into Visayas and Luzon",
      "Deploy cross-trained regional teams",
      "Establish digital-first client onboarding",
    ],
    status: "upcoming",
  },
  {
    icon: <Building2 size={22} strokeWidth={2} />,
    phase: "03",
    title: "Regional Hubs",
    description: "Build integrated operational hubs with physical lounges and local support.",
    details: [
      "Hubs powered by iHub and Axial",
      "Local talent recruitment and training",
      "Full-service sales and insurance centers",
    ],
    status: "future",
  },
  {
    icon: <Network size={22} strokeWidth={2} />,
    phase: "04",
    title: "Integrated Ecosystem",
    description: "Become a unified business ecosystem supporting SMEs and enterprise clients.",
    details: [
      "IT, automation, and security services",
      "Building and facilities solutions",
      "Strong industry partnerships nationwide",
    ],
    status: "future",
  },
];

const VisionExpansion: React.FC = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const statusLabel = (status: RoadmapPhase["status"]) => {
    switch (status) {
      case "active":
        return "In Progress";
      case "upcoming":
        return "Upcoming";
      case "future":
        return "Planned";
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`vision-expansion ${isVisible ? "vision-expansion--visible" : ""}`}
      aria-labelledby="vision-expansion-title"
    >
      <div className="vision-expansion__container">
        <div className="vision-expansion__header">
          <span className="vision-expansion__label">Vision & Expansion</span>
          <h2 id="vision-expansion-title" className="vision-expansion__title">
            Our Growth Roadmap
          </h2>
          <p className="vision-expansion__description">
            A phased expansion strategy designed to scale Astra's integrated business ecosystem from regional roots to national reach.
          </p>
        </div>

        <div className="vision-expansion__roadmap">
          {/* Timeline spine */}
          <div className="vision-expansion__spine" aria-hidden="true">
            <div className="vision-expansion__spine-track" />
            <div className="vision-expansion__spine-progress" />
          </div>

          <div className="vision-expansion__phases">
            {phases.map((phase, index) => (
              <div
                key={phase.phase}
                className={`vision-expansion__phase vision-expansion__phase--${phase.status}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Node */}
                <div className="vision-expansion__node">
                  <div className="vision-expansion__node-ring">
                    <div className="vision-expansion__node-dot" />
                  </div>
                  <span className="vision-expansion__node-label">{phase.phase}</span>
                </div>

                {/* Card */}
                <div className="vision-expansion__card">
                  <div className="vision-expansion__card-accent" aria-hidden="true" />

                  <div className="vision-expansion__card-header">
                    <div className="vision-expansion__card-icon">{phase.icon}</div>
                    <span
                      className={`vision-expansion__card-badge vision-expansion__card-badge--${phase.status}`}
                    >
                      {statusLabel(phase.status)}
                    </span>
                  </div>

                  <h3 className="vision-expansion__card-title">{phase.title}</h3>
                  <p className="vision-expansion__card-description">{phase.description}</p>

                  <ul className="vision-expansion__card-list">
                    {phase.details.map((detail) => (
                      <li key={detail} className="vision-expansion__card-list-item">
                        <span className="vision-expansion__card-bullet" />
                        <span className="vision-expansion__card-text">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Long-term vision callout */}
        <div className="vision-expansion__vision">
          <div className="vision-expansion__vision-inner">
            <div className="vision-expansion__vision-icon">
              <Target size={32} strokeWidth={1.5} />
            </div>
            <div className="vision-expansion__vision-content">
              <h3 className="vision-expansion__vision-title">Long-Term Vision</h3>
              <p className="vision-expansion__vision-text">
                Become an integrated business ecosystem. Support SMEs and enterprise clients. Establish strong industry partnerships across the Philippines.
              </p>
            </div>
            {/* <div className="vision-expansion__vision-arrow">
              <ArrowRight size={20} strokeWidth={2} />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionExpansion;