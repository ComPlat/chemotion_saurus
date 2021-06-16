module.exports = {
    // not working:
    version:{
        Versions:[
        // External link
        {
          type: 'link',
          label: 'Release Notes', 
          href: 'https://github.com/ComPlat/chemotion_ELN/releases', // The external URL
        },
        ]
    },
    elnID: {
      ELN: [
        {
          Versions:[
          // Internal Versions
            {
              type: 'link',
              label: '0.9.x', // The link label
              href: 'videos_eln', // The internal path
            },
            {
              type: 'link',
              label: '0.8.x', // The link label
              href: 'version-0.8/videos_eln', // The internal path
            },
          // External link
          {
            type: 'link',
            label: 'Release Notes', 
            href: 'https://github.com/ComPlat/chemotion_ELN/releases', // The external URL
          }
          ]
        },
        'videos_eln',
        {
          Installation: [
            'native_installation',
            'dockerinstall'
          ]
        },
        {
          Configuration: [
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
        {
          Device_integration: [
            'devices',
            'devices_nmr'
          ]
        },
        'contact',
        'faq_eln',
      ],
    }
}