import React from 'react'
import { Box, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setSearchType } from '../services/searchSlice'

import styles from './styles/Navbar.module.css'

const Navbar = () => {
    const dispatch = useDispatch()

    const handleButtonClick = (e) => {
        dispatch(setSearchType(e.target.value))
    }

    return (
        <Box className={`${styles['navbar-container']}`}
            sx={{ justifyContent: { xs: 'center', md: 'initial' } }}>
            <Button onClick={handleButtonClick} value={'name'}>Name</Button>
            <Button onClick={handleButtonClick} value={'currency'}>Currency</Button>
            <Button onClick={handleButtonClick} value={'lang'}>Language</Button>
            <Button onClick={handleButtonClick} value={'capital'}>Capital</Button>
            <Button onClick={handleButtonClick} value={'region'}>Region</Button>
        </Box>
    )
}

export default Navbar