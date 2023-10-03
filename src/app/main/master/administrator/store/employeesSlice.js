import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEmployees = createAsyncThunk('aDministratorConfig/Employees/getEmployees', async () => {
  const response = await axios.get('/api/administrator/employees');
  const data = await response.data;

  return data;
});

export const removeEmployees = createAsyncThunk(
  'aDministratorConfig/Employees',
  async (employeeIds, { dispatch, getState }) => {
    await axios.delete('/api/administrator/employees', { data: employeeIds });

    return employeeIds;
  }
);

const EmployeesAdapter = createEntityAdapter({});

export const { selectAll: selectEmployees, selectById: selectEmployeeById } =
  EmployeesAdapter.getSelectors((state) => state.aDministratorConfig.employees);

const EmployeesSlice = createSlice({
  name: 'aDministratorConfig/employees',
  initialState: EmployeesAdapter.getInitialState({
    searchText: '',
  }),
  reducers: {
    setEmployeesSearchText: {
      reducer: (state, action) => {
        state.searchText = action.payload;
      },
      prepare: (event) => ({ payload: event.target.value || '' }),
    },
  },
  extraReducers: {
    [getEmployees.fulfilled]: EmployeesAdapter.setAll,
    [removeEmployees.fulfilled]: (state, action) =>
      EmployeesAdapter.removeMany(state, action.payload),
  },
});

export const { setEmployeesSearchText } = EmployeesSlice.actions;

export const selectEmployeesSearchText = ({ aDministratorConfig }) => aDministratorConfig.employees.searchText;

export default EmployeesSlice.reducer;
