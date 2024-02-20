import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalItems: 0,
    totalPrice: 0,
    itemList: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
        addItem: (state, action) => {
            state.totalItems += 1
            state.totalPrice += action.payload.price
            state.itemList.push(action.payload)
        }
    },
})

export const { setSearchValue } = cartSlice.actions
export const searchProduct = (state) => state.search.searchValue
export default cartSlice.reducer