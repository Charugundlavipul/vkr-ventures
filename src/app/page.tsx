import Link from "next/link";
import styles from "./page.module.css";
import { Reveal } from "../components/reveal";

const overviewFacts = [
  { label: "Base", value: "Sevierville, Tennessee" },
  { label: "Regional Reach", value: "Charlotte region through Concord" },
  { label: "Focus", value: "Short-term and long-term property management" },
  { label: "Approach", value: "Selective acquisitions and steady operations" },
];

const pillars = [
  {
    title: "Short-term rental acquisitions",
    description:
      "Tourism-facing assets with room for better listing quality, cleaner service execution, and stronger revenue management.",
  },
  {
    title: "Long-term rental positioning",
    description:
      "Neighborhood-driven housing where lease durability, product fit, and practical operations matter more than broad market headlines.",
  },
  {
    title: "Hold-focused operations",
    description:
      "A management approach built around occupancy resilience, vendor consistency, clean standards, and durable ownership decisions.",
  },
];

const principles = [
  {
    title: "Cash flow over noise",
    copy:
      "The first question is whether the asset can work operationally and financially. Everything visual comes after that.",
  },
  {
    title: "Regional conviction",
    copy:
      "Sevierville and the Charlotte region call for different playbooks. The business is designed to respect that difference.",
  },
  {
    title: "Built to hold",
    copy:
      "This is not churn for the sake of activity. The goal is to own better, operate better, and let disciplined holds compound.",
  },
];

const portfolioProfiles = [
  {
    type: "Short-term rental",
    title: "Smoky Ridge Cabin Collection",
    location: "Sevierville and Gatlinburg corridor",
    description:
      "Cabin inventory centered on family travel, shoulder-season durability, and guest experiences that support repeat demand.",
    detail: "Revenue lens: dynamic pricing, direct booking lift, service consistency.",
    tone: "assetOne",
  },
  {
    type: "Short-term rental",
    title: "Parkway Flex Suites",
    location: "109 Parkway corridor, Sevier County",
    description:
      "Furnished stays with clear standards and a streamlined operating model built for consistent performance.",
    detail: "Operating lens: lean staffing, sharper presentation, occupancy control.",
    tone: "assetTwo",
  },
  {
    type: "Long-term rental",
    title: "Charlotte Corporate Townhomes",
    location: "South End, NoDa, Plaza Midwood",
    description:
      "Townhome-style rentals suited to relocation demand, neighborhood identity, and long-term stability in strong submarkets.",
    detail: "Hold lens: stable lease demand, durable finishes, neighborhood-level fit.",
    tone: "assetThree",
  },
  {
    type: "Long-term rental",
    title: "Concord Family Rentals",
    location: "Charlotte metro north",
    description:
      "Duplex and single-family rentals that balance regional demand, metro access, and ownership discipline.",
    detail: "Risk lens: straightforward layouts, sensible capex, commuter convenience.",
    tone: "assetFour",
  },
];

const marketNotes = [
  {
    market: "Sevier County",
    title: "Tourism demand matters only when operations stay disciplined",
    copy:
      "The Smokies can generate strong short-term demand, but the real edge comes from cleaner standards, sharper listing quality, and reliable turnover.",
  },
  {
    market: "Pigeon Forge and Gatlinburg",
    title: "Experience-led inventory tends to outperform generic lodging",
    copy:
      "Properties that know exactly who they serve usually hold up better than units competing only on price or location labels.",
  },
  {
    market: "Charlotte region",
    title: "Neighborhood selection beats metro-wide optimism",
    copy:
      "Charlotte keeps growing, but rental performance still comes down to street-level fit, product quality, and lease stability.",
  },
  {
    market: "Concord",
    title: "Charlotte adjacency creates a quieter but useful rental lane",
    copy:
      "Charlotte-region overflow can support practical long-term rental inventory when convenience, schools, and commuting patterns line up.",
  },
];

const guides = [
  {
    title: "Sevierville",
    copy: "Gateway inventory for Smokies demand and stay-driven revenue.",
    tone: "guideOne",
  },
  {
    title: "Gatlinburg",
    copy: "Hospitality-led product where experience and upkeep drive returns.",
    tone: "guideTwo",
  },
  {
    title: "Charlotte",
    copy: "Urban rental demand built on neighborhood identity and access.",
    tone: "guideThree",
  },
  {
    title: "Concord",
    copy: "Charlotte-region practicality with room for durable long-term holds.",
    tone: "guideFour",
  },
];

