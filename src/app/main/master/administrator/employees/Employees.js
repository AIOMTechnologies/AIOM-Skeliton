import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import reducer from '../store';
import EmployeesHeader from './EmployeesHeader';
import EmployeesTable from './EmployeesTable';

function Employees() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <FusePageCarded
      header={<EmployeesHeader />}
      content={<EmployeesTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  );
}

export default withReducer('aDministratorConfig', reducer)(Employees);
