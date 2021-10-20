module.exports = {
  elnSidebar: {
    ELN: [
      {
        Installation: [
          {
            Production: ['eln/native_installation', 'eln/dockerinstall'],
          },
          {
            Development: ['eln/dev_native_install', 'eln/dev_docker_install'],
          },
        ],
      },
      {
        Development: ['eln/development/project_overview', 'eln/development/development', 'eln/development/github_actions', 'eln/development/swagger'],
      },
      {
        Configuration: ['eln/settings', 'eln/system_check'],
      },
      {
        Manual: [
          'eln/about',
          'eln/intro',
          'eln/videos_eln',
          'eln/browser',
          'eln/structure',
          'eln/view',
          'eln/firststeps',
          'eln/collections',
          'eln/lists',
          {
            type: 'category',
            label: 'Elements',
            items: ['eln/samples', 'eln/reactions',  'eln/wellplates'],
          },
          'eln/details',
          'eln/toolbar',
          'eln/ketcher',
          'eln/barcodes',
          'eln/inventory',
          'eln/analysis',
          'eln/generic_segment',
          'eln/generic_element',
          'eln/problems',
        ],
      },
      {
        type: 'category',
        label: 'Admin UI',
        items: [
          'eln/admin_ui/overview',
          // 'eln/admin_ui/dashboard',
          // 'eln/admin_ui/user_management',
          'eln/admin_ui/ui_features',
          'eln/admin_ui/groups_n_devices',
          'eln/admin_ui/novnc_settings',
          'eln/generic_config',
          //'eln/adjust_analysis'
        ],
      },
      'eln/coming_soon',
      {
        type: 'category',
        label: 'Device Integration',
        items: ['eln/devices', 'eln/devices_nmr'],
      },
      'eln/contact',
      'eln/faq_eln',
    ],
  },

  repoSidebar: {
    REPO: [
      'repo/videos_repo',
      {
        Usage: [
          'repo/review_glossary',
          'repo/new_entry',
          'repo/publication_review',
          'repo/details_analytics',
          'repo/data_types',
          'repo/format_descriptions',
          'repo/references',
          'repo/embargo_topics',
          'repo/request_physical_samples',
        ],
      },
      'repo/faq',
    ],
  },
  docuSidebar: {
    "About this Docu": [
      'docu/set_up_docusaurus',
      'docu/use_docusaurus',
      'docu/styleguide_docusaurus',
    ]
  }
};
