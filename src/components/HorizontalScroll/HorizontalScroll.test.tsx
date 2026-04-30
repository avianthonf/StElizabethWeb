import { act, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { HorizontalScroll } from "./HorizontalScroll";

describe("HorizontalScroll", () => {
  it("applies pinned stage CSS variables", () => {
    render(
      <HorizontalScroll height="72vh" gap="24px" ariaLabel="Feature scroller">
        <article>First panel</article>
        <article>Second panel</article>
      </HorizontalScroll>,
    );

    expect(screen.getByLabelText("Feature scroller")).toHaveStyle({
      "--horizontal-scroll-height": "72vh",
      "--horizontal-scroll-gap": "24px",
    });
  });

  it("renders children inside one vertical-driven horizontal stage", () => {
    render(
      <HorizontalScroll ariaLabel="Reusable horizontal section">
        <article>Video panel</article>
        <article>Dynamic panel</article>
      </HorizontalScroll>,
    );

    expect(screen.getByLabelText("Reusable horizontal section")).toBeInTheDocument();
    expect(screen.getByText("Video panel")).toBeInTheDocument();
    expect(screen.getByText("Dynamic panel")).toBeInTheDocument();
  });

  it("translates the track when vertical scroll progresses", () => {
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((callback) => {
      callback(0);
      return 1;
    });

    Object.defineProperty(window, "innerHeight", { configurable: true, value: 800 });

    render(
      <HorizontalScroll ariaLabel="Measured stage">
        <article>First panel</article>
        <article>Second panel</article>
      </HorizontalScroll>,
    );

    const stage = screen.getByLabelText("Measured stage");
    const viewport = stage.firstElementChild as HTMLDivElement;
    const track = viewport.firstElementChild as HTMLDivElement;

    Object.defineProperty(viewport, "clientWidth", { configurable: true, value: 1000 });
    Object.defineProperty(viewport, "clientHeight", { configurable: true, value: 800 });
    Object.defineProperty(track, "scrollWidth", { configurable: true, value: 1800 });
    vi.spyOn(stage, "getBoundingClientRect").mockReturnValue({
      bottom: 1600,
      height: 1600,
      left: 0,
      right: 1000,
      top: -400,
      width: 1000,
      x: 0,
      y: -400,
      toJSON: () => ({}),
    });

    act(() => {
      window.dispatchEvent(new Event("resize"));
      window.dispatchEvent(new Event("scroll"));
    });

    expect(track).toHaveStyle({ transform: "translate3d(-400px, 0, 0)" });
  });
});
