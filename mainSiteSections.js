// Single source of truth for the main (default) docs instance's top-level
// sections, as far as the "repo" instance's sidebar needs to know about them
// (sidebars-repo.js) -- label + href only, nothing content-bearing.
//
// This can't be derived automatically: `sidebarItemsGenerator` runs scoped to
// one plugin instance at a time (see sidebarItemsGeneratorRepo.js), with no
// access to another instance's loaded docs/sidebar at that point in
// Docusaurus's plugin lifecycle. So this list is manually kept in sync with
// the main instance's actual top-level structure -- if a section in
// docs/<section>/index.mdx or docs/services/_category_.yml is renamed,
// reordered, or removed, update it here too. The "Chemotion Repository"
// entry itself is NOT listed here; it's spliced in by sidebarItemsGenerator.js
// on the main sidebar's side, and is the one entry sidebars-repo.js expands
// for real rather than mirroring as a link.
module.exports = [
  { label: "Welcome", href: "/docs/" },
  { label: "Chemotion ELN", href: "/docs/eln" },
  { label: "Chemotion LabIMotion", href: "/docs/labimotion" },
  { label: "Services", href: "/docs/category/services" },
  { label: "Development", href: "/docs/development" },
  { label: "This Documentation", href: "/docs/documentation" },
];
