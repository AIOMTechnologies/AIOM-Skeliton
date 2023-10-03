import Dashboard from './Dashboard';


const DashboardConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboard',
      element: <Dashboard />,
    },
  ],
};

export default DashboardConfig;

/**
 * Lazy load Dashboard
 */
/*
import React from 'react';

const Dashboard = lazy(() => import('./Dashboard'));

const DashboardConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'Dashboard',
      element: <Dashboard />,
    },
  ],
};

export default DashboardConfig;
*/