const marketTape = [
  "Pigeon Forge",
  "Downtown Sevierville",
  "Wears Valley",
  "Knoxville",
  "South End",
  "NoDa",
  "Plaza Midwood",
  "Concord",
  "Charlotte Metro",
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navInner}>
            <a className={styles.brand} href="#top">
              <span className={styles.brandMark}>VKR Ventures</span>
              <span className={styles.brandMeta}>Sevierville TN | Charlotte Region</span>
            </a>

            <div className={styles.navLinks}>
              <a className={styles.navLink} href="#about">
                About
              </a>
              <a className={styles.navLink} href="#focus">
                Focus
              </a>
              <a className={styles.navLink} href="#portfolio">
                Portfolio
              </a>
              <a className={styles.navLink} href="#markets">
                Markets
              </a>
              <Link className={styles.navCta} href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        <section className={styles.hero} id="top">
          <div className={styles.heroBackdrop} aria-hidden="true">
            <div className={styles.heroSky} />
            <div className={styles.heroGlow} />
          </div>

          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Smokies and Charlotte region</p>
            <h1 className={styles.heroTitle}>Short-term and long-term property management.</h1>
            <p className={styles.heroCopy}>
              VKR Ventures manages short-term and long-term properties with a focus on reliable
              operations, responsive service, and stronger day-to-day performance.
            </p>

            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#focus">
                Explore services
              </a>
              <a className={styles.secondaryButton} href="#markets">
                View markets
              </a>
            </div>
          </div>
        </section>
      </header>

      <main className={styles.main}>
        <section className={`${styles.section} ${styles.lightSection}`} id="about">
          <div className={styles.container}>
            <div className={styles.splitLayout}>
              <Reveal className={styles.visualStack} distance="left">
                <div className={`${styles.visualPanel} ${styles.visualPanelLarge}`}>
                  <span className={styles.visualKicker}>Operating Base</span>
                  <h3 className={styles.visualTitle}>Sevierville anchored</h3>
                  <p className={styles.visualCopy}>
                    A Smokies-facing presence built around short-term rental logic, stay quality,
                    and assets that can hold up beyond peak weekends.
                  </p>
                </div>

                <div className={styles.visualGrid}>
                  <div className={`${styles.visualPanel} ${styles.visualPanelSmall}`}>
                    <span className={styles.visualKicker}>Charlotte Region</span>
                    <h3 className={styles.visualTitle}>Metro rental lanes</h3>
                  </div>

                  <div className={`${styles.visualPanel} ${styles.visualPanelAccent}`}>
                    <span className={styles.visualKicker}>Structure</span>
                    <h3 className={styles.visualTitle}>Member managed</h3>
                    <p className={styles.visualCopy}>Six or fewer members.</p>
                  </div>
                </div>
              </Reveal>

              <Reveal
                className={`${styles.sectionIntro} ${styles.aboutIntro}`}
                distance="right"
                delay={120}
              >
                <p className={styles.sectionLabel}>About VKR</p>
                <h2 className={styles.sectionTitle}>Based in Sevierville, with a Charlotte-region footprint.</h2>
                <div className={styles.aboutCopyStack}>
                  <p className={styles.sectionCopy}>
                    VKR Ventures is a rental-focused business operating from Sevierville,
                    Tennessee, with a Charlotte-region presence through Concord, North Carolina.
                  </p>
                  <p className={styles.sectionCopy}>
                    The focus stays on short-term stays in tourism-driven areas and long-term
                    rentals in neighborhoods with durable demand.
                  </p>
                </div>

                <div className={styles.factGrid}>
                  {overviewFacts.map((fact) => (
                    <article className={styles.factCard} key={fact.label}>
                      <span className={styles.factLabel}>{fact.label}</span>
                      <strong className={styles.factValue}>{fact.value}</strong>
                    </article>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="focus">
          <div className={styles.container}>
            <Reveal className={styles.centerIntro}>
              <p className={styles.sectionLabel}>What We Focus On</p>
              <h2 className={styles.sectionTitle}>Short-term rentals, long-term rentals, and steady operations.</h2>
              <p className={styles.sectionCopy}>
                That is the core story. The rest of the website should support it, not inflate it.
              </p>
            </Reveal>

            <div className={styles.pillarGrid}>
              {pillars.map((pillar, index) => (
                <Reveal
                  as="article"
                  className={styles.pillarCard}
                  key={pillar.title}
                  delay={index * 120}
                >
                  <div className={`${styles.pillarVisual} ${styles[`pillar${index + 1}`]}`} />
                  <span className={styles.pillarIndex}>0{index + 1}</span>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarCopy}>{pillar.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.darkSection}`}>
          <div className={styles.container}>
            <div className={styles.principlesWrap}>
              <Reveal className={styles.quoteBlock} distance="left">
                <p className={styles.sectionLabel}>How We Work</p>
                <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>Simple standards that keep the portfolio grounded.</h2>
                <p className={`${styles.sectionCopy} ${styles.sectionCopyLight}`}>
                  We prefer clear standards over big claims: buy carefully, operate consistently,
                  and stay selective about what fits the hold.
                </p>
              </Reveal>

              <div className={styles.principleGrid}>
                {principles.map((principle, index) => (
                  <Reveal
                    as="article"
                    className={styles.principleCard}
                    key={principle.title}
                    delay={index * 140}
                    distance="right"
                  >
                    <h3 className={styles.principleTitle}>{principle.title}</h3>
                    <p className={styles.principleCopy}>{principle.copy}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection}`} id="portfolio">
          <div className={styles.container}>
            <Reveal className={styles.sectionHeader}>
              <div>
                <p className={styles.sectionLabel}>Portfolio Focus</p>
                <h2 className={styles.sectionTitle}>The kinds of properties VKR is built around.</h2>
              </div>
              <p className={styles.sectionAside}>
                These are example portfolio lanes, not live listings. They show how the business
                can be positioned across Tennessee and the Charlotte region.
              </p>
            </Reveal>

            <div className={styles.assetGrid}>
              {portfolioProfiles.map((profile, index) => (
                <Reveal
                  as="article"
                  className={styles.assetCard}
                  key={profile.title}
                  delay={index * 110}
                >
                  <div className={`${styles.assetVisual} ${styles[profile.tone]}`}>
                    <span className={styles.assetType}>{profile.type}</span>
                    <span className={styles.assetBadge}>{profile.location}</span>
                  </div>

                  <div className={styles.assetContent}>
                    <h3 className={styles.assetTitle}>{profile.title}</h3>
                    <p className={styles.assetDescription}>{profile.description}</p>
                    <p className={styles.assetDetail}>{profile.detail}</p>
                    <Link className={styles.assetLink} href="/contact">
                      Ask about this lane
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.darkSection}`} id="markets">
          <div className={styles.container}>
            <Reveal className={styles.sectionHeader}>
              <div>
                <p className={styles.sectionLabel}>Why These Markets</p>
                <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>Different markets call for different rental strategies.</h2>
              </div>
              <Link className={styles.secondaryButton} href="/contact">
                Start a conversation
              </Link>
            </Reveal>

            <div className={styles.noteGrid}>
              {marketNotes.map((note, index) => (
                <Reveal
                  as="article"
                  className={styles.noteCard}
                  key={note.title}
                  delay={index * 120}
                >
                  <span className={styles.noteMarket}>{note.market}</span>
                  <h3 className={styles.noteTitle}>{note.title}</h3>
                  <p className={styles.noteCopy}>{note.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.lightSection} ${styles.guideSection}`}>
          <div className={styles.container}>
            <Reveal className={styles.sectionHeader}>
              <div>
                <p className={styles.sectionLabel}>Key Markets</p>
                <h2 className={styles.sectionTitle}>A few places where the focus is strongest.</h2>
              </div>
              <p className={styles.sectionAside}>
                The focus stays tied to real operating lanes across the Smokies, Charlotte, and
                nearby growth corridors.
              </p>
            </Reveal>

            <div className={styles.guideGrid}>
              {guides.map((guide, index) => (
                <Reveal
                  as="article"
                  className={`${styles.guideCard} ${styles[guide.tone]}`}
                  key={guide.title}
                  delay={index * 110}
                >
                  <span className={styles.guideLabel}>Guide</span>
                  <div className={styles.guideFooter}>
                    <h3 className={styles.guideTitle}>{guide.title}</h3>
                    <p className={styles.guideCopy}>{guide.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className={styles.marketTape}>
              {marketTape.map((item) => (
                <span className={styles.marketChip} key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer} id="contact">
        <div className={styles.container}>
          <div className={styles.footerShell}>
            <Reveal className={styles.footerIntro} distance="left">
              <p className={styles.sectionLabel}>Connect</p>
              <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>
                Looking at a rental opportunity in Tennessee or the Charlotte region?
              </h2>
              <p className={`${styles.sectionCopy} ${styles.sectionCopyLight}`}>
                If a property fits the focus, the details below are the right place to start.
              </p>

              <div className={styles.snapshotPanel}>
                <span className={styles.snapshotLabel}>Best fit</span>
                <div className={styles.snapshotFields}>
                  <span className={styles.snapshotField}>Short-term rentals in the Smokies</span>
                  <span className={styles.snapshotField}>Long-term rentals in the Charlotte region</span>
                  <span className={styles.snapshotField}>Well-located properties with operating upside</span>
                </div>

                <div className={styles.heroActions}>
                  <Link className={styles.primaryButton} href="/contact">
                    Open contact page
                  </Link>
                  <a className={styles.secondaryButton} href="#markets">
                    Review markets
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal className={styles.footerMeta} distance="right" delay={120}>
              <div className={styles.footerCard}>
                <span className={styles.footerCardLabel}>Based in Tennessee</span>
                <strong className={styles.footerCardValue}>109 Parkway Suite 4C</strong>
                <span className={styles.footerCardSubvalue}>Sevierville, TN 37862</span>
              </div>

              <div className={styles.footerCard}>
                <span className={styles.footerCardLabel}>Charlotte-region footprint</span>
                <strong className={styles.footerCardValue}>2357 Herrons Nest Pl NW</strong>
                <span className={styles.footerCardSubvalue}>Concord, NC 28027</span>
              </div>

              <div className={styles.footerCard}>
                <span className={styles.footerCardLabel}>Focus</span>
                <strong className={styles.footerCardValue}>Short-term and long-term rentals</strong>
                <span className={styles.footerCardSubvalue}>
                  Properties selected for location strength, operating fit, and hold quality
                </span>
              </div>
            </Reveal>
          </div>

          <div className={styles.footerBottom}>
            <span>VKR Ventures LLC</span>
            <span>Sevierville, Tennessee</span>
            <span>Charlotte region</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
