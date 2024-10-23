import { configureStore } from '@reduxjs/toolkit';
import UserData from './Slices/UserData';

export const store = configureStore({
    reducer: {
        UserData : UserData
    },
});