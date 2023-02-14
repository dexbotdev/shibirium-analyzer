// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import CalendarBlankOutline from 'mdi-material-ui/CalendarBlankOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      badgeContent: 'new',
      badgeColor: 'error',
      path: '/scanner',
      /*  children: [
      
        {
          title: 'Scanner',
          path: '/scanner'
        },
        {
          title: 'CRM',
          path: '/dashboards/crm'
        },
        {
          title: 'Analytics',
          path: '/dashboards/analytics'
        },
        {
          title: 'eCommerce',
          path: '/dashboards/ecommerce'
        } 
      ]*/
    },
    {
      sectionTitle: 'Section'
    },
    {
      title: 'Swap',
      icon: GoogleCirclesExtended,
      path: '/swap'
    },,
    {
      title: 'Tokenomics',
      icon: GoogleCirclesExtended,
      path: '/tokenomics'
    },
    {
      title: 'Whitepaper',
      icon: MessageOutline,
      path: '/whitepaper'
    }, 
    {
      title: 'Roadmap',
      icon: CalendarBlankOutline,
      path: '/roadmap'
    },
    {
      title: 'Community',
      icon: HomeOutline, 
      externalLink: true,
      openInNewTab: true,
      path: ''
    }
  ]
}

export default navigation
