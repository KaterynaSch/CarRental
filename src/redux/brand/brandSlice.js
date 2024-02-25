const { createSlice } = require("@reduxjs/toolkit");

const brandSlice = createSlice({
    name: 'brand',
    initialState: {
        brand: ''
    },
    reducers: {
        changeBrand(state, action) {
            state.brand = action.payload
        },
     }
})

export const {changeBrand} = brandSlice.actions;
export const brandReduser = brandSlice.reducer;