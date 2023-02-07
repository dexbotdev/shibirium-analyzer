/* eslint-disable */ 
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import ChartjsBarChart from 'src/views/charts/chartjs/ChartjsBarChart'
import ChartjsLineChart from 'src/views/charts/chartjs/ChartjsLineChart'
import ChartjsAreaChart from 'src/views/charts/chartjs/ChartjsAreaChart'
import ChartjsRadarChart from 'src/views/charts/chartjs/ChartjsRadarChart'
import ChartjsBubbleChart from 'src/views/charts/chartjs/ChartjsBubbleChart'
import ChartjsScatterChart from 'src/views/charts/chartjs/ChartjsScatterChart'
import ChartjsPolarAreaChart from 'src/views/charts/chartjs/ChartjsPolarAreaChart'
import ChartjsHorizontalBarChart from 'src/views/charts/chartjs/ChartjsHorizontalBarChart'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import Tokenomics from '../../views/Tokenomics'

const TokenomicsPage = () => {
  
  return (
    <DatePickerWrapper>
      <Grid container spacing={2} className='match-height'> 
        <Grid item xs={12} md={12}>
          <Tokenomics  />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default TokenomicsPage
