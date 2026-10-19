import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Publications from "./Publications";

const openPublications = () => render(<MemoryRouter initialEntries={["/publications"]}><Publications /></MemoryRouter>);

test("publication filters show the correct resources and restore the complete list", () => {
    openPublications();
    const papers = within(screen.getByRole("region", { name: "Papers & thesis" }));
    const filters = within(screen.getByRole("group", { name: "Filter publications" }));
    expect(papers.getAllByRole("article")).toHaveLength(5);
    fireEvent.click(filters.getByRole("button", { name: /Preprints/ }));
    expect(papers.getAllByRole("article")).toHaveLength(3);
    expect(screen.getByRole("status").textContent).toBe("Showing 3 of 5");
    fireEvent.click(filters.getByRole("button", { name: /Published/ }));
    expect(papers.getAllByRole("article")).toHaveLength(1);
    expect(papers.getByRole("link", { name: /DOI/ }).getAttribute("href")).toBe("https://doi.org/10.1109/CDC57313.2025.11312845");
    fireEvent.click(filters.getByRole("button", { name: /All/ }));
    expect(papers.getAllByRole("article")).toHaveLength(5);
});

test("a presentation link reveals its paper even when a different filter is selected", () => {
    openPublications();
    fireEvent.click(within(screen.getByRole("group", { name: "Filter publications" })).getByRole("button", { name: /Thesis/ }));
    expect(document.getElementById("altruistic-collaboration")).toBeNull();
    fireEvent.click(within(document.getElementById("geecs-2026")).getByRole("link", { name: /Explore the related paper/ }));
    expect(document.getElementById("altruistic-collaboration")).toBeTruthy();
    expect(screen.getByRole("status").textContent).toBe("Showing 5 of 5");
});
