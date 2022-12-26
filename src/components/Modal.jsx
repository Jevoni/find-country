import React from 'react'
import { Box, Typography } from '@mui/material'
import ReactDom from 'react-dom'

import styles from './styles/Modal.module.css'

export default function Modal({ open, onClose, country }) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <Box className={styles.overlay} onClick={onClose} />
            <Box className={styles.modal}>
                <Typography variant='h4'>{country.name.official}</Typography>
                <Box className={styles['main-container']}>
                    <Box className={styles['data-container']}>
                        <p><span>Capital:</span> {country.capital}</p>
                        <p><span>Currency:</span> {Object.keys(country.currencies) + ''} </p>
                        <p><span>Languages:</span> {Object.values(country.languages) + ''}</p>
                        <p><span>Population:</span> {country.population.toLocaleString()}</p>
                        <p><span>Region:</span> {country.region}</p>
                        <p><span>Subregion:</span> {country.subregion}</p>
                        <p><span>Timezones:</span> {country.timezones + ''}</p>
                        <button href={country.maps.googleMaps} target='_blank' rel='noreferrer'>Map Location</button>
                        <button onClick={onClose}>Close Modal</button>
                    </Box>
                    <Box className={styles['flag-container']}>
                        <img src={country.flags[0]} alt='Country Flag' />
                    </Box>
                </Box>
            </Box>
        </>,
        document.getElementById('portal')
    )
}
