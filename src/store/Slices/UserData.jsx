import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    data: []
}

export const UserDataSlice = createSlice({
    name: 'UserData',
    initialState,
    reducers: {
        UserData: (state, action) => {
            state.data = action.payload
        }
    },
})

export const { UserData } = UserDataSlice.actions;

export default UserDataSlice.reducer