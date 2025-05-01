const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const fs = require("fs");

const links = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/about", changefreq: "daily", priority: 0.9 },
    { url: "/news", changefreq: "daily", priority: 0.9 },
    { url: "/publications", changefreq: "daily", priority: 0.9 },
    { url: "/vitae", changefreq: "daily", priority: 0.9 },
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
