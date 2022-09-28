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
        <Box>
            <Button style={{ fontWeight: 'bold', fontSize: '15px' }} variant='filled' onClick={handleButtonClick} value={'name'}>Name</Button>
            <Button style={{ fontWeight: 'bold', fontSize: '15px' }} variant='filled' onClick={handleButtonClick} value={'currency'}>Currency</Button>
            <Button style={{ fontWeight: 'bold', fontSize: '15px' }} variant='filled' onClick={handleButtonClick} value={'lang'}>Language</Button>
            <Button style={{ fontWeight: 'bold', fontSize: '15px' }} variant='filled' onClick={handleButtonClick} value={'capital'}>Capital</Button>
            <Button style={{ fontWeight: 'bold', fontSize: '15px' }} variant='filled' onClick={handleButtonClick} value={'region'}>Region</Button>
        </Box>
    )
}

export default Navbar