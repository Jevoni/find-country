import React from 'react'
import { Box, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setSearchType } from '../services/searchSlice'

const Navbar = () => {
    const dispatch = useDispatch()

    const handleButtonClick = (e) => {
        dispatch(setSearchType(e.target.value))
    }

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'initial' }, marginBottom: '15px' }}>
            <Button onClick={handleButtonClick} value={'name'} style={{ fontWeight: 'bold', fontSize: '15px', color: 'black', border: '2px solid black', margin: '3px' }}>Name</Button>
            <Button onClick={handleButtonClick} value={'currency'} style={{ fontWeight: 'bold', fontSize: '15px', color: 'black', border: '2px solid black', margin: '3px' }}>Currency</Button>
            <Button onClick={handleButtonClick} value={'lang'} style={{ fontWeight: 'bold', fontSize: '15px', color: 'black', border: '2px solid black', margin: '3px' }}>Language</Button>
            <Button onClick={handleButtonClick} value={'capital'} style={{ fontWeight: 'bold', fontSize: '15px', color: 'black', border: '2px solid black', margin: '3px' }}>Capital</Button>
            <Button onClick={handleButtonClick} value={'region'} style={{ fontWeight: 'bold', fontSize: '15px', color: 'black', border: '2px solid black', margin: '3px' }}>Region</Button>
        </Box>
    )
}

export default Navbar