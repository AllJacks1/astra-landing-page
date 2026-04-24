import React, { useEffect, useRef, useState } from "react";
import {
  MapPin,
  FileText,
  Headphones,
  TrendingUp,
  Shield,
  ArrowUpRight,
} from "lucide-react";
import "../styles/InsuranceCapability.css";

interface Capability {
  icon: React.ReactNode;
  label: string;
  title: string;
  items: string[];
}

const capabilities: Capability[] = [
  {
    icon: <MapPin size={22} strokeWidth={2} />,
    label: "Distribution",
    title: "Distribution Capability",
    items: [
      "Physical presence and local market access",
      "Planned expansion across key regions",
      "On-ground and digital reach",
    ],
  },
  {
    icon: <FileText size={22} strokeWidth={2} />,
    label: "Services",
    title: "Service Offering",
    items: [
      "CTPL and other non-life issuances",
      "OR/CR processing",
      "Insurance advisory and support (dedicated servicing team)",
    ],
  },
  {
    icon: <Headphones size={22} strokeWidth={2} />,
    label: "Support",
    title: "Operational Support",
    items: [
      "Dedicated teams for processing and coordination",
      "Structured workflow for client handling",
      "Integration with Astra's business units",
    ],
  },
  {
    icon: <TrendingUp size={22} strokeWidth={2} />,
    label: "Scale",
    title: "Scalability",
    items: [
      "Ability to deploy teams quickly",
      "Multi-industry client base",
      "Built for high-volume transactions",
    ],
  },
];

const InsuranceCapability: React.FC = () => {
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
      { threshold: 0.12 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`insurance-capability ${isVisible ? "insurance-capability--visible" : ""}`}
      aria-labelledby="insurance-capability-title"
    >
      <div className="insurance-capability__container">
        <div className="insurance-capability__header">
          <span className="insurance-capability__label">
            Insurance Capability
          </span>
          <h2
            id="insurance-capability-title"
            className="insurance-capability__title"
          >
            Risk & Protection
          </h2>
          <p className="insurance-capability__description">
            Comprehensive insurance distribution and advisory services backed by
            structured operational support and scalable infrastructure.
          </p>
        </div>

        <div className="insurance-capability__grid">
          {capabilities.map((cap, index) => (
            <div
              key={cap.label}
              className="insurance-capability__card"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="insurance-capability__card-top">
                <div className="insurance-capability__card-icon">
                  {cap.icon}
                </div>
                <span className="insurance-capability__card-label">
                  {cap.label}
                </span>
              </div>
              <h3 className="insurance-capability__card-title">{cap.title}</h3>
              <ul className="insurance-capability__card-list">
                {cap.items.map((item) => (
                  <li
                    key={item}
                    className="insurance-capability__card-list-item"
                  >
                    <span className="insurance-capability__card-bullet" />
                    <span className="insurance-capability__card-text">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="insurance-capability__cta">
          <div className="insurance-capability__cta-inner">
            <div className="insurance-capability__cta-icon">
              <Shield size={28} strokeWidth={2} />
            </div>
            <div className="insurance-capability__cta-content">
              <h3 className="insurance-capability__cta-title">
                Astria Insurance Solutions - Life & Non-Life Insurance Services
              </h3>
              <p className="insurance-capability__cta-text">
                Life insurance, non-life insurance, and dedicated insurance
                advisory through our Astria Insurance Solutions business unit.
              </p>
            </div>
            <a
              href="https://astriainsurancesolutions.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="insurance-capability__cta-button"
            >
              <span>Learn More</span>
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceCapability;
