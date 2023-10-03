import FuseLoading from '@fuse/core/FuseLoading';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { useDeepCompareEffect } from '@fuse/hooks';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import withReducer from 'app/store/withReducer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import _ from '@lodash';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import { getEmployee, newEmployee, resetEmployee,selectEmployee } from '../store/employeeSlice';
import reducer from '../store';
import EmployeeHeader from './EmployeeHeader';
import BasicInfoTab from './tabs/BasicInfoTab';
import EmployeeDetails from './tabs/EmployeeDetails';
import ContractInformation from './tabs/ContractInformation';


/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  name: yup
    .string()
    .required('You must enter a employee name')
    .min(5, 'The employee name must be at least 5 characters'),
});

function Employee(props) {
  const dispatch = useDispatch();
  const employee = useSelector(selectEmployee);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  const routeParams = useParams();
  const [tabValue, setTabValue] = useState(0);
  const [noEmployee, setNoEmployee] = useState(false);
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const { reset, watch, control, onChange, formState } = methods;
  const form = watch();

  useDeepCompareEffect(() => {
    function updateEmployeeState() {
      const { employeeId } = routeParams;

      if (employeeId === 'new') {
        /**
         * Create New Employee data
         */
        dispatch(newEmployee());
      } else {
        /**
         * Get Employee data
         */
        dispatch(getEmployee(employeeId)).then((action) => {
          /**
           * If the requested Employee is not exist show message
           */
          if (!action.payload) {
            setNoEmployee(true);
          }
        });
      }
    }

    updateEmployeeState();
  }, [dispatch, routeParams]);

  useEffect(() => {
    if (!employee) {
      return;
    }
    /**
     * Reset the form on Employee state changes
     */
    reset(employee);
  }, [employee, reset]);

  useEffect(() => {
    return () => {
      /**
       * Reset Employee on component unload
       */
      dispatch(resetEmployee());
      setNoEmployee(false);
    };
  }, [dispatch]);

  /**
   * Tab Change
   */
  function handleTabChange(event, value) {
    setTabValue(value);
  }

  /**
   * Show Message if the requested Employees is not exists
   */
  if (noEmployee) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-col flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          There is no such Employee!
        </Typography>
        <Button
          className="mt-24"
          component={Link}
          variant="outlined"
          to="/apps/master/employees"
          color="inherit"
        >
          Go to Employees Page
        </Button>
      </motion.div>
    );
  }

  /**
   * Wait while Employee data is loading and form is setted
   */
  if (
    _.isEmpty(form) ||
    (employee && routeParams.employeeId !== employee.id && routeParams.employeeId !== 'new')
  ) {
    return <FuseLoading />;
  }

  return (
    <FormProvider {...methods}>
      <FusePageCarded
        header={<EmployeeHeader />}
        content={
          <>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="secondary"
              textColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
              classes={{ root: 'w-full h-64 border-b-1' }}
            >
              <Tab className="h-64" label="Basic Info" />
              <Tab className="h-64" label="Employee Details" />
              <Tab className="h-64" label="Contract Information" />
              
             
            </Tabs>
            <div className="w-full ">
              <div className={tabValue !== 0 ? 'hidden' : ''}>
                <BasicInfoTab />
              </div>
              <div className={tabValue !== 1 ? 'hidden' : ''}>
                <EmployeeDetails />
              </div>
              <div className={tabValue !== 2 ? 'hidden' : ''}>
                <ContractInformation />
              </div>

              

          
            </div>
        
          </>
        }
        scroll={isMobile ? 'normal' : 'content'}
      />
    </FormProvider>
  );
}

export default withReducer('aDministratorConfig', reducer)(Employee);
