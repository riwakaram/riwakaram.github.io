import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

beforeEach(() => {
    window.scrollTo = jest.fn();
    Element.prototype.scrollIntoView = jest.fn();
});

const openPage = (path) => render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>);

test("Projects is reachable from navigation and shows TBD", () => {
    openPage("/");
    fireEvent.click(screen.getByRole("link", { name: "Projects" }));
    expect(screen.getByRole("heading", { name: "TBD" })).toBeTruthy();
    expect(document.title).toBe("Projects | Riwa Karam");
});

test("CV shows the timeline and opens details from section navigation", () => {
    openPage("/vitae");
    expect(screen.getByRole("heading", { name: "Doctor of Philosophy, Electrical and Computer Engineering" })).toBeTruthy();
    const skills = screen.getByRole("button", { name: /Skills/ });
    expect(skills.getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(screen.getByRole("link", { name: /Skills$/ }));
    expect(skills.getAttribute("aria-expanded")).toBe("true");
    fireEvent.click(screen.getByRole("button", { name: /Expand all details/ }));
    expect(screen.getByRole("button", { name: /Languages/ }).getAttribute("aria-expanded")).toBe("true");
    fireEvent.click(screen.getByRole("button", { name: /Collapse details/ }));
    expect(skills.getAttribute("aria-expanded")).toBe("false");
    expect(screen.getByRole("link", { name: "Download PDF" }).getAttribute("href")).toBeTruthy();
});

test("Research includes four accessible conceptual illustrations", () => {
    openPage("/research");
    expect(screen.getAllByRole("img", { name: /Concept illustration/ })).toHaveLength(4);
    expect(screen.getByText("Conceptual illustrations of the research areas.")).toBeTruthy();
});

test("Research map updates its explanation and opens the matching area", () => {
    openPage("/");
    const map = screen.getByRole("group", { name: "Research topics" });
    fireEvent.click(within(map).getByRole("button", { name: "Learning" }));
    expect(within(map).getByRole("button", { name: "Learning" }).getAttribute("aria-pressed")).toBe("true");
    expect(within(map).getByRole("button", { name: "Collaboration" }).getAttribute("aria-pressed")).toBe("false");
    expect(screen.getByText(/Learning when sharing a robot is worth the trade-off/)).toBeTruthy();
    const link = screen.getByRole("link", { name: /Explore this area/ });
    expect(link.getAttribute("href")).toBe("/research#learning");
    fireEvent.click(link);
    expect(document.title).toBe("Research | Riwa Karam");
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
});

test.each(["/", "/research", "/projects", "/publications", "/news", "/vitae", "/about"])("%s has a single page title and main landmark", (path) => {
    openPage(path);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(screen.getByRole("main").id).toBe("main-content");
});

test("News year navigation reveals older entries and supports expand and collapse", () => {
    openPage("/news");
    const year = screen.getByRole("button", { name: "2023" });
    expect(year.getAttribute("aria-expanded")).toBe("false");
    const nav = screen.getByRole("navigation", { name: "News years" });
    fireEvent.click(within(nav).getByRole("link", { name: /2023/ }));
    expect(year.getAttribute("aria-expanded")).toBe("true");
    fireEvent.click(screen.getByRole("button", { name: /Expand all years/ }));
    expect(screen.getByRole("button", { name: "2024" }).getAttribute("aria-expanded")).toBe("true");
    fireEvent.click(screen.getByRole("button", { name: /Collapse years/ }));
    expect(year.getAttribute("aria-expanded")).toBe("false");
});

test("Related research opens the matching publication", () => {
    openPage("/research");
    fireEvent.click(screen.getByRole("link", { name: "Collaboration in Multi-Robot Systems: Taxonomy and Survey of Frameworks for Collaboration" }));
    expect(document.getElementById("collaboration-survey")).toBeTruthy();
    expect(document.title).toBe("Publications | Riwa Karam");
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
});

test("Direct links open collapsed News and CV sections", () => {
    const news = openPage("/news#news-2023");
    expect(screen.getByRole("button", { name: "2023" }).getAttribute("aria-expanded")).toBe("true");
    news.unmount();
    openPage("/vitae#cv-skills");
    expect(screen.getByRole("button", { name: /Skills/ }).getAttribute("aria-expanded")).toBe("true");
});

test("Trailing-slash pages use the right title and canonical URL", () => {
    openPage("/research/");
    expect(document.title).toBe("Research | Riwa Karam");
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("Research.");
    expect(document.querySelector('link[rel="canonical"]').href).toBe("https://riwakaram.github.io/research/");
});

test("Unknown routes show a useful error page and clear noindex when returning home", () => {
    openPage("/missing-page");
    expect(screen.getByRole("heading", { name: "Page not found" })).toBeTruthy();
    expect(document.querySelector('meta[name="robots"]').content).toBe("noindex");
    expect(document.querySelector('link[rel="canonical"]')).toBeNull();
    fireEvent.click(screen.getByRole("link", { name: "Back to home" }));
    expect(document.querySelector('meta[name="robots"]')).toBeNull();
    expect(document.querySelector('link[rel="canonical"]').href).toBe("https://riwakaram.github.io/");
});
