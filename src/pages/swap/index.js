// ** MUI Imports
import Grid from '@mui/material/Grid'
import React, { Component } from 'react'

import { ArkenWidget } from 'arken-widget'
 
const SwapScreen = () => {
  return ( 
        <Grid container  margin={'auto'}> 
              {/* openocean widget */} 
              <ArkenWidget
        chain='bsc'
        mode="dark"
        themeColor=''
        themeTextColor=''
        baseTokenAddress='0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'
        quoteTokenAddress='0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c'
        externalTopTokenAddress={[]}
        customImageToken={{}}
        graphRange={1}
        widgetType="swap"
        containerStyle={{
          width: '100%',
          minHeight: 700
          // put container style here
        }}
      />
          </Grid> 
  )
}

export default SwapScreen
