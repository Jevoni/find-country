import React from 'react'
import { Box, Typography } from '@mui/material'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    color: 'white',
    textAlign: 'center',
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .9)',
    zIndex: 1000
}

export default function Modal({ open, onClose, country }) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES} onClick={onClose} />
            <Box style={MODAL_STYLES}>
                <Typography marginBottom='50px' fontWeight='bold' variant='h4'>{country.name.official}</Typography>
                <Box display='flex'>
                    <Box width='50%'>
                        <p><span style={{ fontWeight: 'bold' }}>Capital:</span> {country.capital}</p>
                        <p><span style={{ fontWeight: 'bold' }}>Currency:</span> {Object.keys(country.currencies) + ''} </p>
                        <p><span style={{ fontWeight: 'bold' }}>Languages:</span> {Object.values(country.languages) + ''}</p>
                        <p><span style={{ fontWeight: 'bold' }}>Population:</span> {country.population.toLocaleString()}</p>
                        <p><span style={{ fontWeight: 'bold' }}>Region:</span> {country.region}</p>
                        <p><span style={{ fontWeight: 'bold' }}>Subregion:</span> {country.subregion}</p>
                        <p><span style={{ fontWeight: 'bold' }}>Timezones:</span> {country.timezones + ''}</p>
                        <button style={{ height: '30px', fontWeight: 'bold' }} href={country.maps.googleMaps} target='_blank' rel='noreferrer'>Map Location</button>
                        <button style={{ height: '30px', fontWeight: 'bold' }} onClick={onClose}>Close Modal</button>
                    </Box>
                    <Box width='50%'>
                        <img src={country.flags[0]} alt='Country Flag' height='250px' width='500px' />
                    </Box>
                </Box>
            </Box>

        </>,
        document.getElementById('portal')
    )
}
