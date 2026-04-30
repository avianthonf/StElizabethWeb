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

        <HorizontalPage width="clamp(900px, 110vw, 1500px)" className={`${styles.panel} ${styles.dynamicPage}`} ariaLabel="Walker homepage dynamic content page">
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
