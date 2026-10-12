// Same wrapping problem as sidebarItemsGeneratorRepo.js: from the "dev"
// instance's own perspective dev-docs IS the root, so its index page lands as a
// flat sibling of the other pages rather than as their category link -- the
// "index doc becomes the category link, excluded from its own item list"
// treatment only applies to subfolders discovered while walking a directory,
// never to the directory passed in as `dirName` itself (see
// sidebarItemsGenerator.js for the fuller explanation).
//
// This wraps the flat list into a single "Development" category so this
// instance's sidebar reads the same way the other sections do.
const logger = require("@docusaurus/logger").default;

async function sidebarItemsGeneratorDev({
  defaultSidebarItemsGenerator,
  ...args
}) {
  const items = await defaultSidebarItemsGenerator(args);
  const indexIdx = items.findIndex(
    (item) => item.type === "doc" && item.id === "development",
  );
  if (indexIdx === -1) {
    // Fallback: index doc not found (e.g. dev-docs/index.mdx lost its
    // `id: development` frontmatter) -- return unwrapped rather than silently
    // produce an empty sidebar, but warn, since the wrapping category won't
    // be built at all.
    logger.warn(
      'sidebarItemsGeneratorDev: couldn\'t find the development index doc (expected id "development") to wrap the Development sidebar around. Returning the flat, unwrapped item list instead.',
    );
    return items;
  }
  const indexItem = items[indexIdx];
  const rest = items.filter((_, i) => i !== indexIdx);
  return [
    {
      type: "category",
      label: indexItem.label ?? "Development",
      link: { type: "doc", id: indexItem.id },
      items: rest,
    },
  ];
}

module.exports = sidebarItemsGeneratorDev;
