import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WalkerHomepage } from "./WalkerHomepage";

describe("WalkerHomepage", () => {
  it("renders one vertical-driven horizontal stage with exact-screen hero copy", () => {
    render(<WalkerHomepage />);

    expect(screen.getByLabelText("Walker homepage vertical driven horizontal stage")).toBeInTheDocument();
    expect(screen.getByLabelText("Walker homepage video introduction")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1, name: "Start with the whole screen." })).toBeInTheDocument();
  });

  it("uses an accessible placeholder instead of an empty unsourced video", () => {
    render(<WalkerHomepage />);

    expect(screen.getByRole("img", { name: "Approved campus video will appear here." })).toBeInTheDocument();
    expect(screen.queryByLabelText("Campus life video placeholder")).not.toBeInTheDocument();
  });

  it("renders a dynamic second page with horizontally stacked child cards", () => {
    render(<WalkerHomepage />);

    expect(screen.getByLabelText("Walker homepage dynamic content page")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "Pages stack to the right." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Curiosity" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Dignity" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3, name: "Honor" })).toBeInTheDocument();
  });
});
