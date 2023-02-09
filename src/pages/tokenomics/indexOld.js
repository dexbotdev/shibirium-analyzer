/* eslint-disable */ 
import Grid from '@mui/material/Grid'

// ** Custom Components Imports

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports

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
