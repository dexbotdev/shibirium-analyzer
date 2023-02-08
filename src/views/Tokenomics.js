/* eslint-disable */ 

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Link from '@mui/material/Link'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { styled, useTheme } from '@mui/material/styles'
import useBgColor from 'src/@core/hooks/useBgColor'

// ** Icons Imports
import TokenomicsChart from './TokenomicsChart';
 

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
 
  // ** Hook
  const colorClasses = useBgColor()
  const donutColors = {
    series1: '#fdd835',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#32baff',
    series5: '#ffa1a1'
  }
  
 

  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6}>
          <CardContent sx={{ height: '100%',  }}>
              <TokenomicsChart  />
          </CardContent>
        </Grid> 

        <Grid item xs={5} sm={5} sx={{mt:15}}> 
         <Box
          sx={{ mb:5,
            borderRadius: '4px',
            color: 'text.primary',
            padding: theme => theme.spacing(2.25, 2.75),
            backgroundColor: colorClasses.primaryLight.backgroundColor
          }}
        >
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <Avatar
              variant='rounded'
              sx={{
                mr: 3,
                width: '2.625rem',
                height: '2.625rem',
                backgroundColor: 'transparent',
                border: theme => `1px solid ${theme.palette.primary.main}`
              }}
            >
              <img width={23} height={20} alt='briefcase' src='/images/cards/briefcase.png' />
            </Avatar>

            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Token Total Supply</Typography> 
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography
                  component='sup'
                  variant='caption'
                  sx={{ mt: 0.75, fontWeight: 500, color: 'text.primary', alignSelf: 'flex-start' }}
                >
                  $
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: 600 }}>
                  1,000,000
                </Typography> 
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ mb:5,
            borderRadius: '4px',
            color: 'text.primary',
            padding: theme => theme.spacing(2.25, 2.75),
            backgroundColor: colorClasses.primaryLight.backgroundColor
          }}
        >
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <Avatar
              variant='filled'
              sx={{
                mr: 3,
                backgroundColor: donutColors.series1,
                width: '2.625rem',
                height: '2.625rem',
                //backgroundColor: 'transparent',
                border: theme => `1px solid ${theme.palette.primary.main}`
              }}
            >
              <img width={23} height={20} alt='briefcase' src='/images/cards/briefcase.png' />
            </Avatar>

            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Presale</Typography> 
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography variant='h5' sx={{ fontWeight: 600 }}>
                  50
                </Typography> 
                <Typography
                  component='sup'
                  variant='caption'
                  sx={{ mt: 0.75, fontWeight: 500, color: 'text.primary', alignSelf: 'flex-start' }}
                >
                  %
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ mb:5,
            borderRadius: '4px',
            color: 'text.primary',
            padding: theme => theme.spacing(2.25, 2.75),
            backgroundColor: colorClasses.primaryLight.backgroundColor
          }}
        >
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <Avatar
              variant='filled'
              sx={{
                mr: 3,
                width: '2.625rem',
                height: '2.625rem',
                backgroundColor: donutColors.series2,
                border: theme => `1px solid ${theme.palette.primary.main}`
              }}
            >
              <img width={23} height={20} alt='briefcase' src='/images/cards/briefcase.png' />
            </Avatar>

            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Liquidity</Typography> 
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography variant='h5' sx={{ fontWeight: 600 }}>
                 30
                </Typography> 
                <Typography
                  component='sup'
                  variant='caption'
                  sx={{ mt: 0.75, fontWeight: 500, color: 'text.primary', alignSelf: 'flex-start' }}
                >
                  %
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ mb:5,
            borderRadius: '4px',
            color: 'text.primary',
            padding: theme => theme.spacing(2.25, 2.75),
            backgroundColor: colorClasses.primaryLight.backgroundColor
          }}
        >
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <Avatar
              variant='filled'
              sx={{
                mr: 3,
                width: '2.625rem',
                height: '2.625rem',
                backgroundColor: donutColors.series3,
                border: theme => `1px solid ${theme.palette.primary.main}`
              }}
            >
              <img width={23} height={20} alt='briefcase' src='/images/cards/briefcase.png' />
            </Avatar>

            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Development</Typography> 
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography variant='h5' sx={{ fontWeight: 600 }}>
                  10
                </Typography> 
                <Typography
                  component='sup'
                  variant='caption'
                  sx={{ mt: 0.75, fontWeight: 500, color: 'text.primary', alignSelf: 'flex-start' }}
                >
                  %
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ mb:5,
            borderRadius: '4px',
            color: 'text.primary',
            padding: theme => theme.spacing(2.25, 2.75),
            backgroundColor: colorClasses.primaryLight.backgroundColor
          }}
        >
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <Avatar
              variant='filled'
              sx={{
                mr: 3,
                width: '2.625rem',
                height: '2.625rem',
                backgroundColor: donutColors.series4,
                border: theme => `1px solid ${theme.palette.primary.main}`
              }}
            >
              <img width={23} height={20} alt='briefcase' src='/images/cards/briefcase.png' />
            </Avatar>

            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Team</Typography> 
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography variant='h5' sx={{ fontWeight: 600 }}>
                  5
                </Typography> 
                <Typography
                  component='sup'
                  variant='caption'
                  sx={{ mt: 0.75, fontWeight: 500, color: 'text.primary', alignSelf: 'flex-start' }}
                >
                  %
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>    
        <Box
          sx={{ mb:5,
            borderRadius: '4px',
            color: 'text.primary',
            padding: theme => theme.spacing(2.25, 2.75),
            backgroundColor: colorClasses.primaryLight.backgroundColor
          }}
        >
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <Avatar
              variant='filled'
              sx={{
                mr: 3,
                width: '2.625rem',
                height: '2.625rem',
                backgroundColor: donutColors.series5,
                border: theme => `1px solid ${theme.palette.primary.main}`
              }}
            >
              <img width={23} height={20} alt='briefcase' src='/images/cards/briefcase.png' />
            </Avatar>

            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ fontWeight: 500, fontSize: '0.875rem' }}>Marketing</Typography> 
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Typography variant='h5' sx={{ fontWeight: 600 }}>
                  5
                </Typography> 
                <Typography
                  component='sup'
                  variant='caption'
                  sx={{ mt: 0.75, fontWeight: 500, color: 'text.primary', alignSelf: 'flex-start' }}
                >
                  %
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>    
  
        </Grid> 
      </Grid>
    </Card>
  )
}

export default Tokenomics
