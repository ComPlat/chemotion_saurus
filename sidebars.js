module.exports = {
  elnSidebar: {
    ELN: [

      {
        type: 'category',
        label: 'Installation',
        link: {
          type: 'generated-index',
        },
        items: [
          {
            Production: [
              'eln/native_installation',
              'eln/dockerinstall'
            ],
          },
          {
            Development: [
              'eln/dev_native_install',
              'eln/dev_docker_install'
            ],
          },
        ],
      },

      {
        type: 'category',
        label: 'Development',
        link: {
          type: 'generated-index',
        },
        items : [
          'eln/development/project_overview',
          'eln/development/development',
          'eln/development/testing',
          'eln/development/ci'
        ],
      },

      {
        type: 'category',
        label: 'Configuration',
        link: {
          type: 'generated-index',
        },
        items: [
          'eln/settings',
          'eln/system_check'
        ],
      },

      {
        type: 'category',
        label: 'Manual',
        link: {
          type: 'generated-index',
        },
        items: [
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
            items: [
              'eln/samples',
              'eln/reactions',
              'eln/wellplates'
            ],
          },
          'eln/details',
          'eln/toolbar',
          'eln/ketcher',
          'eln/barcodes',
          'eln/inventory',
          'eln/analysis',
          'eln/problems',
        ],
      },

      {
        type: 'category',
        label: 'Admin UI',
        link: {
          type: 'generated-index',
        },
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

      {
        type: 'category',
        label: 'Device integration',
        link: {
          type: 'generated-index',
        },
        items: ['eln/devices', 'eln/devices_nmr'],
      },

      'eln/coming_soon',

      'eln/faq_eln',

      'eln/contact',

    ],
  },

  repoSidebar: {
    REPO: [

      'repo/videos_repo',

      {
        type: 'category',
        label: 'Usage',
        link: {
          type: 'generated-index',
        },
        items: [
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
    "About this Documentation": [

      'docu/set_up_docusaurus',

      'docu/use_docusaurus',

      'docu/styleguide_docusaurus',

    ]
  }
};
