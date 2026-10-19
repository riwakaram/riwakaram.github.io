import React from "react";
import uci from "../Images/logos/uci.svg";
import asml from "../Images/logos/asml.svg";
import balamand from "../Images/logos/balamand.png";
import csff from "../Images/logos/csff.svg";
import conservatory from "../Images/logos/conservatory.jpg";
import aviapro from "../Images/logos/aviapro.svg";
import geecs from "../Images/logos/geecs.jpg";
import css from "../Images/logos/ieee-css.jpg";
import ieee from "../Images/logos/ieee.png";
import computer from "../Images/logos/ieee-computer.png";
import mentor from "../Images/logos/mentor.svg";
import zaka from "../Images/logos/zaka.webp";
import asme from "../Images/logos/asme.svg";
import arab from "../Images/logos/arab-iot.png";
import mathworks from "../Images/logos/mathworks.svg";
import ielts from "../Images/logos/ielts.png";
import collegeboard from "../Images/logos/collegeboard.png";
import guides from "../Images/logos/guides.png";
import laTimes from "../Images/logos/la-times.svg";

// Specific organizations precede parent institutions (e.g. GEECS before UCI).
// Asset provenance and presentation variants: Images/logos/sources.json.
const organizations = [
    { match: /Los Angeles Times|LA Times/i, src: laTimes, name: "Los Angeles Times", dark: true },
    { match: /GEECS/i, src: geecs, name: "UCI GEECS" },
    { match: /IEEE CSS|Control Systems Society/i, src: css, name: "IEEE Control Systems Society" },
    { match: /IEEE Computer Society/i, src: computer, name: "IEEE Computer Society" },
    { match: /Mentor Collective/i, src: mentor, name: "Mentor Collective" },
    { match: /ZAKA/i, src: zaka, name: "ZAKA" },
    { match: /ASME/i, src: asme, name: "ASME", dark: true },
    { match: /Arab IoT|Lebanon IoT/i, src: arab, name: "Arab IoT & AI Challenge" },
    { match: /Mathworks/i, src: mathworks, name: "MathWorks" },
    { match: /IELTS/i, src: ielts, name: "IELTS" },
    { match: /^SAT\b/, src: collegeboard, name: "College Board" },
    { match: /Guides du Liban/i, src: guides, name: "Association des Guides du Liban" },
    { match: /Sainte Famille/i, src: csff, name: "Collège de la Sainte Famille Fanar" },
    { match: /Conservatory of Music/i, src: conservatory, name: "Lebanese National Higher Conservatory of Music" },
    { match: /AviaPro/i, src: aviapro, name: "AviaPro Consulting" },
    { match: /ASML/i, src: asml, name: "ASML" },
    { match: /Balamand/i, src: balamand, name: "University of Balamand" },
    { match: /University of California, Irvine|UCI|UC Irvine/, src: uci, name: "UC Irvine" },
    { match: /\bIEEE\b/, src: ieee, name: "IEEE", dark: true },
];

export default function OrganizationLogo({ name = "" }) {
    const organization = organizations.find((item) => item.match.test(name));
    return organization ? <img className={`organization-logo${organization.dark ? " organization-logo-dark" : ""}`} src={organization.src} alt={organization.name} loading="lazy" width="144" height="64" /> : null;
}
