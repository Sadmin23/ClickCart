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
        },
        removeItems: (state, action) => {
            const Item = action.payload;
            const cItem = state.itemList.find(
              (item) => item.id === Item.id
            );

            if (cItem){
                state.totalItems --;
                state.totalPrice -= Item.price;

                if (cItem.quantity === 1){
                    state.itemList = state.itemList.filter(
                      (item) => item.id !== Item.id
                    );
                } else {
                    cItem.quantity -= 1;
                    cItem.totalPrice = cItem.price * cItem.quantity;
                }
            }
        },
        deleteItem: (state, action) => {
          const Item = action.payload;
          const cItem = state.itemList.find(
            (item) => item.id === Item.id
          );

          if (cItem){
              state.totalItems -= Item.quantity;
              state.totalPrice -= Item.totalPrice;

              state.itemList = state.itemList.filter(
                (item) => item.id !== Item.id
              );
          }
      },
      clearCart: (state) => {
        state.totalItems = 0;
        state.totalPrice = 0;
        state.itemList = [];
      }       
    },
})

export const { addItem, removeItems, deleteItem, clearCart } = cartSlice.actions
export const itemCount = (state) => state.cart.totalItems
export const totalPrice = (state) => state.cart.totalPrice
export const itemList = (state) => state.cart.itemList
export default cartSlice.reducer