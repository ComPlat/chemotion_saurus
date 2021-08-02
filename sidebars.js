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
          {
            Docker: ['eln/dev_docker'],
          },
        ],
      },
      {
        Development: ['eln/github_actions', 'eln/swagger', 'eln/dev_problems'],
      },
      {
        Configuration: ['eln/settings', 'eln/system_check'],
      },
      {
        Documentation: ['eln/set_up_docuasaurus', 'eln/use_docuasaurus'],
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
          'eln/samples',
          'eln/reactions',
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
        Administration: ['eln/generic_config', 'eln/adjust_analysis'],
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
};
