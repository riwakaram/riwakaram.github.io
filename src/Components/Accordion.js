import React from "react";

const Accordion = ({ sections }) => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("unhandledrejection", (event) => {
        console.error("Unhandled promise rejection:", event.reason);
    });

    return (
        <div className="accordion" id="accordionExample">
            {sections.map((section) => (
                <div className="accordion-item" key={section.id}>
                    <h2
                        className="accordion-header"
                        id={`heading-${section.id}`}
                    >
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse-${section.id}`}
                            aria-expanded="false"
                            aria-controls={`collapse-${section.id}`}
                            onClick={handleScrollToTop}
                        >
                            {section.title}
                        </button>
                    </h2>
                    <div
                        id={`collapse-${section.id}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`heading-${section.id}`}
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">{section.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
