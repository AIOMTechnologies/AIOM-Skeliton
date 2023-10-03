import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import FuseUtils from '@fuse/utils';

export const getEmployee = createAsyncThunk('aDministratorConfig/employee/getEmployee', async (employeeId) => {
  const response = await axios.get(`/api/administrator/employee/${employeeId}`);
  const data = await response.data;

  return data === undefined ? null : data;
});

export const removeEmployee = createAsyncThunk(
  'aDministratorConfig/employee/removeEmployee',
  async (val, { dispatch, getState }) => {
    const { id } = getState().aDministratorConfig.employee;
    await axios.delete(`/api/administrator/employee/${id}`);
    return id;
  }
);

export const saveEmployee = createAsyncThunk(
  'aDministratorConfig/employee/saveEmployee',
  async (employeeData, { dispatch, getState }) => {
    const { id } = getState().aDministratorConfig;

    const response = await axios.put(`/api/administrator/employee/${id}`, employeeData);

    const data = await response.data;

    return data;
  }
);

const employeeSlice = createSlice({
  name: 'aDministratorConfig/employee',
  initialState: null,
  reducers: {
    resetEmployee: () => null,
    newEmployee: {
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
    [getEmployee.fulfilled]: (state, action) => action.payload,
    [saveEmployee.fulfilled]: (state, action) => action.payload,
    [removeEmployee.fulfilled]: (state, action) => null,
  },
});

export const { newEmployee, resetEmployee } = employeeSlice.actions;

export const selectEmployee = ({ aDministratorConfig }) => aDministratorConfig.employee;

export default employeeSlice.reducer;
