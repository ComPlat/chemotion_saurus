// Wraps a non-default instance's flat root listing into a single category.
//
// From an instance's own perspective its content folder IS the root, and the
// "index doc becomes the category link, excluded from its own item list"
// treatment only applies to subfolders *discovered* while walking a directory,
// never to the directory passed in as `dirName` itself (see
// sidebarItemsGenerator.js for the fuller explanation and source reference).
// So without this, the instance's index page appears as a flat sibling of its
// own subsections instead of as their parent.
//
// Post-processing the default generator's output is deliberate: hand-building
// the category instead reintroduces the duplicated index entry that the
// comment in sidebarItemsGenerator.js describes.
const logger = require("@docusaurus/logger").default;

/**
 * @param {string} indexId  the instance's index doc id (its `id:` frontmatter)
 * @param {string} fallbackLabel  category label if the doc carries no label
 */
module.exports = function sidebarWrappingGenerator(indexId, fallbackLabel) {
  return async function generate({ defaultSidebarItemsGenerator, ...args }) {
    const items = await defaultSidebarItemsGenerator(args);
    const indexIdx = items.findIndex(
      (item) => item.type === "doc" && item.id === indexId,
    );
    if (indexIdx === -1) {
      // Fallback: index doc not found (e.g. its `id:` frontmatter was changed
      // or removed) -- return unwrapped rather than silently produce an empty
      // sidebar, but warn, since the wrapping category won't be built at all.
      logger.warn(
        `sidebarWrappingGenerator: couldn't find the index doc (expected id "${indexId}") to wrap the "${fallbackLabel}" sidebar around. Returning the flat, unwrapped item list instead.`,
      );
      return items;
    }
    const indexItem = items[indexIdx];
    return [
      {
        type: "category",
        label: indexItem.label ?? fallbackLabel,
        link: { type: "doc", id: indexItem.id },
        items: items.filter((_, i) => i !== indexIdx),
      },
    ];
  };
};
