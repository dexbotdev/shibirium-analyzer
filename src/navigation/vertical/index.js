// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import CalendarBlankOutline from 'mdi-material-ui/CalendarBlankOutline'
import Abacus from 'mdi-material-ui/Abacus'
import Unity from 'mdi-material-ui/Unity'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import { Telegram } from '@mui/icons-material'

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
      icon: Abacus,
      path: '/swap'
    },
    {
      title: 'CoinaLyzerBot',
      icon: Telegram,
      externalLink: true,
      openInNewTab: true,
      path: 'https://t.me/CoinaLyzerBot'
    },
    {
      title: 'Partnerships',
      icon: Unity,
      path: '/partnerships'
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
      path: 'https://t.me/Coinalyzer'
    }
  ]
}

export default navigation
