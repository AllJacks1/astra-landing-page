import { useEffect, useRef, useState } from "react";
import { Award, Building2, Quote } from "lucide-react";
import "../styles/Founder.css";

const credentials = [
  {
    icon: Award,
    label: "Licensed Real Estate Broker",
    value: "PRC Accredited",
  },
  { icon: Building2, label: "Major Partners", value: "Filinvest, Ayala, SMDC" },
] as const;

export default function Founder() {
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
      id="founder"
      className={`founder ${isVisible ? "founder--visible" : ""}`}
      aria-labelledby="founder-title"
    >
      <div className="container founder__inner">
        {/* Section Label */}
        <span className="founder__label">Leadership</span>

        <div className="founder__layout">
          {/* Image Column */}
          <div className="founder__image-wrapper">
            <div className="founder__image-container">
              <img
                src="/founder-mares-nuera.jpg"
                alt="Mares Mae Cayog Nuera, Founder of Astra Group of Companies"
                className="founder__image"
                loading="lazy"
              />
              {/* Decorative elements */}
              <div className="founder__image-accent" aria-hidden="true" />
              <div className="founder__image-frame" aria-hidden="true" />
            </div>

            {/* Floating badge */}
            <div className="founder__badge">
              <Award size={16} aria-hidden="true" />
              <span>15+ Years Experience</span>
            </div>
          </div>

          {/* Content Column */}
          <div className="founder__content">
            <h2 id="founder-title" className="founder__title">
              Founder
            </h2>

            <div className="founder__name-block">
              <h3 className="founder__name">Mares Mae Cayog Nuera</h3>
              <span className="founder__role">Founder & CEO</span>
            </div>

            {/* Quote */}
            <blockquote className="founder__quote">
              <Quote
                size={24}
                className="founder__quote-icon"
                aria-hidden="true"
              />
              <p>
                Building Astra Group has been about creating meaningful
                partnerships that drive real business outcomes for our clients
                across every industry we touch.
              </p>
            </blockquote>

            {/* Bio */}
            <div className="founder__bio">
              <p>
                Licensed Real Estate Broker and founder of Astra Group of
                Companies with extensive experience across real estate,
                logistics, hospitality, and business solutions.
              </p>
              <p>
                Has worked alongside major developers including{" "}
                <strong>Filinvest Land</strong>, <strong>Ayala Land</strong>,
                and <strong>SM Development Corporation</strong>, establishing a
                track record of trusted partnerships and successful project
                deliveries.
              </p>
            </div>

            {/* Credentials */}
            <div className="founder__credentials" role="list">
              {credentials.map((cred) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={cred.label}
                    className="founder__credential"
                    role="listitem"
                  >
                    <div className="founder__credential-icon">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <div className="founder__credential-text">
                      <span className="founder__credential-label">
                        {cred.label}
                      </span>
                      <span className="founder__credential-value">
                        {cred.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
