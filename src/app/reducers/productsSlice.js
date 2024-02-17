import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const response = await fetch(
        'https://api.escuelajs.co/api/v1/productsdds',
        {
          mode: 'cors',
        },
      );

      if (!response.ok) {
        throw new Error('ServiceError');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
);

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    loading: true,
    productsData: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.productsData = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default productsSlice.reducer;
