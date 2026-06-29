import { resolve } from "node:path";
import { defineConfig } from "vite";

const pages = [
  "index.html",
  "about.html",
  "services.html",
  "our-work.html",
  "faqs.html",
  "contact.html",
  "privacy-policy.html",
  "terms-and-conditions.html",
];

export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [page.replace(".html", "") || "index", resolve(__dirname, page)]),
      ),
    },
  },
});
