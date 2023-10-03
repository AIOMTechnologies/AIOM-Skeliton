import { combineReducers } from '@reduxjs/toolkit';
import employee from './employeeSlice';
import employees from './employeesSlice';
import stateMaster from './stateMasterSlice';

const reducer = combineReducers({
    employee,
    employees,
    stateMaster,
  
});

export default reducer;
