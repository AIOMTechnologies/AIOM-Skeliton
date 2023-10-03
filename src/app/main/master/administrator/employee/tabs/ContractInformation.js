import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Controller, useForm } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { DateTimePicker } from '@mui/x-date-pickers';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';



function ContractInformation(props) {
  const methods = useForm();
  const { control, formState } = methods;
  const { errors } = formState;

  return (
    <div className="flex flex-auto flex-row container  ">
      <div className="p-16 sm:p-24 max-w-2xl w-50 ">
     
     <Controller
        name="no_of_house"
        control={control}
        render={({ field }) => (
          <TextField  {...field} className="mt-4 mb-4" error={!!errors.name} required
            helperText={errors?.name?.message} label="No. of House" autoFocus id="no_of_house"
           variant="outlined" size="small" fullWidth />
        )}  />
       <Controller
        name="brgy_subd"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-4 mb-4"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="Brgy./subd"
            autoFocus
            id="brgy_subd"
           variant="outlined"
            size="small"
             fullWidth
          />
        )}
      />
       
       <Controller
        name="city_province"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-4 mb-4"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="City/Province"
            autoFocus
            id="city_province"
            variant="outlined"
            size="small"
            fullWidth
          />
        )}
      />
       <Controller
        name="mobile_number"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-4 mb-4"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="Mobile No."
            autoFocus
            id="mobile_number"
            variant="outlined"
            size="small"
            fullWidth
          />
        )}
      />
       <Controller
        name="phone_no"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-4 mb-4"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="Phone No."
            autoFocus
            id="phone_no"
           variant="outlined"
            size="small"
            fullWidth
          />
        )}
      />
   
        <Controller
        name="email_address"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-4 mb-4"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="Email Address"
            autoFocus
            id="email_address"
           variant="outlined"
            size="small"
            fullWidth
          />
        )}
      />
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-4 mb-4"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="User Name"
            autoFocus
            id="username"
           variant="outlined"
            size="small"
            fullWidth
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-4 mb-4"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="Password"
            autoFocus
            id="password"
           variant="outlined"
            size="small"
            fullWidth
          />
        )}
      />
     
      </div>
       
    </div>
  );
}

export default ContractInformation;
