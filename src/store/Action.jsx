import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    myprodata: [

    ]

}
const Myactions = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        myadd: (state, action) => {
            const existingItem = state.myprodata.find((item) => item.id === action.payload.id);
            if (!existingItem) {
                state.myprodata.push({ ...action.payload, quantity: 1 })
            }


        },
        removeItem: (state, action) => {
            state.myprodata = state.myprodata.filter((item) => item.id !== action.payload.id);
        },
        increaseQuntity: (state, action) => {
            const itemIndex = state.myprodata.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.myprodata[itemIndex].quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const itemIndex = state.myprodata.findIndex((item) => item.id === action.payload.id)
            if (itemIndex>=0 && state.myprodata[itemIndex].quantity>1) {
                state.myprodata[itemIndex].quantity -= 1;
            }
            else if (state.myprodata[itemIndex].quantity === 1) {
                state.myprodata = state.myprodata.filter((item) => item.id !== action.payload.id)
            }
        }


    }
})
export const { myadd, removeItem ,increaseQuntity,decreaseQuantity} = Myactions.actions
export default Myactions.reducer