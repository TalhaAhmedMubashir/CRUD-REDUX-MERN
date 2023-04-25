import {configureStore} from '@reduxjs/toolkit'
import { asyncUserSlice } from '../appslicer/appslicer'

export default configureStore({
    reducer:{
        myappuser:asyncUserSlice.reducer
     } 
})