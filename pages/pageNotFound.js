import React from 'react'
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography'

export default function PageNotFound() {
  return (
    <Container sx={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Typography variant='h4' color='black'>404 page not found</Typography>
    </Container>
  )
}
