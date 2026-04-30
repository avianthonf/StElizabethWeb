import Link from "next/link";
import { HorizontalPage, HorizontalScroll } from "@/components/HorizontalScroll";
import { LoadOverlay } from "@/components/LoadOverlay";
import styles from "./WalkerHomepage.module.css";

const values = [
  { number: "01", title: "Curiosity", body: "Students are invited to ask better questions and keep discovering what comes next." },
  { number: "02", title: "Dignity", body: "A disciplined school culture gives every learner room to be known and respected." },
  { number: "03", title: "Honor", body: "Character, service, and responsibility shape the daily rhythm of campus life." },
];

export function WalkerHomepage(): React.ReactNode {
  return (
    <main className={styles.page}>
      <LoadOverlay />

      <header className={styles.titleBar} aria-label="Primary site navigation">
        <Link className={styles.brand} href="/" aria-label="St. Elizabeth High School home">
          <span className={styles.crest} aria-hidden="true">S</span>
          <span>St. Elizabeth High School</span>
        </Link>

        <nav className={styles.navLinks} aria-label="Audience navigation">
          <Link href="/inquire">Inquire</Link>
          <Link href="/visit">Visit</Link>
          <Link href="/summer">Summer</Link>
          <Link href="/about">St. Elizabeth</Link>
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

      <HorizontalScroll height="100vh" gap="0px" ariaLabel="St. Elizabeth homepage vertical driven horizontal stage">
        <HorizontalPage screen className={`${styles.panel} ${styles.videoPanel}`} ariaLabel="St. Elizabeth homepage video introduction">
          <div className={styles.videoFallback} role="presentation" aria-hidden="true" />
          <video className={styles.heroVideo} src="/videos/1-homepage-video.mp4" autoPlay muted loop playsInline preload="metadata" aria-label="St. Elizabeth campus homepage video." />
          <div className={styles.heroOverlay}>
            <p className={styles.heroStatement}>
              St. Elizabeth High School inspires transformative learning through meaningful relationships, academic excellence and unique opportunities. With an average class size of 15 students, each student is challenged, supported and most of all...
            </p>
            <h1>Known</h1>
          </div>
        </HorizontalPage>

        <HorizontalPage
          width="clamp(900px, 110vw, 1500px)"
          tabletWidth="min(1120px, 124vw)"
          mobileWidth="max(760px, 188vw)"
          smallMobileWidth="max(720px, 205vw)"
          landscapeWidth="max(880px, 132vw)"
          className={`${styles.panel} ${styles.dynamicPage}`}
          ariaLabel="St. Elizabeth homepage dynamic content page"
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
