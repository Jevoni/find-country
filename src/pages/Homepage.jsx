import React from 'react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import { Typography, Box } from '@mui/material'

import styles from './styles/Homepage.module.css'

const Homepage = () => {
    return (
        <Box className={styles.page}>
            <Box className={styles['main-container']}>
                <h1>Find <span>Country</span></h1>
                <Navbar />
                <Searchbar />
            </Box>
        </Box>
    )
}

export default Homepage