import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Employee = lazy(() => import('./employee/Employee'));
const Employees = lazy(() => import('./employees/Employees'));
const StateMaster = lazy(() => import('./location/stateMaster/StateMaster') )
const AdministratorConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'master/administrator/employees',
      element: <Employees />,
    },
    {
      path: 'master/administrator/employees/:employeeId/*',
      element: <Employee />,
    },
    {
      path: 'master/administrator/location/stateMaster',
      element: <StateMaster />,
    },
    {
      path: 'master/administrator/location/stateMaster/:stateId/*',
      element: <StateMaster />,
    },
   
    {
      path: 'master/administrator',
      element: <Navigate to="employee" />,
    },
  ],
};

export default AdministratorConfig;
