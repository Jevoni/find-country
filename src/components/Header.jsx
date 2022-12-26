import React from 'react'
import { Box, Typography } from '@mui/material'

import Navbar from './Navbar'
import Searchbar from './Searchbar'

import styles from './styles/Header.module.css'

const Header = () => {
    return (
        <Box className={styles['header-container']}>
            <Box className={styles['main-container']}
                sx={{
                    alignItems: { xs: 'center', md: 'initial' },
                    flexDirection: { xs: 'column', md: 'row' }
                }}>
                <a href='/'>
                    <Typography variant='h2' sx={{ fontSize: { xs: '35px', md: '40px' }, fontWeight: 'bold' }}>
                        Find <span>Country</span>
                    </Typography>
                </a>
                <Searchbar />
            </Box>
            <Navbar />
        </Box >
    )
}

export default Header