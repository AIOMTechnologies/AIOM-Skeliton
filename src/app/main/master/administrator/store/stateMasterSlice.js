import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import FuseUtils from '@fuse/utils';

export const getStateMaster = createAsyncThunk('stateMasterConfig/stateMaster/getStateMaster', async (stateId) => {

  const response = await axios.get(`/api/administrator/location/stateMaster/${stateId}`);
  const data = await response.data;

  return data === undefined ? null : data;
});

export const removeStateMaster = createAsyncThunk(
  'stateMasterConfig/stateMaster/removeStateMaster',
  async (val, { dispatch, getState }) => {
    const { id } = getState().stateMasterConfig.stateMaster1;
    await axios.delete(`/api/administrator/location/stateMaster/${id}`);
    return id;
  }
);

export const saveStateMaster = createAsyncThunk(
  'stateMasterConfig/stateMaster/saveStateMaster',
  async (stateMasterData, { dispatch, getState }) => {
    const { id } = getState().stateMasterConfig;

    const response = await axios.put(`/api/administrator/location/stateMaster/${id}`, stateMasterData);

    const data = await response.data;

    return data;
  }
);

const stateMasterSlice = createSlice({
  name: 'stateMasterConfig/stateMaster',
  initialState: null,
  reducers: {
    resetStateMaster: () => null,
    newStateMaster: {
      reducer: (state, action) => action.payload,
      prepare: (event) => ({
        payload: {
          id: FuseUtils.generateGUID(),
          name: '',
          handle: '',
          description: '',
          categories: [],
          tags: [],
          images: [],
          priceTaxExcl: 0,
          priceTaxIncl: 0,
          taxRate: 0,
          comparedPrice: 0,
          quantity: 0,
          sku: '',
          width: '',
          height: '',
          depth: '',
          weight: '',
          extraShippingFee: 0,
          active: true,
        },
      }),
    },
  },
  extraReducers: {
    [getStateMaster.fulfilled]: (state, action) => action.payload,
    [saveStateMaster.fulfilled]: (state, action) => action.payload,
    [removeStateMaster.fulfilled]: (state, action) => null,
  },
});

export const { newStateMaster, resetStateMaster } = stateMasterSlice.actions;

export const selectStateMaster = ({ stateConfigReducer }) => stateConfigReducer.stateMaster1;

export default stateMasterSlice.reducer;
