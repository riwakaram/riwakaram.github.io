import React, { useState } from "react";

// Manual photo browsing keeps motion optional and controls clear of the image.
const Carousel = ({ id, slides = [] }) => {
    const [index, setIndex] = useState(0);
    if (!slides.length) return null;
    const current = index % slides.length;
    const { src, alt, captionTitle, captionText } = slides[current];
    const move = (direction) => setIndex((current + direction + slides.length) % slides.length);

    return (
        <figure id={id} className="news-gallery" aria-label="Event photos">
            <a className="news-photo-frame" href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size photo: ${alt}`} title="Open full-size photo">
                <img src={src} alt={alt} loading="lazy" />
                <span className="news-photo-expand" aria-hidden="true">↗</span>
            </a>
            <figcaption className="news-gallery-caption" aria-live="polite" aria-atomic="true">
                <span>{captionTitle || alt}</span>
                {captionText && <p>{captionText}</p>}
            </figcaption>
            {slides.length > 1 && (
                <div className="news-gallery-controls" role="group" aria-label="Photo navigation">
                    <button className="button-secondary" type="button" onClick={() => move(-1)} aria-label="Previous photo">←</button>
                    <span className="news-photo-count" aria-live="polite">{current + 1} / {slides.length}</span>
                    <button className="button-secondary" type="button" onClick={() => move(1)} aria-label="Next photo">→</button>
                </div>
            )}
        </figure>
    );
};

export default Carousel;
