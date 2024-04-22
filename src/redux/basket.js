import { createSlice } from "@reduxjs/toolkit";


const items = localStorage.getItem('basketItems') !== null ?
 JSON.parse(localStorage.getItem('basketItems')) : []

const Basket = createSlice({
    name: 'basket',
    initialState: {
        items,
    },
    reducers: {
        addItemToCard : (state, action) => {
            state.items.push(action.payload)
            localStorage.setItem('basketItems', JSON.stringify(state.items))
        },
        deleteItemFromCard: (state, action) => {
            const index = state.items.findIndex(el => el.id === action.payload) 
            if (index !== -1){
                state.items.splice(index,1)
                localStorage.setItem('basketItems', JSON.stringify(state.items))   
            }
        }
    }
})
export default Basket.reducer
export const {addItemToCard,deleteItemFromCard} =Basket.actions