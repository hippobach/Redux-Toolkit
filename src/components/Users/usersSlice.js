import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '0', name: 'Harry Vu' },
    { id: '1', name: 'Christian Do' },
    { id: '3', name: 'Daniel Nguyen' },
    { id: '4', name: 'Andy Nguyen' },
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
