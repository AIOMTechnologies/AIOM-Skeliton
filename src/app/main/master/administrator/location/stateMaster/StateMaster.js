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
import { getStateMaster, newStateMaster, resetStateMaster,selectStateMaster } from '../../store/stateMasterSlice';
import reducer from '../../store';
import StateMasterHeader from './StateMasterHeader';



/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  name: yup
    .string()
    .required('You must enter a employee name')
    .min(5, 'The employee name must be at least 5 characters'),
});

function StateMasters(props) {
  const dispatch = useDispatch();
  const stateMaster1 = useSelector(selectStateMaster);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  const routeParams = useParams();
  const [tabValue, setTabValue] = useState(0);
  const [noStateMaster, setNoStateMaster] = useState(false);
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const { reset, watch, control, onChange, formState } = methods;
  const form = watch();

  useDeepCompareEffect(() => {
    function updateStateMasterState() {
      const { stateId } = routeParams;

      if (stateId === 'new') {
        /**
         * Create New Employee data
         */
        dispatch(newStateMaster());
      } else {
        /**
         * Get Employee data
         */
        dispatch(getStateMaster(stateId)).then((action) => {
          /**
           * If the requested Employee is not exist show message
           */
          if (!action.payload) {
            setNoStateMaster(true);
          }
        });
      }
    }

    updateStateMasterState();
  }, [dispatch, routeParams]);

  useEffect(() => {
    if (!stateMaster1) {
      return;
    }
    /**
     * Reset the form on stateMaster state changes
     */
    reset(stateMaster1);
  }, [stateMaster1, reset]);

  useEffect(() => {
    return () => {
      /**
       * Reset Employee on component unload
       */
      dispatch(resetStateMaster());
      setNoStateMaster(false);
    };
  }, [dispatch]);

  /**
   * Tab Change
   */
  function handleTabChange(event, value) {
    setTabValue(value);
  }

  /**
   * Show Message if the requested State Master is not exists
   */
  if (noStateMaster) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-col flex-1 items-center justify-center h-full"
      >
        <Typography color="text.secondary" variant="h5">
          There is no such State Master!
        </Typography>
        <Button
          className="mt-24"
          component={Link}
          variant="outlined"
          to="/master/administrator/location/stateMaster"
          color="inherit"
        >
          Go to State Master Page
        </Button>
      </motion.div>
    );
  }

  /**
   * Wait while Employee data is loading and form is setted
   */
  if (
    _.isEmpty(form) ||
    (stateMaster1 && routeParams.stateId !== stateMaster1.id && routeParams.stateId !== 'new')
  ) {
    return <FuseLoading />;
  }

  return (
    <FormProvider {...methods}>
      <FusePageCarded
        header={<StateMasterHeader />}
        content={
          <>
         
           hello hai
        
          </>
        }
        scroll={isMobile ? 'normal' : 'content'}
      />
    </FormProvider>
  );
}

export default withReducer('stateConfigReducer', reducer)(StateMasters);
