# Human review plan — `eln-v3-docs` branch

This branch is the **v3 documentation overhaul**: regenerated v3 screenshots/GIFs, an
asset reorganisation + URL dash-renames (with redirects), and a full-repo
language/grammar/clarity copyedit. **260 doc pages** changed across the whole site
(ELN, LabIMotion, Repository, Services, Development).

The review is split across **12 reviewers (R1–R12)**, grouped by subsystem so each person
owns one coherent area. Replace the R# labels with real names before sharing.

> **Sizing note:** a large fraction of the line-churn is *mechanical copyedit* (grammar,
> articles, tone) that is safe to skim. The **differentiated** effort is in
> (a) screenshots matching the live v3 UI, (b) step-by-step accuracy, (c) technical facts.
> The "Focus" column says where the real attention should go. Sizes (S/M/L) already
> discount mechanical churn.

## Assignments

| # | Area | Paths (`docs/…`) | Size | Focus |
|---|------|------------------|------|-------|
| **R1** | **Installation — ChemCLI & manual install** | `eln/install-configure/{index,ChemCLI,manual-install}.mdx` | L | Run the install paths; verify commands, ports, backup/restore, reverse-proxy. |
| **R2** | **Configuration, auth & contributor docs** | `eln/install-configure/{configuration,authentication,system-check}.mdx`, `development/**`, `documentation/**`, `index.mdx` (root) | M | Config keys, env vars, OIDC/Shibboleth; dev-setup & docs-maintenance accuracy. |
| **R3** | **Admin & OpenStats** | `eln/admin/**`, `services/third-party-apps/OpenStats/**`, `services/third-party-apps/index.mdx` | M (+6 shots) | Admin panels, permissions, feature toggles, third-party-app registration. |
| **R4** | **Devices — spectroscopy & MS** (NMR, MS, UV-Vis/IR/Raman, electronic spectroscopy, microscopy, DSC/TGA) | `eln/devices/{nmr,ms,uv-vis-nir-ir-raman,electronic-spectroscopy,microscopy,dsc-tga}/**` | S–M | Per-instrument: software names, versions, file formats, transfer setup. |
| **R5** | **Devices — chromatography & data collection** (GC, HPLC/LC-MS, collector configs, overview) | `eln/devices/{gc-gc-ms,hplc-lc-ms,configurations}/**`, `eln/devices/{index,list}.mdx` | M | Per-instrument config + the shared data-collection / transfer mechanisms. |
| **R6** | **Core UI — shell, collections, inbox + screenshot QA** (top bar, main page, collections, calendar, view, toolbar, details, first steps, inbox) + general ELN pages | `eln/ui/{index,inbox,calendar,view,toolbar,first-steps,details}.mdx`, `eln/ui/collections/**`, `eln/{faq,index,releases,troubleshooting,videos}.mdx` | **L (+36 shots)** | **Owns the v3 screenshot/GIF sanity-check** — every shot must show v3 UI, not v2 — plus the collection-management flow. |
| **R7** | **UI content tools & editors** (lists, import, rich-text & templates, comments, history, hyperlinks, images, barcodes, ontology) | `eln/ui/{lists,import,text-editor,text-templates,comments,history,hyperlink,images,barcodes,ontology}.mdx` | M–L | Import/column-mapping, editors, barcode config — click through each. |
| **R8** | **Elements, Ketcher & SmartAdd** — samples, reactions, wellplates, cell lines, macromolecules; drawing structures; assembling data with SmartAdd | `eln/ui/elements/**`, `eln/ui/ketcher.mdx`, `eln/ui/inventory.mdx`, `services/smartadd/**` | M–L | Do element types, properties, the reaction table, mixtures, and Ketcher steps match the app and make chemical sense? |
| **R9** | **LabIMotion (generic elements)** — designer + user (71 small pages) | `labimotion/**` | **L (71 files)** | Template designer (layers/fields/types) + end-user usage; mostly small pages, high file count. |
| **R10** | **Spectra & analytical-data standards** — ChemSpectra processing + repository metadata standards per technique | `services/chemspectra/**`, `repo/details-standards/**` | M | Are technique workflows (NMR/MS/IR/CV/…), file formats, and required-metadata standards correct? |
| **R11** | **Repository & lab→publish workflow** — submission, review, embargo, DOIs, physical samples, RADAR | `repo/workflow/**`, `repo/{doi,labeling,physical-samples,references,viewer,faq,fundings,index}.mdx`, `repo/interfaces/**`, `repo/settings-preparation/**`, `eln/interfaces/radar.mdx` | M | Is the publish workflow (states, roles, embargo, DOI minting) accurate end-to-end? |
| **R12** | **Services & integrations** — ChemConverter, ChemLocalLink, ChemScanner, ChemMobile, Ketcher service, TLC | `services/{chemconverter,chemlocallink,chemscanner,chemobile,ketcher}/**`, `services/third-party-apps/tlc/**` | M–L | Integration/setup correctness; the TLC churn is mostly lint-reformatting (skimmable). |

_Coverage: every routed page under `docs/` is assigned exactly once. `docs/_old_pages/**` is deprecated/unrouted — out of scope. The two heaviest are **R6** (owns the ~36 v3 screenshots) and **R9** (71 small LabIMotion files)._

## Suggested reviewer workflow

**Setup (once)**
1. `git checkout eln-v3-docs && git pull`
2. `npm ci && npm run build && npm run serve` → read your pages **rendered** at `localhost:3000/docs/…` (or use the deploy preview).
3. Open a **running v3 ELN instance** side-by-side — most checks are "does the doc match the app?".
4. See only your changes: `git diff main...HEAD -- <your paths>`.

**Per page — check in this order (stop on a blocker)**
1. **Screenshots/GIFs** show the **v3** UI (correct buttons, panels, layout) — flag any stale v2 imagery.
2. **Steps** are correct and in order — actually click through them in the instance.
3. **Facts** — versions, file formats/extensions, ports, paths, parameters, device/software names.
4. **Links & anchors** resolve and point to the *right* page (the build already blocks truly broken links).
5. **Language** reads clearly — grammar was already passed, so only flag awkward or **meaning-wrong** wording.

**Logging findings**
- One **review comment per issue**, tagged **`blocker`** (wrong step/screenshot/fact) or **`minor`** (wording/polish).
- **Don't push edits directly** (avoids conflicts) — comment instead; batch trivial typos into a single follow-up PR at the end.
- Anything spanning areas (terminology, naming, a recurring pattern) → flag to the **coordinator**, don't fix locally.

**Cross-cutting checks (everyone, lightly)**
- Terminology consistency: "the user / users / the Chemotion team / the administrator"; product names (Ketcher, ChemSpectra, LabIMotion).
- "version X.Y" / "from v3 onwards" markers are accurate.
- Admonitions (`:::info/warning/danger`) and `<Btn>` UI cues render correctly.

**Coordinator**
- Track completion (use this table as a checklist), de-duplicate cross-area issues, then run a final `npm run build` and merge.

## Open item for an author decision
- `services/smartadd/workflow.mdx` — two "✅ Good" filename examples are actually bad examples (special characters / version suffix) → **R8** to decide the fix.
