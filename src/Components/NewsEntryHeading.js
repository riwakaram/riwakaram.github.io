import React from "react";
import OrganizationLogo from "./OrganizationLogo";

export default function NewsEntryHeading({ entry, featured = false }) {
    return (
        <div className="news-entry-heading">
            <div className="news-entry-heading-text">
                {featured && <p className="section-kicker">Latest Update</p>}
                <time>{entry.date}</time>
                <h3>{entry.title}</h3>
            </div>
            {entry.organization && <OrganizationLogo name={entry.organization} />}
        </div>
    );
}
