module.exports = {
    elnID: {
      Versions:[
        // Internal Versions
        {
          type: 'link',
          label: '0.9.x (current)',
          href: 'videos_eln',
        },
        {
          type: 'link',
          label: '0.8.x',
          href: 'version-0.8/videos_eln',
        },
        // external link
        {
          type: 'link',
          label: 'Release Notes', 
          href: 'https://github.com/ComPlat/chemotion_ELN/releases',
        },

        ],
      ELN: [
        'videos_eln',
        {
          Installation: [
            'native_installation',
            'dockerinstall', 
            {
              Development: [
                'development',
                'dev_docker',
              ]
            }
          ]
        },
        {
        type: 'category',
        label: "Configuration and Tests",
        items: [
          'settings',
          'system_check'
            ]
        },
        {
          Manual: [
            'about',
            'intro',
            'browser',
            'structure',
            'view',
            'firststeps',
            'collections',
            'lists',
            'samples',
            'reactions',
            'details',
            'toolbar',
            'ketcher',
            'barcodes',
            'inventory',
            'analysis',
            'problems'
          ]
        },
        {
          Administration: [
            'generic_config',
            'adjust_analysis'
          ]
        },
            'coming_soon',
        {
          type: 'category',
          label: "Device Integration",
          items: [
            'devices',
            'devices_nmr'
              ]
          },
        'contact',
        'faq_eln',
      ],
    }
}
