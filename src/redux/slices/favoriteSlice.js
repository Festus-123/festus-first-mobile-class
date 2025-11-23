import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name:'favorites',

    initialState: {
        doctors: []
    },

    reducers:{
        addFavorite: (state, action) => {
            const doctor = action.payload;

            const exists = state.doctors.some(d => d.id === action.payload)

            if(!exists){
                state.doctors.push(doctor)
            }
        },

        removeFavorite: (state, action) => {
            const doctorId = action.payload;

            state.doctors = state.doctors.filter(d => d.id !== doctorId)
        },

        toggleFavorite: (state, action) => {
            const doctor = action.payload
            const exists = state.doctors.some(d => d.id === doctor.id)

            if(exists){
                state.doctors = state.doctors.filter(d => d.id !== doctor.id)
            }else{
                state.doctors.push(doctor)
            }
        }
    }
});

export const { addFavorite, removeFavorite, toggleFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;