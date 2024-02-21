import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    rangeValues: [10, 1800],
}

export const rangeSlice = createSlice({
  name: 'range',
  initialState,
  reducers: {
        setRangeValues: (state, action) => {
          if (action.payload[1] > 1800) action.payload[1] = 1800
          if (action.payload[0] < 10) action.payload[0] = 10
          if (action.payload[0] > action.payload[1]) action.payload[0] = action.payload[1]
          state.rangeValues = action.payload
        }
    },
})

export const { setRangeValues } = rangeSlice.actions
export const selectRangeValues = (state) => state.range.rangeValues
export default rangeSlice.reducer