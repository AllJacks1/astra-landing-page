import React, { useEffect, useRef, useState } from "react";
import {
  Check,
  X,
  ArrowRight,
  Building2,
  Users,
  Settings,
  Shield,
} from "lucide-react";
import "../styles/WhyAstra.css";

interface ComparisonItem {
  label: string;
  traditional: boolean;
  astra: boolean;
}

const comparisonItems: ComparisonItem[] = [
  { label: "Limited operational involvement", traditional: true, astra: false },
  { label: "Fragmented execution", traditional: true, astra: false },
  { label: "Single-service focus", traditional: true, astra: false },
  { label: "Built by business operators", traditional: false, astra: true },
  { label: "System-driven operations", traditional: false, astra: true },
  {
    label: "Centralized strategy + execution",
    traditional: false,
    astra: true,
  },
  { label: "Integrated multi-service model", traditional: false, astra: true },
];

const WhyAstra: React.FC = () => {
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
    id="capabilities"
      ref={sectionRef}
      className={`why-astra ${isVisible ? "why-astra--visible" : ""}`}
      aria-labelledby="why-astra-title"
    >
      <div className="why-astra__container">
        <div className="why-astra__header">
          <span className="why-astra__label">Why Astra?</span>
          <h2 id="why-astra-title" className="why-astra__title">
            The Astra Difference
          </h2>
          <p className="why-astra__description">
            Astra bridges strategy and execution through integrated teams,
            structured systems, and multi-industry experience.
          </p>
        </div>

        <div className="why-astra__comparison">
          <div className="why-astra__column why-astra__column--traditional">
            <div className="why-astra__column-header">
              <div className="why-astra__column-icon why-astra__column-icon--traditional">
                <X size={24} strokeWidth={2.5} />
              </div>
              <h3 className="why-astra__column-title">Traditional Agencies</h3>
            </div>
            <ul className="why-astra__list">
              {comparisonItems
                .filter((item) => item.traditional)
                .map((item, index) => (
                  <li
                    key={item.label}
                    className="why-astra__list-item"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="why-astra__list-icon why-astra__list-icon--negative">
                      <X size={18} strokeWidth={2.5} />
                    </span>
                    <span className="why-astra__list-text">{item.label}</span>
                  </li>
                ))}
            </ul>
          </div>

          <div className="why-astra__divider">
            <div className="why-astra__divider-line" />
            <div className="why-astra__divider-badge">
              <ArrowRight size={16} strokeWidth={2.5} />
            </div>
            <div className="why-astra__divider-line" />
          </div>

          <div className="why-astra__column why-astra__column--astra">
            <div className="why-astra__column-header">
              <div className="why-astra__column-icon why-astra__column-icon--astra">
                <Check size={24} strokeWidth={2.5} />
              </div>
              <h3 className="why-astra__column-title">
                Astra Group of Companies
              </h3>
            </div>
            <ul className="why-astra__list">
              {comparisonItems
                .filter((item) => item.astra)
                .map((item, index) => (
                  <li
                    key={item.label}
                    className="why-astra__list-item"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <span className="why-astra__list-icon why-astra__list-icon--positive">
                      <Check size={18} strokeWidth={2.5} />
                    </span>
                    <span className="why-astra__list-text">{item.label}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="why-astra__features">
          <div
            className="why-astra__feature-card"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="why-astra__feature-icon">
              <Building2 size={24} strokeWidth={2} />
            </div>
            <h4 className="why-astra__feature-title">System-Based</h4>
            <p className="why-astra__feature-text">
              Structured frameworks and repeatable processes that scale with
              your business.
            </p>
          </div>

          <div
            className="why-astra__feature-card"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="why-astra__feature-icon">
              <Users size={24} strokeWidth={2} />
            </div>
            <h4 className="why-astra__feature-title">Long-Term Scaling</h4>
            <p className="why-astra__feature-text">
              Built for sustained growth with integrated teams and continuous
              optimization.
            </p>
          </div>

          <div
            className="why-astra__feature-card"
            style={{ transitionDelay: "300ms" }}
          >
            <div className="why-astra__feature-icon">
              <Settings size={24} strokeWidth={2} />
            </div>
            <h4 className="why-astra__feature-title">Outcome-Driven</h4>
            <p className="why-astra__feature-text">
              Focused on measurable results, not just deliverables and campaign
              outputs.
            </p>
          </div>

          <div
            className="why-astra__feature-card"
            style={{ transitionDelay: "400ms" }}
          >
            <div className="why-astra__feature-icon">
              <Shield size={24} strokeWidth={2} />
            </div>
            <h4 className="why-astra__feature-title">Risk & Protection</h4>
            <p className="why-astra__feature-text">
              Comprehensive insurance and advisory services to safeguard your
              operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAstra;
