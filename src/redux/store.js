import {configureStore} from '@reduxjs/toolkit'
import chemicalSlice from './chemicalSlice'

const store = configureStore({
    reducer:{
        chemical: chemicalSlice
    }
})
export default store