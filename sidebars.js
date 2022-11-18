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
          "eln/installation/native_installation",
          "eln/installation/docker_installation"
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
          "eln/development/development_environment",
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
          {
            "type": "category",
            "label": "Analytical data",
            "items": [
              "eln/analysis",
              "eln/chemspectra/nmranalysis",
              "eln/chemspectra/iranalysis",
              "eln/chemspectra/hplcanalysis",
              "eln/chemspectra/msanalysis",
              "eln/chemspectra/ramananalysis",
              "eln/chemspectra/uvvisanalysis",
              "eln/chemspectra/tgaanalysis",
              "eln/chemspectra/xrdanalysis",
              "eln/chemspectra/cvanalysis"
            ]
          },
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
        "label": "Chemotion Converter",
        "link": {
          "type": "generated-index"
        },
        "items": [
          "eln/converter/converter_overview",
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
          "eln/devices/devices_integrated",
          {
            "Configurations": [
              "eln/devices/remote_device_control",
              "eln/devices/device_configuration"
            ]
          },
          {
            "NMR devices": [
              "eln/devices_nmr",
              "eln/devices/devices_nmr_magritek"
            ]
          },
          "eln/devices/devices_sec",
          "eln/devices/devices_dsc",
          "eln/devices/devices_ir",
          "eln/devices/devices_eis",
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
      {
        "type": "category",
        "label": "Open Access",
        "link": {
          "type": "generated-index"
        },
        "items": [
          "repo/oa_oai_pmh",
          "repo/oa_open_apis"
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
      "docu/maintaining",
      "docu/contributing",
      "docu/styleguide"
    ]
  }
};
