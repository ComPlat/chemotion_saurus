// "This Documentation" is its own docs plugin instance (see docusaurus.config.js)
// and is deliberately unversioned: it describes this repository, not a release of
// Chemotion, so it must not be snapshotted alongside the ELN docs.
//
// Same shape as sidebars-repo.js / sidebars-labimotion.js -- mirror every *other*
// top-level section as a plain link (an instance cannot reference another
// instance's docs by id), with this instance's own content expanded in place.
// Order, labels and hrefs come from mainSiteSections.js.
const mainSiteSections = require("./mainSiteSections.js");

const selfIndex = mainSiteSections.findIndex(
  (s) => s.label === "This Documentation",
);
const before = mainSiteSections.slice(0, selfIndex);
const after = mainSiteSections.slice(selfIndex + 1);

module.exports = {
  sidebar: [
    ...before.map((s) => ({ type: "link", ...s })),
    // A single page, so there is no category to wrap and no generator needed.
    { type: "doc", id: "index", label: "This Documentation" },
    ...after.map((s) => ({ type: "link", ...s })),
  ],
};
