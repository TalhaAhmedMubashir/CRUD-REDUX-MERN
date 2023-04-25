import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const createuser = createAsyncThunk(
    'data/createdata',
    async (data, thunkApi) => {
        const requestOptions = {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ ...data })
        }
        const res = await fetch('http://localhost:3001/people/', requestOptions).then((data) => data.json())
        return res;
    }
)

export const updateuser = createAsyncThunk(
    'data/updateuser',
    async (data, thunkApi) => {
        const requestOptions = {
            method: "PATCH",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }

        const res = await fetch(`http://localhost:3001/people/${data.id}`,requestOptions).then((data)=>data.json())
       

        return res
    }
)

export const deleteuser = createAsyncThunk(
    'data/deleteuse',
    async (data, thunkApi) => {
        const requestOptions = {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ data })
        }
        const res = await fetch(`http://localhost:3001/people/${data.id}`,requestOptions).then((data)=>data.json())
        return res;
    }
)

export const getuser = createAsyncThunk(
    'data/getuser',
    async (data, thunkApi) => {
        const requestOptions = {
            method: "GET",
            headers: { "content-type": "application/json" },
        }
        const res = await fetch('http://localhost:3001/people', requestOptions).then((data) => data.json())
        return res;
    }
)

export const asyncUserSlice = createSlice({
    name: 'userdata',
    initialState: {
        loading: false,
        userData: []
    },
    reducers: {

    },
    extraReducers: {
        [createuser.pending]: (state) => {
            state.loading = false
        },
        [createuser.rejected]: (state) => {
            state.loading = false
        },
        [createuser.fulfilled]: (state, action) => {
            state.loading = true
            state.userData = action.payload
        },
        [updateuser.pending]: (state) => {
            state.loading = false
        },
        [updateuser.rejected]: (state) => {
            state.loading = false
        },
        [updateuser.fulfilled]: (state, action) => {
            state.loading = true
            state.userData = action.payload
        },
        [getuser.pending]: (state) => {
            state.loading = false
        },
        [getuser.rejected]: (state) => {
            state.loading = false
        },
        [getuser.fulfilled]: (state, action) => {
            state.loading = true
            state.userData = action.payload
        },
        [deleteuser.pending]: (state) => {
            state.loading = false
        },
        [deleteuser.rejected]: (state) => {
            state.loading = false
        },
        [deleteuser.fulfilled]: (state) => {
            state.loading = true
        }

    }
})

