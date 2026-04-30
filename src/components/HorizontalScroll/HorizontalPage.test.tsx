import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HorizontalPage } from "./HorizontalPage";

describe("HorizontalPage", () => {
  it("renders a labeled screen-sized page", () => {
    render(
      <HorizontalPage screen ariaLabel="Intro page">
        <h2>Intro</h2>
      </HorizontalPage>,
    );

    expect(screen.getByLabelText("Intro page")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Intro" })).toBeInTheDocument();
  });

  it("applies responsive page widths", () => {
    render(
      <HorizontalPage
        width="1200px"
        tabletWidth="110vw"
        mobileWidth="190vw"
        smallMobileWidth="210vw"
        landscapeWidth="130vw"
        ariaLabel="Dynamic page"
      >
        <h2>Dynamic</h2>
      </HorizontalPage>,
    );

    expect(screen.getByLabelText("Dynamic page")).toHaveStyle({
      "--horizontal-page-width": "1200px",
      "--horizontal-page-tablet-width": "110vw",
      "--horizontal-page-mobile-width": "190vw",
      "--horizontal-page-small-mobile-width": "210vw",
      "--horizontal-page-landscape-width": "130vw",
    });
  });
});
