import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "Mario Camacho | Blog",
    description: "My journey learning Astro",
    site: "https://gilded-blancmange-d7eedb.netlify.app/",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
