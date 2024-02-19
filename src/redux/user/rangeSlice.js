import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    rangeValues: [10, 1500],
}

export const rangeSlice = createSlice({
  name: 'range',
  initialState,
  reducers: {
        setRangeValues: (state, action) => {
          state.rangeValues = action.payload
        }
    },
})

export const { setRangeValues } = rangeSlice.actions
export const selectRangeValues = (state) => state.range.rangeValues
export default rangeSlice.reducer