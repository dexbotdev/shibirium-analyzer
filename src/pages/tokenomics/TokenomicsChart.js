/* eslint-disable */ 
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Circle from 'mdi-material-ui/Circle'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import DotsVertical from 'mdi-material-ui/DotsVertical'
 
// ** Third Party Imports
import { PolarArea } from 'react-chartjs-2'
// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar' 

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const TokenomicsChart = (props) => {
  // ** Hook
  const theme = useTheme()

  const { info, grey, green, yellow, primary, warning, labelColor } = props

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    layout: {
      padding: {
        top: -5,
        bottom: -45
      }
    },
    scales: {
      r: {
        grid: { display: false },
        ticks: { display: false }
      }
    },
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 25,
          boxWidth: 9,
          color: labelColor,
          usePointStyle: true
        }
      }
    }
  }

  const data = {
    labels: ['40% Presale', '30% Liquidity', '10% Development', '5% Team', '5% Marketing', '10% Buffer'],
    datasets: [
      {
        borderWidth: 0,
        label: 'Population (millions)',
        data: [19, 17.5, 15, 13.5, 11, 9],
        backgroundColor: [primary, yellow, warning, info, green, green]
      }
    ]
  }

  return (
    <Card>
      <CardHeader
        title={<h2>Tokenomics</h2>}
        titleTypographyProps={{
          sx: { lineHeight: '0rem !important', letterSpacing: '0.15px !important' }
        }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent
        sx={{
          '& .apexcharts-datalabel-label': {
            lineHeight: '1.313rem',
            letterSpacing: '0.25px',
            fontSize: '1.2rem !important',
            fontWeight:'bolder',
            fill: `${theme.palette.text.secondary} !important`
          },
          '& .apexcharts-datalabel-value': {
            letterSpacing: 0,
            lineHeight: '2rem',
            fontWeight: '500 !important'
          }
        }}
      >
        <Grid container sx={{ my: [0, 4, 1.625] }}>
          <Grid item xs={6} sm={6} sx={{ mb: [3, 0] }}>
          <PolarArea data={data} options={options} height={350} />

          </Grid>
          
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TokenomicsChart
