import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gender: 'Male',
  age: 18,
  weight: 70,
  height: 16,
  bloodType: '',
  allergies: [],

};

const recordSlice = createSlice({
    name: 'record',

    initialState,

    reducers:{
        // personal info
        setGender: (state, action) => {
            state.gender = action.payload;
        },
        setAge: (state, action) => {
            state.age = action.payload;
        },
        setWeight: (state, action) => {
            state.weight = action.payload;
        },
        setHeight: (state, action) => {
            state.height = action.payload;
        },
        setBloodType: (state, action) => {
            state.bloodType = action.payload;
        },

        // reducer to reset record
        resetRecord: () => initialState,

        // allergies
        addAllergies: (state, action) => {
            const allergy = action.payload;
            const exists = state.allergies.some(d => d.id === action.payload);

            if(!exists){
                state.allergies.push(allergy);
            }
        },
        removeAllergies: (state, action) => {
            const allergyId = action.payload;

            state.allergies = state.allergies.filter(d => d.id !== allergyId);
        }
    }
});

export const { 
    setGender, 
    setAge, 
    setWeight, 
    setHeight, 
    setBloodType, 
    resetRecord
    } = recordSlice.actions;

export default recordSlice.reducer;