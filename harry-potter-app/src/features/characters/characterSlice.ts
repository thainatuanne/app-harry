import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Character, CharacterState } from './types'; // ← aqui

const initialState: CharacterState = {
    data: [],
    status: 'idle',
    error: null,
};

export const fetchCharacters = createAsyncThunk(
    'characters/fetchCharacters',
    async () => {
        const response = await axios.get('https://hp-api.onrender.com/api/characters');
        return response.data;
    }
);

const characterSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCharacters.pending, state => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchCharacters.fulfilled, (state, action: PayloadAction<Character[]>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchCharacters.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Erro desconhecido';
            });
    },
});

export default characterSlice.reducer;
