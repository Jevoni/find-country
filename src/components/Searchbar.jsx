import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedSearchType, setSearch } from '../services/searchSlice'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {
    const inputs = useSelector(selectedSearchType)
    const [inputData, setInputData] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(setSearch(inputData.toLowerCase()))
        navigate('/feed')
    }
    return (
        <Box sx={{ margin: '12px' }}>
            <form onSubmit={onSubmitHandler} style={{ display: 'flex', }}>
                <input onChange={(e) => setInputData(e.target.value)} value={inputData} style={{
                    width: '260px',
                    fontSize: '17px',
                    border: '2px solid black'
                }} />
                <Button style={{ fontWeight: 'bold', color: 'black', border: '2px solid black' }} type='submit'>Search</Button>
            </form>
            <p style={{ marginBottom: '0px' }}> Search set to : {inputs}</p>
        </Box>
    )
}

export default Searchbar