import React from 'react'
import LoanCalculator from './LoanCalculator';
import { Box, Typography, Divider, Grid, Container, Paper, styled } from '@mui/material';


function Calculator() {    
  return (
    <div>
        <Grid container >
            <Grid item xs={12} >
              <LoanCalculator  />
            </Grid>
            <Grid item xs={12} md={4}>
            </Grid>
          </Grid>
    </div>
  )
}

export default Calculator