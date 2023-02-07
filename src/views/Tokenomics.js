/* eslint-disable */ 
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { styled, useTheme } from '@mui/material/styles'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import TrendingUp from 'mdi-material-ui/TrendingUp'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

import TokenomicsChart from './TokenomicsChart';

const data = [
  {
    title: '$48,568.20',
    avatarColor: 'success',
    subtitle: 'Total Profit',
    icon: <TrendingUp sx={{ fontSize: '1.875rem', color: 'success.main' }} />
  },
  {
    title: '$38,453.25',
    avatarColor: 'primary',
    subtitle: 'Total Income',
    icon: <CurrencyUsd sx={{ fontSize: '1.875rem', color: 'primary.main' }} />
  },
  {
    title: '$2,453.45',
    avatarColor: 'secondary',
    subtitle: 'Total Expense',
    icon: <Poll sx={{ color: 'secondary.main' }} />
  }
]

const series = [
  {
    name: 'Product A',
    data: [29000, 22000, 25000, 18500, 29000, 20000, 34500]
  },
  {
    name: 'Product B',
    data: [0, 16000, 11000, 15500, 0, 12500, 9500]
  },
  {
    name: 'Product C',
    data: [0, 0, 0, 14000, 0, 11500, 12000]
  }
]

// Styled Grid component
const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const Tokenomics = () => {
  // ** Hook
  // ** Hook
  const theme = useTheme()

  // Vars
  const whiteColor = '#fff'
  const yellowColor = '#ffe802'
  const primaryColor = '#836af9'
  const areaChartBlue = '#2c9aff'
  const barChartYellow = '#ffcf5c'
  const polarChartGrey = '#4f5d70'
  const polarChartInfo = '#299aff'
  const lineChartYellow = '#d4e157'
  const polarChartGreen = '#28dac6'
  const lineChartPrimary = '#9e69fd'
  const lineChartWarning = '#ff9800'
  const horizontalBarInfo = '#26c6da'
  const polarChartWarning = '#ff8131'
  const scatterChartGreen = '#28c76f'
  const warningColorShade = '#ffbd1f'
  const areaChartBlueLight = '#84d0ff'
  const areaChartGreyLight = '#edf1f4'
  const scatterChartWarning = '#ff9f43'
  const labelColor = theme.palette.text.primary
  const borderColor = theme.palette.action.focus
  const gridLineColor = theme.palette.action.focus


  const options = {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '35%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022]
    },
    yaxis: {
      labels: {
        formatter: value => (value > 999 ? `${(value / 1000).toFixed(0)}k` : `${value}`)
      }
    },
    colors: [theme.palette.primary.main, theme.palette.success.main, theme.palette.secondary.main],
    grid: {
      strokeDashArray: 7,
      padding: {
        bottom: -10
      }
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 6,
      curve: 'smooth',
      lineCap: 'round',
      colors: [theme.palette.background.paper]
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '45%'
            }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '50%'
            }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '45%'
            }
          }
        }
      },
      {
        breakpoint: 430,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '55%'
            }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <Grid container>
        <StyledGrid item xs={12} sm={12}>
          <CardContent sx={{ height: '100%', '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
              <TokenomicsChart 
            yellow={yellowColor}
            info={polarChartInfo}
            grey={polarChartGrey}
            primary={primaryColor}
            green={polarChartGreen}
            labelColor={labelColor}
            warning={polarChartWarning}
            />
          </CardContent>
        </StyledGrid> 
      </Grid>
    </Card>
  )
}

export default Tokenomics
