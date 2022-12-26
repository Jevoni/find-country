import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedSearchType, setSearch } from '../services/searchSlice'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import styles from './styles/Searchbar.module.css'

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
        <Box className={styles['main-container']}>
            <form onSubmit={onSubmitHandler}>
                <input onChange={(e) => setInputData(e.target.value)} value={inputData} />
                <Button type='submit'>Search</Button>
            </form>
            <p> Search set to : {inputs}</p>
        </Box>
    )
}

export default Searchbar