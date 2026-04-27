import React, { useEffect } from "react";

const Accordion = ({ sections }) => {
    const scrollToSection = (id, delay = 0) => {
        window.setTimeout(() => {
            const item = document.getElementById("accordion-item-" + id);

            if (item) {
                item.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, delay);
    };

    useEffect(() => {
        const handlers = sections.map((section) => {
            const collapse = document.getElementById("collapse-" + section.id);
            const handler = () => scrollToSection(section.id, 40);

            if (collapse) {
                collapse.addEventListener("shown.bs.collapse", handler);
            }

            return { collapse, handler };
        });

        return () => {
            handlers.forEach(({ collapse, handler }) => {
                if (collapse) {
                    collapse.removeEventListener("shown.bs.collapse", handler);
                }
            });
        };
    }, [sections]);

    const handleButtonClick = (sectionId, event) => {
        if (event.currentTarget.getAttribute("aria-expanded") === "true") {
            scrollToSection(sectionId, 0);
        }
    };

    return (
        <div className="accordion" id="accordionExample">
            {sections.map((section) => (
                <div
                    className="accordion-item"
                    id={`accordion-item-${section.id}`}
                    key={section.id}
                >
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
                            onClick={(event) =>
                                handleButtonClick(section.id, event)
                            }
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
