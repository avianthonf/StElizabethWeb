import Link from "next/link";
import { HorizontalPage, HorizontalScroll } from "@/components/HorizontalScroll";
import styles from "./WalkerHomepage.module.css";

const values = [
  { number: "01", title: "Curiosity", body: "Students are invited to ask better questions and keep discovering what comes next." },
  { number: "02", title: "Dignity", body: "A disciplined school culture gives every learner room to be known and respected." },
  { number: "03", title: "Honor", body: "Character, service, and responsibility shape the daily rhythm of campus life." },
];

export function WalkerHomepage(): React.ReactNode {
  return (
    <main className={styles.page}>
      <header className={styles.titleBar} aria-label="Primary site navigation">
        <Link className={styles.brand} href="/" aria-label="The Walker School home">
          <span className={styles.crest} aria-hidden="true">W</span>
          <span>The Walker School</span>
        </Link>

        <nav className={styles.navLinks} aria-label="Audience navigation">
          <Link href="/inquire">Inquire</Link>
          <Link href="/visit">Visit</Link>
          <Link href="/summer">Summer</Link>
          <Link href="/about">Walker</Link>
        </nav>

        <button className={styles.searchButton} type="button" aria-label="Search" disabled>
          <span aria-hidden="true" />
        </button>

        <button className={styles.menuButton} type="button" aria-label="Open menu" disabled>
          <span>Menu</span>
          <span className={styles.menuIcon} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </header>

      <HorizontalScroll height="100vh" gap="0px" ariaLabel="Walker homepage vertical driven horizontal stage">
        <HorizontalPage screen className={`${styles.panel} ${styles.videoPanel}`} ariaLabel="Walker homepage video introduction">
          <div className={styles.videoFallback} role="presentation" aria-hidden="true" />
          <div className={styles.heroVideoPlaceholder} role="img" aria-label="Approved campus video will appear here." />
          <div className={styles.heroOverlay}>
            <p className={styles.eyebrow}>The Walker School</p>
            <h1>Start with the whole screen.</h1>
            <p>
              The first page is exactly one viewport wide and tall. Vertical scroll now drives the horizontal movement.
            </p>
          </div>
        </HorizontalPage>

        <HorizontalPage
          width="clamp(900px, 110vw, 1500px)"
          tabletWidth="min(1120px, 124vw)"
          mobileWidth="max(760px, 188vw)"
          smallMobileWidth="max(720px, 205vw)"
          landscapeWidth="max(880px, 132vw)"
          className={`${styles.panel} ${styles.dynamicPage}`}
          ariaLabel="Walker homepage dynamic content page"
        >
          <div className={styles.dynamicIntro}>
            <p className={styles.eyebrow}>We Value</p>
            <h2>Pages stack to the right.</h2>
            <p>
              This second page contains child elements arranged horizontally inside the larger pinned stage.
            </p>
          </div>

          <div className={styles.dynamicCards}>
            {values.map((value) => (
              <article className={styles.valueCard} key={value.number}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </HorizontalPage>
      </HorizontalScroll>
    </main>
  );
}
