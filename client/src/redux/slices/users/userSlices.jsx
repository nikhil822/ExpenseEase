import { createAsyncThunk } from "@reduxjs/toolkit";

// login action
export const loginUserAction = createAsyncThunk(
    'user/login',
    async (payload, {rejectWithValue, getState, dispatch}) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const {data} = await axios.post(
                'http://localhost:5000/api/users/login',
                payload,
                config
            )
            return data
        } catch(error) {
            if(!error?.response) {
                throw error
            }
            return rejectWithValue(error?.response?.data)
        }
    }
)