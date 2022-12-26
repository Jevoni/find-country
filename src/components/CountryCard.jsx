import React from 'react'
import { Box, Typography } from '@mui/material'

import styles from './styles/CountryCard.module.css'

const CountryCard = ({ country, setModal, setIsOpen }) => {

    if (!country) return 'Loading...'

    const onClickHandler = () => {
        setModal(country)
        setIsOpen(true)
    }

    return (
        <Box onClick={onClickHandler} className={`${styles['countrycard-container']}`}
            sx={{
                marginRight: { xs: '10px', md: '4px' },
                marginLeft: { xs: '10px', md: '4px' },
                width: { xs: '100%', sm: '46.66%', md: '32.2999%', lg: '24.33%', xl: '19.5%' },
                maxWidth: { xl: '324.67px' }
            }}>
            <Typography>{country.name.common}</Typography>
            <img src={country.flags[0]} alt='Country Flag' />
        </Box>
    )
}

export default CountryCard