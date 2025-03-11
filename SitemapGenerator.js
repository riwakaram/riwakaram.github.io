// SitemapGenerator.js

// If generating sitemap, ignore asset files (images, PDFs, etc.)
if (process.env.GENERATE_SITEMAP === "true") {
    const extensionsToIgnore = [
        ".jpg",
        ".jpeg",
        ".png",
        ".gif",
        ".pdf",
        ".ico",
    ];
    extensionsToIgnore.forEach((ext) => {
        // Also ignore uppercase variants
        require.extensions[ext] = () => {};
        require.extensions[ext.toUpperCase()] = () => {};
    });
}

// Now load Babel Register to transpile JSX
require("@babel/register")({
    presets: ["@babel/preset-env", "@babel/preset-react"],
    extensions: [".js", ".jsx"],
    ignore: [/node_modules/],
});

// Now import your app/router after the asset hooks are set
const router = require("./src/App").default;
const Sitemap = require("react-router-sitemap").default;

new Sitemap(router)
    .build("https://riwakaram.github.io") // Replace with your actual URL
    .save("./public/sitemap.xml");
