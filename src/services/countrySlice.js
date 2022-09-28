import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries: []
}

const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        clearData: (state) => {
            state.countries = []
        },
        setData: (state, action) => {
            state.countries.push(action.payload)
        }
    }
})

export default countrySlice.reducer

export const { clearData, setData } = countrySlice.actions

export const selectedData = state => state.country.countries