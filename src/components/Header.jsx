import React from 'react'
import { Box, Typography } from '@mui/material'

import Navbar from './Navbar'
import Searchbar from './Searchbar'

const Header = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{
                display: 'flex',
                alignItems: { xs: 'center', md: 'initial' },
                justifyContent: 'space-between',
                flexDirection: { xs: 'column', md: 'row' }
            }}>
                <a style={{ textDecoration: 'none', color: 'black' }} href='/'>
                    <Typography variant='h2' sx={{ fontSize: { sx: '40px', md: '55px' } }}>Find Country</Typography>
                </a>
                <Searchbar />
            </Box>
            <Navbar />
        </Box >
    )
}

export default Header