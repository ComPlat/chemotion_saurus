// Each docsVersionDropdown navbar item (docusaurus.config.js) always renders
// when its target instance has more than one version, regardless of which
// docs plugin instance's pages are currently being viewed -- Docusaurus
// doesn't scope navbar items to a route. Without this, the ELN version
// dropdown would show (and misleadingly navigate away) on /docs/repo/* and
// /docs/labimotion/* pages, and the LabIMotion version dropdown would show
// on every page, not just its own.
//
// This toggles body classes based on the current route so CSS
// (src/css/custom.css) can show/hide each dropdown accordingly -- the
// CSS-based option rather than swizzling NavbarItem/
// DocsVersionDropdownNavbarItem to check useActivePlugin().
const ROUTE_PREFIXES = {
  "is-repo-instance": "/docs/repo",
  "is-labimotion-instance": "/docs/labimotion",
};

function matchesPrefix(pathname, prefix) {
  return pathname === prefix || pathname.startsWith(`${prefix}/`);
}

function onRouteDidUpdate({ location }) {
  if (typeof document === "undefined") {
    return;
  }
  for (const [bodyClass, prefix] of Object.entries(ROUTE_PREFIXES)) {
    document.body.classList.toggle(
      bodyClass,
      matchesPrefix(location.pathname, prefix),
    );
  }
}

export default {
  onRouteDidUpdate,
};
