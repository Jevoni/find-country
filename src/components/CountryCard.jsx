import React from 'react'
import { Box, Typography } from '@mui/material'

const CountryCard = ({ country, setModal, setIsOpen }) => {

    if (!country) return 'Loading...'

    const onClickHandler = () => {
        setModal(country)
        setIsOpen(true)
    }

    return (
        <Box onClick={onClickHandler} sx={{
            margin: '4px',
            marginRight: { xs: '10px', md: '4px' },
            marginLeft: { xs: '10px', md: '4px' },
            padding: '4.5px',
            borderRadius: '5px',
            backgroundColor: '#dfe6e9',
            border: '2px solid black',
            width: { xs: '100%', sm: '46.66%', md: '32.2999%', lg: '24.33%', xl: '19.5%' },
            maxWidth: { xl: '324.67px' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>{country.name.common}</Typography>
            <img src={country.flags[0]} alt='Country Flag' width='90%' height='100%' style={{ maxHeight: '150px' }} />
        </Box>
    )
}

export default CountryCard