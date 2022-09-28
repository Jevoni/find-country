import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: 'United States',
    searchType: 'name'
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setSearchType: (state, action) => {
            state.searchType = action.payload
        }
    }
})

export const { setSearch, setSearchType } = searchSlice.actions

export const selectedSearch = state => state.search.search

export const selectedSearchType = state => state.search.searchType

export default searchSlice.reducer