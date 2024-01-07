import { createSlice, configureStore, createSelector } from '@reduxjs/toolkit';
import { buildGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

import { RootState, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const Countries

// I have a gaint store in Redux kinda like a wareshouse

// I created a small slice of it and assigned the space to a search machine.
// This machine is called 'search' and I have set the initial state to "".
// Additionally, I have set up a reducer fn on it and named it setState which I will later use to modify the state of the 'search'
export const searchSlice = createSlice({
    name: "search",
    initialState: { search: "", },
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
    },
})

/* I am exposing the setSearch reducer for easier access. Could have worked it out from searchSlice, 
but why put my hand inside the machine when I can get the switch (setter fn) to come out. */
export const { setSearch } = searchSlice.actions;

export type RootType = ReturnType<typeof store.getState>;

/* select Search will establish a two way bridge between initial state and outward facing input element.
If I then use a onChange and use the setSearch, it will fn like a mirror. Give input in i/p element -> reflected here in state */
export const selectSearch = (state: RootType) => state.search.search;

// create a filter slice in the warehouse
export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        filter: "",
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        },
    },
});

export const { setFilter } = filterSlice.actions;

// providing a end point where my workman will match the filter to those in input
export const selectFilter = (state: RootType) => state.filter.filter;

// creating the api to get the countries data
const countriesApi = createApi({
    reducerPath: "countriesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "" }),
    endpoints: (builder) => 
        ({
            getCountries: builder.query (
                {
                    query: () => "https://restcountries.com/v3.1/all"
                }
            ),
        }),
    });

// export const useCountryQuery = countriesApi.endpoints.getCountries.useQuery;

// letting my store manager know that it has a slice of its warehouse reserved for search machine
export const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
        countriesApi: countriesApi.reducer,
        filter: filterSlice.reducer,
    },
    middleware: (buildGetDefaultMiddleware) => 
        buildGetDefaultMiddleware().concat(countriesApi.middleware)
});

export const selectCountry = createSelector(
    (state) => countriesApi.endpoints.getCountries.select(undefined)(state)?.data ?? [],
    (state) => state.search.search,
    (state) => state.filter.filter,
    (country, search, filter) =>
        (country || [])
        .filter(country =>
            country.name.common.toLowerCase().includes(search.toLowerCase()) &&
            country.continents[0].toLowerCase().includes(filter.toLowerCase())
        )
        .slice(0,20).sort((a,b) => a.name.common.localeCompare(b.name))
        // there was issue with (a,b) => a.name.localeCompare(b.name)) which now that I think must be due to name being an object.
);

store.dispatch(countriesApi.endpoints.getCountries.initiate(undefined));
console.log(countriesApi.endpoints.getCountries);



