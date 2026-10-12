// See sidebarMirror.js for why each instance mirrors the other sections.
// A single page, so there is no folder to autogenerate from.
const sidebarMirror = require("./sidebarMirror.js");

module.exports = sidebarMirror("This Documentation", [
  { type: "doc", id: "index", label: "This Documentation" },
]);
