import {createSlice} from '@reduxjs/toolkit'

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        itemsInBasket: [],
    },
    reducers: {
        setItemInBasket: (state, action) => {
            state.itemsInBasket.push(action.payload)
        },
        deleteItemFromBasket: (state, action) => {
            state.itemsInBasket = state.itemsInBasket.filter(item => item.id !== action.payload)
        },
    }
});

export const {setItemInBasket, deleteItemFromBasket} = basketSlice.actions;
export default basketSlice.reducer;