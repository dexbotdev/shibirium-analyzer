// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Component Import
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const donutColors = {
  series1: '#fdd835',
  series2: '#00d4bd',
  series3: '#826bf8',
  series4: '#32baff',
  series5: '#ffa1a1'
}

const TokenomicsChart = () => {
  const options = {
    legend: {
      show: false,
      position: 'right',
      fontSize: '1rem',
      fontFamily: 'Montserrat',
      color:'white',
    },
    stroke: { width: 0 },
    labels: ['Presale', 'Liquidity', 'Development', 'Team','Marketing'],
    colors: [donutColors.series1, donutColors.series2, donutColors.series3, donutColors.series4, donutColors.series5],
    dataLabels: {
      enabled: true,
      formatter(val) {
        return `${parseInt(val, 10)}%`
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: '2rem',
              fontFamily: 'Montserrat'
            },
            value: {
              fontSize: '1rem',
              fontFamily: 'Montserrat',
              color:'white',
              formatter(val) {
                return `${parseInt(val, 10)}`
              }
            },
            total: {
              show: false,
              fontSize: '1.5rem',
              label: 'Operational',
              formatter() {
                return '31%'
              }
            }
          }
        }
      }
    },
    responsive: [ 
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 400
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: false,
                  name: {
                    fontSize: '1.5rem',
                    color:'white',
                    fontWeight:'bolder'
                  },
                  value: {
                    fontSize: '1rem',color:'success', fontWeight:'bolder'
                  },
                  total: {
                    fontSize: '1.5rem',color:'success', fontWeight:'bolder'
                  }
                }
              }
            }
          }
        }
      }
    ]
  }
  const series = [50, 30, 10, 5,5]

  return (
    <Card>
      <CardHeader
        title='Tokenomics'
        titleTypographyProps={{ variant: 'h6' }}
        subheader='Spending on various categories'
        subheaderTypographyProps={{ variant: 'caption', sx: { color: 'white' } }}
      />
      <CardContent
        sx={{ color: 'white',
          '& .apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-label, & .apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-value':
            { fontSize: '1.7rem',  }
        }}
      >
        <ReactApexcharts options={options} series={series} type='donut' height={400} />
      </CardContent>
    </Card>
  )
}

export default TokenomicsChart
