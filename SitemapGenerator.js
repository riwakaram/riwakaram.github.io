const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const fs = require("fs");

const links = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/about", changefreq: "monthly", priority: 0.8 },
    { url: "/experience", changefreq: "monthly", priority: 0.8 },
    { url: "/publications", changefreq: "monthly", priority: 0.8 },
    { url: "/contact", changefreq: "monthly", priority: 0.8 },
];

(async () => {
    try {
        const stream = new SitemapStream({
            hostname: "https://riwakaram.github.io",
        });
        const xml = await streamToPromise(Readable.from(links).pipe(stream));
        fs.writeFileSync("./public/sitemap.xml", xml.toString());
        console.log("Sitemap successfully generated.");
    } catch (error) {
        console.error("Error generating sitemap:", error);
    }
})();
