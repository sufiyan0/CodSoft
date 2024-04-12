'use client'
import { configureStore } from "@reduxjs/toolkit";
import { jobdataSlice } from "./features/jobsdata/jobdataSlice";


 const store:any = () => {
    return configureStore({
        reducer: jobdataSlice.reducer
    })
}

export default store;

// // Infer the type of makeStore
// export type AppStore = ReturnType<typeof store>
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']