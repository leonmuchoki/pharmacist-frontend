import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("cartSlice", action)
        const item_data = {
            customerId: action.payload.customerId,//customer or non-customer(0)
            inventoryId: action.payload.inventoryId,
            price: action.payload.price,
            quantity: action.payload.quantity,
            name:  action.payload.name
        }
        state.cartItems.push(item_data);
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(x => x.inventoryId !== action.payload.inventoryId);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer