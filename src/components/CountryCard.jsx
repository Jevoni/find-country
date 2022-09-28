import React from 'react'
import { Box, Typography, Button } from '@mui/material'

const CountryCard = ({ country, setModal, setIsOpen }) => {

    if (!country) return 'Loading...'

    const onClickHandler = () => {
        setModal(country)
        setIsOpen(true)
    }

    return (
        <Box
            margin='4px'
            padding='4.5px'
            borderRadius='5px'
            onClick={onClickHandler}
            backgroundColor='#dfe6e9'

        >
            <Typography fontWeight='bold' textAlign='center'>{country.name.common}</Typography>
            <img src={country.flags[0]} alt='Country Flag' width='316px' height='150px' />
        </Box>
    )
}

export default CountryCard