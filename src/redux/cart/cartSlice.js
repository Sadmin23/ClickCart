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
      const Item = action.payload;
      const cItem = state.itemList.findIndex(
        (item) => item.id === Item.id
      );

      if (cItem === -1) {
        state.itemList.push({
          id: Item.id,
          title: Item.title,
          price: Item.price,
          image: Item.image,
          quantity: Item.quantity,
          totalPrice: Item.price,
        });
      } else {
        state.itemList[cItem].quantity += Item.quantity;
        state.itemList[cItem].totalPrice = state.itemList[cItem].price * state.itemList[cItem].quantity;
      }
      state.totalItems += Item.quantity;
      state.totalPrice += Item.price * Item.quantity;
    }
    },
})

export const { addItem } = cartSlice.actions
export const itemCount = (state) => state.cart.totalItems
export const totalPrice = (state) => state.cart.totalPrice
export const itemList = (state) => state.cart.itemList
export default cartSlice.reducer