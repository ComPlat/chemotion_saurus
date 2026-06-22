# ELN docs review assignments (v3/v4 update)

Pages under `docs/eln/` grouped into balanced batches for human reviewers. Each batch keeps
topically-related pages together so a reviewer builds context once. Workload weight per page is
estimated as **`lines + 5 × images`** (images carry extra verification/recapture effort). Totals are
approximate — feel free to rebalance by swapping whole pages between adjacent batches.

| Batch | Theme | Pages | ≈ weight |
|-------|-------|-------|----------|
| **1** | Element details | `ui/details.mdx` | ~840 |
| **2** | Elements | `ui/elements/reactions.mdx`, `ui/elements/samples/index.mdx`, `ui/elements/samples/mixtures.mdx`, `ui/elements/wellplates.mdx`, `ui/elements/macromolecules.mdx`, `ui/elements/cell_lines.mdx`, `ui/elements/grouping.mdx`, `ui/elements/device_description.mdx` | ~1040 |
| **3** | UI core & toolbar | `ui/index.mdx`, `ui/view.mdx`, `ui/toolbar.mdx`, `ui/lists.mdx`, `ui/first_steps.mdx`, `ui/history.mdx`, `ui/hyperlink.mdx` | ~790 |
| **4** | Editors & data I/O | `ui/ketcher.mdx`, `ui/import.mdx`, `ui/inventory.mdx`, `ui/barcodes.mdx`, `ui/images.mdx` | ~920 |
| **5** | Collections & collaboration | `ui/collections/index.mdx`, `ui/collections/tabs.mdx`, `ui/calendar.mdx`, `ui/comments.mdx`, `ui/inbox.mdx`, `ui/ontology.mdx`, `ui/text_editor.mdx`, `ui/text_templates.mdx` | ~880 |
| **6** | Admin interface | all of `admin/*` (index, user_management, groups, features, generic_config, chemspectra, ontology, remote_devices, third_party_apps) | ~860 |
| **7** | Installation & configuration | all of `install_configure/*` (index, ChemCLI, manual_install, authentication, configuration, system_check) | ~1360 |
| **8** | Top-level & interfaces | `index.mdx`, `faq.mdx`, `releases.mdx`, `troubleshooting.mdx`, `videos.mdx`, `interfaces/radar.mdx` | ~430 |
| **9** | Devices — collection & NMR/MS | `devices/index.mdx`, `devices/list.mdx`, `devices/configurations/*`, `devices/nmr/*`, `devices/ms/*` | ~1090 |
| **10** | Devices — chromatography & spectroscopy | `devices/gc_gc-ms/*`, `devices/hplc_lc-ms/*`, `devices/uv_vis_nir_ir_raman/*`, `devices/dsc_tga/*`, `devices/microscopy/*`, `devices/electronic_spectroscopy/*` | ~1290 |

## Notes for reviewers
- **Batches 1–6** carry the bulk of the **v3 UI changes** already updated in this branch — prioritize
  verifying prose against the running app and checking the flagged screenshots.
- **Batches 7, 9, 10** are dense technical-reference pages with **few v3 UI changes** (install/config
  and device-integration steps are largely version-independent) — lighter review per line.
- **Batch 8** is small; it can be paired with another batch if you have fewer reviewers.
- `admin/generic_config.mdx` (batch 6) is self-marked **legacy** (superseded by LabIMotion) — flag for
  a decision on deprecation/redirect rather than line-editing.
- Screenshots still pending recapture are tracked separately in the image capture list; reviewers
  should note (not block on) stale images.

## If you have N reviewers
- **5 reviewers:** {1+8}, {2}, {3+4}, {5+6}, {7+9+10 split by availability}
- **10 reviewers:** one batch each.
