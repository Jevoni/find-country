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
        <Box sx={{
            textAlign: 'center',
        }}>
            <form
                onSubmit={onSubmitHandler}
                style={{ padding: '12px' }}
            >
                <input style={{ width: '260px', height: '27px', fontSize: '15px' }} onChange={(e) => setInputData(e.target.value)} value={inputData} />
                <br /><Button style={{ fontWeight: 'bold' }} variant='filled' type='submit'>Search</Button>
            </form>
            <p> Search set to : {inputs}</p>
        </Box>
    )
}

export default Searchbar