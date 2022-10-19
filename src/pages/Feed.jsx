import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectedSearchType, selectedSearch } from '../services/searchSlice'
import uuid from 'react-native-uuid';

import CountryCard from '../components/CountryCard'
import Header from '../components/Header';
import Modal from '../components/Modal'

const Feed = () => {
    const searchType = useSelector(selectedSearchType)
    const search = useSelector(selectedSearch)
    const [isOpen, setIsOpen] = useState(false)
    const [countryArr, setCountryArr] = useState([])
    const [modalInfo, setModalInfo] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://restcountries.com/v3/${searchType}/${search}`)
            const json = await data.json()
            setCountryArr(json)
        }
        fetchData()
    }, [search, searchType])

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} country={modalInfo} />
            <Header />
            {countryArr.length ?
                (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                        {countryArr.map((country) => (
                            <CountryCard country={country} key={uuid.v4()} setModal={setModalInfo} setIsOpen={setIsOpen} />
                        ))}
                    </Box>) : (
                    <Typography variant='h4'>No Data...</Typography>
                )
            }
        </Box>
    )
}

export default Feed