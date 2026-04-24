import { useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import "../styles/Services.css";

interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logo: string; // Path to logo image
  offerings: string[];
  cta?: {
    label: string;
    href: string;
    external?: boolean;
  };
  cta_social?: {
    label: string;
    href: string;
    external?: boolean;
  };
  color: string;
}

const services: Service[] = [
  {
    id: "avaris",
    name: "AVARIS",
    tagline: "Sales Solutions",
    description:
      "End-to-end sales operations that convert leads into revenue. From prospecting to closing, AVARIS deploys trained teams and proven systems to accelerate your sales pipeline.",
    logo: "/avaris-logo.png",
    offerings: [
      "Lead generation (24/7 hub team operations)",
      "Sales team deployment",
      "Closing systems",
    ],
    cta: {
      label: "Visit AVARIS",
      href: "https://avarissalessolutions.vercel.app/",
      external: true,
    },
    cta_social: {
      label: "Visit Facebook Page",
      href: "https://web.facebook.com/profile.php?id=61576153880445",
      external: true,
    },
    color: "#2A3A9D",
  },
  {
    id: "axis",
    name: "AXIS",
    tagline: "Marketing Solutions",
    description:
      "Full-spectrum marketing solutions that build brands and drive demand. AXIS combines creative strategy with data-driven execution across digital and traditional channels.",
    logo: "/axis-logo.png",
    offerings: [
      "Branding",
      "Digital Marketing & Campaign Execution",
      "Traditional Marketing",
    ],
    cta: {
      label: "Visit AXIS",
      href: "https://axismarketingsolutions-virid.vercel.app/",
      external: true,
    },
    cta_social: {
      label: "Visit Facebook Page",
      href: "https://web.facebook.com/yourmsaxis",
      external: true,
    },
    color: "#2A3A9D",
  },
  {
    id: "axial",
    name: "Axial",
    tagline: "Real Estate Services",
    description:
      "Helping families and investors get the right property faster. Residential for steady progress today, and strategic land for big wins tomorrow.",
    logo: "/axial-logo.png",
    offerings: [
      "Residential — condos and house-and-lots ready for quick move-in, with financing via bank or Pag-IBIG",
      "Strategic Land — raw, agricultural, or commercial sites for long-term growth and high-value opportunities",
      "Faster matching, easier paperwork, transparent process",
    ],
    cta: {
      label: "Visit AXIAL",
      href: "https://axialrealestate-services.vercel.app/",
      external: true,
    },
    cta_social: {
      label: "Visit Facebook Page",
      href: "https://web.facebook.com/AxialRES",
      external: true,
    },
    color: "#2A3A9D",
  },
  {
    id: "ascend",
    name: "ASCEND",
    tagline: "HR Solutions",
    description:
      "People operations that scale with your business. ASCEND handles recruitment, training, and organizational design so you can focus on growth.",
    logo: "/ascend-logo.png",
    offerings: ["Recruitment", "Training & Organizational Structuring"],
    cta_social: {
      label: "Visit Facebook Page",
      href: "https://web.facebook.com/wehear.ascend",
      external: true,
    },
    color: "#2A3A9D",
  },
  {
    id: "astria",
    name: "ASTRIA",
    tagline: "Insurance Solutions",
    description:
      "Comprehensive insurance advisory and coverage solutions for individuals and businesses. ASTRIA connects you with the right protection for every stage of growth.",
    logo: "/astria-logo.png",
    offerings: ["Life insurance", "Non-life insurance", "Insurance advisory"],
    cta: {
      label: "Visit ASTRIA",
      href: "https://astriainsurancesolutions.vercel.app/",
      external: true,
    },
    cta_social: {
      label: "Visit Facebook Page",
      href: "https://web.facebook.com/astria.insurance",
      external: true,
    },
    color: "#2A3A9D",
  },
  {
    id: "aivox",
    name: "AIVOX",
    tagline: "Tech Solutions",
    description:
      "Custom technology that automate workflows and modernize operations. From web platforms to CRM integrations, AIVOX builds systems that work for you.",
    logo: "/logos/aivox-logo.svg",
    offerings: ["Web & systems development", "CRM and systems integration"],
    color: "#2A3A9D",
  },
];

export default function Services() {
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
      { threshold: 0.08 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCtaClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    service: Service,
  ) => {
    if (!service.cta?.external) {
      e.preventDefault();
      const el = document.querySelector(service.cta!.href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`services ${isVisible ? "services--visible" : ""}`}
      aria-labelledby="services-title"
    >
      <div className="container services__inner">
        {/* Section Header */}
        <div className="services__header">
          <span className="services__label">What We Offer</span>
          <h2 id="services-title" className="services__title">
            Core Services
          </h2>
          <p className="services__description">
            Five specialized business units, one integrated ecosystem. Each
            service is designed to work independently or as part of your
            complete growth strategy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services__grid" role="list">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="services__card"
              role="listitem"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Card Header */}
              <div className="services__card-header">
                <div className="services__logo-wrapper">
                  <img
                    src={service.logo}
                    alt={`${service.name} logo`}
                    className="services__logo"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback: show initials if logo fails
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget
                        .nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  {/* Logo fallback */}
                  <div
                    className="services__logo-fallback"
                    style={{ background: service.color }}
                  >
                    {service.name.charAt(0)}
                  </div>
                </div>
                <div className="services__meta">
                  <h3 className="services__name">{service.name}</h3>
                  <span
                    className="services__tagline"
                    style={{ color: service.color }}
                  >
                    {service.tagline}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="services__card-description">
                {service.description}
              </p>

              {/* Offerings */}
              <ul className="services__offerings">
                {service.offerings.map((item) => (
                  <li key={item} className="services__offering">
                    <span
                      className="services__offering-dot"
                      style={{ background: service.color }}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Row */}
              <div className="services__cta-row">
                {service.cta && (
                  <a
                    href={service.cta.href}
                    className="services__cta"
                    style={{
                      color: service.color,
                      borderColor: `${service.color}30`,
                    }}
                    onClick={(e) => handleCtaClick(e, service)}
                    {...(service.cta.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    <span>{service.cta.label}</span>
                    {service.cta.external ? (
                      <ExternalLink size={14} aria-hidden="true" />
                    ) : (
                      <ArrowRight size={14} aria-hidden="true" />
                    )}
                  </a>
                )}

                {service.cta_social && (
                  <a
                    href={service.cta_social.href}
                    className="services__cta services__cta--social"
                    style={{
                      background: service.color,
                      color: "white",
                      borderColor: `${service.color}30`,
                    }}
                    onClick={(e) => handleCtaClick(e, service)}
                    {...(service.cta_social.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    <span>{service.cta_social.label}</span>
                    {service.cta_social.external ? (
                      <ExternalLink size={14} aria-hidden="true" />
                    ) : (
                      <ArrowRight size={14} aria-hidden="true" />
                    )}
                  </a>
                )}
              </div>

              {/* Bottom accent */}
              <div
                className="services__card-accent"
                style={{ background: service.color }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
