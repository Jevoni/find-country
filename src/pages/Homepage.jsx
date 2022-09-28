import React from 'react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import { Typography, Box } from '@mui/material'

const Homepage = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '82vh'
        }}>
            <Typography variant='h1'>Find Country</Typography>
            <Navbar />
            <Searchbar />
        </Box>
    )
}

export default Homepage