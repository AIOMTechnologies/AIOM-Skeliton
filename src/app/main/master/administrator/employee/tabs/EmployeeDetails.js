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



function EmployeeDetails(props) {
  const methods = useForm();
  const { control, formState } = methods;
  const { errors } = formState;

  return (
    <div className="flex flex-auto flex-row container  ">
      <div className="p-16 sm:p-24 max-w-2xl w-50 ">
     
     <Controller
        name="pf_no"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-4 mb-4"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="PF NO"
            autoFocus
            id="pf_no"
           variant="outlined"
            size="small"     
            fullWidth
          />
        )}
      />
      <div className="flex -mx-4">
          <Controller
            render={({ field }) => (
              <FormControl error={!!errors.Select} required >
                <InputLabel id="demo-simple-select-label">Pay Mode</InputLabel>
                <Select {...field} variant="outlined" size="small" className="mt-4 mb-4 mx-4"  autoFocus label="Pay Mode" fullWidth>
                  <MenuItem value="Mr.">Mr. </MenuItem>
                  <MenuItem value="Miss.">Miss. </MenuItem>
                  <MenuItem value="Mrs.">Mrs. </MenuItem>
                </Select>
                <FormHelperText>{errors?.Select?.message}</FormHelperText>
              </FormControl>
            )}
            name="pay_mode"
            control={control}
          />

        

       
      </div>
       <Controller
        name="ledger_no"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-4 mb-4"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="Ledger No"
            autoFocus
            id="ledger_no"
           variant="outlined"
            size="small"
           fullWidth
          />
        )}
      />
       <div className="flex -mx-4">
          <Controller
            render={({ field }) => (
              <FormControl error={!!errors.Select} required >
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select {...field} variant="outlined" size="small" className="mt-4 mb-4 mx-4"  autoFocus label="status" fullWidth>
                  <MenuItem value="Mr.">Mr. </MenuItem>
                  <MenuItem value="Miss.">Miss. </MenuItem>
                  <MenuItem value="Mrs.">Mrs. </MenuItem>
                </Select>
                <FormHelperText>{errors?.Select?.message}</FormHelperText>
              </FormControl>
            )}
            name="status"
            control={control}
          />

      </div>
       <Controller
        name="last_name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-4 mb-4"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="Last Name"
            autoFocus
            id="name"
            variant="outlined"
            size="small"
            fullWidth
          />
        )}
      />
   
       
      <div className="mt-4 mb-4">
          
          <Controller
            name="probation_dt"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <DateTimePicker
                value={new Date(value)}
                onChange={onChange}
                required
                slotProps={{
                  textField: {
                    id: 'probation_dt',
                    label: 'Probation Dt',
                    InputLabelProps: {
                      shrink: true,
                    },
                    fullWidth: true,
                    variant: 'outlined',
                    error:!!errors.DateTimePicker,
                    helperText:errors?.DateTimePicker?.message
                  },
                  inputAdornment: {
                    position: 'start',
                    children: <FuseSvgIcon size={20}>heroicons-solid:cake</FuseSvgIcon>,
                  }}}
          />)}
          />
        </div>
        <div className="mt-4 mb-4">
          <Controller
            name="permanent_on"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <DateTimePicker
                value={new Date(value)}
                onChange={onChange}
                required
                slotProps={{
                  textField: {
                    id: 'permanent_on',
                    label: 'Permanent On',
                    InputLabelProps: {
                      shrink: true,
                    },
                    fullWidth: true,
                    variant: 'outlined',
                    error:!!errors.DateTimePicker,
                    helperText:errors?.DateTimePicker?.message
                  },
                  inputAdornment: {
                    position: 'start',
                    children: <FuseSvgIcon size={20}>heroicons-solid:cake</FuseSvgIcon>,
                  }}}
          />)}
          />
        </div>
        <div className="mt-4 mb-4">
          <Controller
            name="relive_on_dt"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <DateTimePicker
                value={new Date(value)}
                onChange={onChange}
                required
                slotProps={{
                  textField: {
                    id: 'relive_on_dt',
                    label: 'Relive On Dt',
                    InputLabelProps: {
                      shrink: true,
                    },
                    fullWidth: true,
                    variant: 'outlined',
                    error:!!errors.DateTimePicker,
                    helperText:errors?.DateTimePicker?.message
                  },
                  inputAdornment: {
                    position: 'start',
                    children: <FuseSvgIcon size={20}>heroicons-solid:cake</FuseSvgIcon>,
                  }}}
          />)}
          />
        </div>
        <div className="mt-4 mb-4">
          <Controller
            name="resigned_dt"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <DateTimePicker
                value={new Date(value)}
                onChange={onChange}
                required
                slotProps={{
                  textField: {
                    id: 'resigned_dt',
                    label: 'Resigned Dt',
                    InputLabelProps: {
                      shrink: true,
                    },
                    fullWidth: true,
                    variant: 'outlined',
                    error:!!errors.DateTimePicker,
                    helperText:errors?.DateTimePicker?.message
                  },
                  inputAdornment: {
                    position: 'start',
                    children: <FuseSvgIcon size={20}>heroicons-solid:cake</FuseSvgIcon>,
                  }}}
          />)}
          />
        </div>
        
     
      </div>
       <div className="p-16 sm:p-24 max-w-2xl w-50 ">
      <Controller
        name="pan_no"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-4 mb-4"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="PAN NO"
            autoFocus
            id="pan_no"
           variant="outlined"
            size="small"
            fullWidth
          />
        )}
      />
      <Controller
        name="uan_no"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-4 mb-4"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="UAN NO"
            autoFocus
            id="uan_no"
           variant="outlined"
            size="small"
            fullWidth
          />
        )}
      />
      <Controller
        name="passport_no"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-4 mb-4"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="Passport NO"
            autoFocus
            id="passport_no"
           variant="outlined"
            size="small"
            fullWidth
          />
        )}
      />
      <Controller
        name="driving_licence_no"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-4 mb-4"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="Driving Licence No"
            autoFocus
            id="driving_licence_no"
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

export default EmployeeDetails;
