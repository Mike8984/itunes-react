import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../api'

const initialState = {
  items: [],
  isLoading: false,
}

export const getItems = createAsyncThunk(
  'catalog/getItems',
  async (searchVal, { dispatch }) => {
    await axios
      .get(searchVal)
      .then(res => dispatch(setItems(res.data.results)))
      .catch(err => err)
  }
)

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
  },
})

export const { setItems } = catalogSlice.actions
export default catalogSlice.reducer
