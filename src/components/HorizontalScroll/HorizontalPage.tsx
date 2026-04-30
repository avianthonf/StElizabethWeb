import type { CSSProperties, ReactNode } from "react";
import styles from "./HorizontalPage.module.css";

type HorizontalPageProps = {
  children: ReactNode;
  width?: string;
  screen?: boolean;
  className?: string;
  ariaLabel?: string;
};

export function HorizontalPage({
  children,
  width = "auto",
  screen = false,
  className,
  ariaLabel,
}: HorizontalPageProps): ReactNode {
  const pageClassName = [styles.page, screen ? styles.screen : "", className ?? ""].filter(Boolean).join(" ");
  const style = { "--horizontal-page-width": width } as CSSProperties;

  return (
    <section className={pageClassName} style={style} aria-label={ariaLabel}>
      {children}
    </section>
  );
}
