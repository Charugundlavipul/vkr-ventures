import Link from "next/link";
import { Reveal } from "../../components/reveal";
import styles from "./page.module.css";

const officeCards = [
  {
    label: "Tennessee office",
    title: "109 Parkway Suite 4C",
    detail: "Sevierville, TN 37862",
  },
  {
    label: "Charlotte-region mailing",
    title: "2357 Herrons Nest Pl NW",
    detail: "Concord, NC 28027",
  },
];

const serviceNotes = [
  "Short-term property management",
  "Long-term property management",
  "Smokies and Charlotte-region properties",
];

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navInner}>
            <Link className={styles.brand} href="/">
              <span className={styles.brandMark}>VKR Ventures</span>
              <span className={styles.brandMeta}>Sevierville TN | Charlotte Region</span>
            </Link>

            <div className={styles.navLinks}>
              <Link className={styles.navLink} href="/#about">
                About
              </Link>
              <Link className={styles.navLink} href="/#focus">
                Focus
              </Link>
              <Link className={styles.navLink} href="/#portfolio">
                Portfolio
              </Link>
              <Link className={styles.navLink} href="/#markets">
                Markets
              </Link>
              <Link aria-current="page" className={styles.navCta} href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        <section className={styles.hero}>
          <div className={styles.heroBackdrop} aria-hidden="true" />

          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Contact Us</p>
            <h1 className={styles.heroTitle}>Contact VKR Ventures.</h1>
            <p className={styles.heroCopy}>
              Tell us if you need short-term or long-term property management in the Smokies or
              the Charlotte region.
            </p>
          </div>
        </section>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.contactLayout}>
              <Reveal className={styles.formCard} distance="left">
                <p className={styles.cardLabel}>Send an inquiry</p>
                <h2 className={styles.cardTitle}>Start with the property and what you need.</h2>
                <p className={styles.cardCopy}>
                  Share the basics below so the conversation starts in the right lane.
                </p>

                <form className={styles.form}>
                  <div className={styles.fieldRow}>
                    <label className={styles.field}>
                      <span className={styles.fieldLabel}>Full name</span>
                      <input className={styles.input} name="name" placeholder="Your name" type="text" />
                    </label>

                    <label className={styles.field}>
                      <span className={styles.fieldLabel}>Email</span>
                      <input
                        className={styles.input}
                        name="email"
                        placeholder="you@example.com"
                        type="email"
                      />
                    </label>
                  </div>

                  <div className={styles.fieldRow}>
                    <label className={styles.field}>
                      <span className={styles.fieldLabel}>Phone</span>
                      <input
                        className={styles.input}
                        name="phone"
                        placeholder="Optional"
                        type="tel"
                      />
                    </label>

                    <label className={styles.field}>
                      <span className={styles.fieldLabel}>Service needed</span>
                      <div className={styles.selectWrap}>
                        <select
                          className={`${styles.input} ${styles.selectInput}`}
                          defaultValue=""
                          name="service"
                        >
                          <option value="" disabled>
                            Select a service
                          </option>
                          <option value="short-term">Short-term property management</option>
                          <option value="long-term">Long-term property management</option>
                          <option value="both">Both</option>
                        </select>
                      </div>
                    </label>
                  </div>

                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>Property location</span>
                    <input
                      className={styles.input}
                      name="location"
                      placeholder="City, area, or property address"
                      type="text"
                    />
                  </label>

                  <label className={styles.field}>
                    <span className={styles.fieldLabel}>Message</span>
                    <textarea
                      className={styles.textarea}
                      name="message"
                      placeholder="Tell us about the property, current use, and what help you need."
                      rows={7}
                    />
                  </label>

                  <button className={styles.primaryButton} type="button">
                    Submit inquiry
                  </button>
                </form>
              </Reveal>

              <Reveal className={styles.infoColumn} distance="right" delay={120}>
                <div className={styles.infoCard}>
                  <p className={styles.cardLabel}>Contact details</p>
                  <h2 className={styles.cardTitle}>VKR Ventures LLC</h2>
                  <p className={styles.cardCopy}>
                    Property management focused on short-term and long-term rentals across
                    Tennessee and the Charlotte region.
                  </p>

                  <div className={styles.officeList}>
                    {officeCards.map((office) => (
                      <article className={styles.officeCard} key={office.title}>
                        <span className={styles.officeLabel}>{office.label}</span>
                        <strong className={styles.officeTitle}>{office.title}</strong>
                        <span className={styles.officeDetail}>{office.detail}</span>
                      </article>
                    ))}
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <p className={styles.cardLabel}>Best fit</p>
                  <div className={styles.noteList}>
                    {serviceNotes.map((note) => (
                      <span className={styles.noteItem} key={note}>
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerInner}>
            <span>VKR Ventures LLC</span>
            <span>Sevierville, Tennessee</span>
            <span>Charlotte region</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
