import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { asyncDelay } from '../utils/async.utils'

export type CounterState = {
  count: number
}

const initialState: CounterState = {
  count: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (bulder) => {
    bulder
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.count += action.payload.value
      })
      .addCase(decrementAsync.fulfilled, (state, action) => {
        state.count -= action.payload.value
      })
  }
})

export const incrementAsync = createAsyncThunk('counter/incrementAsync', async () => asyncDelay(1))
export const decrementAsync = createAsyncThunk('counter/decrementAsync', async () => asyncDelay(1))

export const selectCount = (state: RootState) => state.counter.count

export default counterSlice.reducer
