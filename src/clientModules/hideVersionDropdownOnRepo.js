// The docsVersionDropdown navbar item (docusaurus.config.js) always renders
// when its target instance (the default/ELN instance) has more than one
// version, regardless of which docs plugin instance's pages are currently
// being viewed -- Docusaurus doesn't scope navbar items to a route. On
// /docs/repo/* pages (the separate, unversioned "repo" instance) that leaves
// a "Version 3.x" dropdown that looks actionable but only ever navigates
// back into the ELN docs, never anything repo-related.
//
// This toggles a body class based on the current route so CSS
// (src/css/custom.css) can hide the dropdown -- see the "how to fix" options
// considered; this is the CSS-based option rather than swizzling
// NavbarItem/DocsVersionDropdownNavbarItem to check useActivePlugin().
const REPO_ROUTE_PREFIX = "/docs/repo";
const BODY_CLASS = "is-repo-instance";

function onRouteDidUpdate({ location }) {
  if (typeof document === "undefined") {
    return;
  }
  const isRepoRoute =
    location.pathname === REPO_ROUTE_PREFIX ||
    location.pathname.startsWith(`${REPO_ROUTE_PREFIX}/`);
  document.body.classList.toggle(BODY_CLASS, isRepoRoute);
}

export default {
  onRouteDidUpdate,
};
