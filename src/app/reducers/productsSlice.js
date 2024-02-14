import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    loading: true,
    productsData: null,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.productsData = action.payload;
    },
    setError: (state, action) => {
      state.error = action.error;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setProducts, setError, setLoading } = productsSlice.actions;

export default productsSlice.reducer;
