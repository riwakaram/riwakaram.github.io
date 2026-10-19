import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import pages from "../data/sitePages.json";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        const target = hash && document.getElementById(hash.slice(1));
        if (target) {
            target.scrollIntoView({ behavior: "instant", block: "start" });
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
        const normalizedPath = pathname.replace(/\/+$/, "") || "/";
        const page = pages.find((item) => item.path === normalizedPath);
        document.title = `${page ? page.title : "Page not found"} | Riwa Karam`;
        const setMeta = (selector, attribute, value) => {
            const element = document.querySelector(selector);
            if (element) element.setAttribute(attribute, value);
        };
        const canonical = `https://riwakaram.github.io${normalizedPath === "/" ? "/" : `${normalizedPath}/`}`;
        if (page) {
            let link = document.querySelector('link[rel="canonical"]');
            if (!link) { link = document.createElement("link"); link.rel = "canonical"; document.head.appendChild(link); }
            link.href = canonical;
            setMeta('meta[name="description"]', "content", page.description);
            setMeta('meta[property="og:description"]', "content", page.description);
            setMeta('meta[property="og:title"]', "content", document.title);
            setMeta('meta[property="og:url"]', "content", canonical);
        } else {
            const canonicalLink = document.querySelector('link[rel="canonical"]');
            if (canonicalLink) canonicalLink.remove();
        }
        let robots = document.querySelector('meta[name="robots"]');
        if (!page && !robots) { robots = document.createElement("meta"); robots.name = "robots"; document.head.appendChild(robots); }
        if (robots) {
            if (page) robots.remove();
            else robots.content = "noindex";
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
