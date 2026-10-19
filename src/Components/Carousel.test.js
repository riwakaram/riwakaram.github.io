import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

const slides = [
    { src: "conference.jpg", alt: "Conference group", captionTitle: "At the conference" },
    { src: "presentation.jpg", alt: "Presentation", captionTitle: "Sharing ideas" },
];

test("photo navigation wraps and updates the full-size destination and caption", () => {
    render(<Carousel slides={slides} />);
    expect(screen.getByRole("img").getAttribute("alt")).toBe("Conference group");
    fireEvent.click(screen.getByRole("button", { name: "Previous photo" }));
    expect(screen.getByText("2 / 2")).toBeTruthy();
    expect(screen.getByText("Sharing ideas")).toBeTruthy();
    expect(screen.getAllByRole("link")).toHaveLength(1);
    expect(screen.getByRole("link", { name: /Open full-size photo/ }).getAttribute("href")).toBe("presentation.jpg");
    fireEvent.click(screen.getByRole("button", { name: "Next photo" }));
    expect(screen.getByText("1 / 2")).toBeTruthy();
    expect(screen.getByRole("img").getAttribute("alt")).toBe("Conference group");
});

test("a single photo remains accessible without redundant navigation", () => {
    render(<Carousel slides={slides.slice(0, 1)} />);
    expect(screen.queryByRole("button")).toBeNull();
    expect(screen.getByRole("link", { name: /Open full-size photo/ }).getAttribute("href")).toBe("conference.jpg");
});
