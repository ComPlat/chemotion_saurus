module.exports = {
  "elnSidebar": {
    "ELN Chemotion and LabIMotion": [
      {
        "type": "category",
        "label": "Installation",
        "link": {
          "type": "generated-index"
        },
        "items": [
          {
            "Production": [
              "eln/native_installation",
              "eln/dockerinstall"
            ]
          },
          {
            "Development": [
              "eln/dev_native_install",
              "eln/dev_docker_install"
            ]
          }
        ]
      },
      {
        "type": "category",
        "label": "Development",
        "link": {
          "type": "generated-index"
        },
        "items": [
          "eln/development/project_overview",
          "eln/development/learning_resources",
          "eln/development/architecture",
          "eln/development/debugging",
          "eln/development/linting",
          "eln/development/testing",
          "eln/development/ci",
          "eln/development/performance"
        ]
      },
      {
        "type": "category",
        "label": "Configuration",
        "link": {
          "type": "generated-index"
        },
        "items": [
          "eln/settings",
          "eln/system_check"
        ]
      },
      {
        "type": "category",
        "label": "Manual Chemotion ELN",
        "link": {
          "type": "generated-index"
        },
        "items": [
          "eln/about",
          "eln/intro",
          "eln/videos_eln",
          "eln/browser",
          "eln/structure",
          "eln/view",
          "eln/firststeps",
          "eln/collections",
          "eln/lists",
          {
            "type": "category",
            "label": "Elements",
            "items": [
              "eln/samples",
              "eln/reactions",
              "eln/wellplates"
            ]
          },
          "eln/details",
          "eln/toolbar",
          "eln/ketcher",
          "eln/barcodes",
          "eln/inventory",
          "eln/import",
          "eln/analysis",
          "eln/hyperlinks",
          "eln/problems"
        ]
      },
      {
        "type": "category",
        "label": "Manual LabIMotion ELN",
        "link": {
          "type": "doc",
          "id": "eln/labimotion"
        },
        "items": [
          "eln/generic_config",
          "eln/admin_ui/report_template_management"
        ]
      },
      {
        "type": "category",
        "label": "Admin UI",
        "link": {
          "type": "generated-index"
        },
        "items": [
          "eln/admin_ui/overview",
          "eln/admin_ui/ui_features",
          "eln/admin_ui/groups_n_devices",
          "eln/admin_ui/novnc_settings",
          "eln/generic_config",
          "eln/admin_ui/report_template_management"
        ]
      },
      {
        "type": "category",
        "label": "Device integration",
        "link": {
          "type": "generated-index"
        },
        "items": [
          "eln/devices",
          {
            "NMR devices": [
              "eln/devices_nmr",
              "eln/devices_nmr_magritek"
            ]
          }
        ]
      },
      "eln/faq_eln",
      "eln/contact"
    ]
  },
  "repoSidebar": {
    "REPO": [
      "repo/videos_repo",
      {
        "type": "category",
        "label": "Submission - basics",
        "link": {
          "type": "generated-index"
        },
        "items": [
          "repo/new_entry",
          "repo/publication_review",
          "repo/embargo_topics"
        ]
      },
      "repo/format_descriptions",
      {
        "type": "category",
        "label": "Standards analytical data",
        "link": {
          "type": "generated-index"
        },
        "items": [
          "repo/details_analytics",
          "repo/data_types"
        ]
      },
      "repo/references",
      "repo/faq",
      "repo/review_glossary",
      "repo/request_physical_samples",
      "repo/videos_repo"
    ]
  },
  "docuSidebar": {
    "About this Documentation": [
      "docu/set_up_docusaurus",
      "docu/use_docusaurus",
      "docu/styleguide_docusaurus"
    ]
  }
};
