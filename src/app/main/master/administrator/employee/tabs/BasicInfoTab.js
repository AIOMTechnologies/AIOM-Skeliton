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



function BasicInfoTab(props) {
  const methods = useForm();
  const { control, formState } = methods;
  const { errors } = formState;

  return (
    <div className="flex flex-auto flex-row container  ">
      <div className="p-16 sm:p-24 max-w-2xl w-50 ">
      <div className="flex -mx-4">
          <Controller
            render={({ field }) => (
              <FormControl error={!!errors.RadioGroup} required>
               
                <RadioGroup {...field} row aria-label="emp_type" name="emp_type1">
                  <FormControlLabel value="new" control={<Radio />} label="New" />
                  <FormControlLabel value="existing" control={<Radio />} label="Existing" />
                </RadioGroup>
                <FormHelperText>{errors?.RadioGroup?.message}</FormHelperText>
              </FormControl>
            )}
            name="RadioGroup"
            control={control}
          />
        </div>
     <Controller
        name="old_emp"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-4 mb-4"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="Old Emp"
            autoFocus
            id="name"
           variant="outlined"
            size="small"
            
            
            fullWidth
          />
        )}
      />
       <Controller
        name="emp_id"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-4 mb-4"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="Employee ID"
            autoFocus
            id="name"
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
                <InputLabel id="demo-simple-select-label">Title</InputLabel>
                <Select {...field} variant="outlined" size="small" className="mt-4 mb-4 mx-4"  autoFocus label="Title" fullWidth>
                  <MenuItem value="Mr.">Mr. </MenuItem>
                  <MenuItem value="Miss.">Miss. </MenuItem>
                  <MenuItem value="Mrs.">Mrs. </MenuItem>
                </Select>
                <FormHelperText>{errors?.Select?.message}</FormHelperText>
              </FormControl>
            )}
            name="Select"
            control={control}
          />

        

        <Controller
          name="first_name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mt-4 mb-4 mx-4"
              label="First Name"
              id="depth"
              variant="outlined"
              fullWidth
              size="small"
            />
          )}
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
       <Controller
        name="middle_name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-4 mb-4"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="Middle Name"
            autoFocus
            id="name"
            variant="outlined"
            size="small"
            fullWidth
          />
        )}
      />
       <Controller
        name="father_name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-4 mb-4"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="Father Name"
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
            render={({ field }) => (
              <FormControl error={!!errors.Select} required fullWidth>
                <InputLabel id="demo-simple-select-label">Employee Type</InputLabel>
                <Select {...field} size="small"  variant="outlined" fullWidth label="Employee Type">
                  <MenuItem value="10">Permanent</MenuItem>
                  <MenuItem value="20">Probation</MenuItem>
                  <MenuItem value="30">Retailers</MenuItem>
                </Select>
                <FormHelperText>{errors?.Select?.message}</FormHelperText>
              </FormControl>
            )}
            name="Select"
            control={control}
          />
        </div>
      <div className="mt-4 mb-4">
          
          <Controller
            name="DateTimePicker"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <DateTimePicker
                value={new Date(value)}
                onChange={onChange}
                required
                slotProps={{
                  textField: {
                    id: 'birthday',
                    label: 'Date of Birthday',
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
            name="DateTimePicker"
            control={control}
            render={({ field: { onChange, value, onBlur } }) => (
              <DateTimePicker
                value={new Date(value)}
                onChange={onChange}
                required
                slotProps={{
                  textField: {
                    id: 'birthday',
                    label: 'Date of Join',
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
        <Controller
        name="birth_place"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-4 mb-4"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="Birth Place"
            autoFocus
            id="name"
           variant="outlined"
            size="small"
            fullWidth
          />
        )}
      />
     
      </div>
       <div className="p-16 sm:p-24 max-w-2xl w-50 ">
      
     
       <Controller
        name="emp_id"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-4 mb-4"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="Employee ID"
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
            render={({ field }) => (
              <FormControl error={!!errors.Select} required fullWidth>
                 <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
                <Select {...field} variant="outlined" size="small"  label="Blood Group" fullWidth>
                  <MenuItem value="A+">A+</MenuItem>
                  <MenuItem value="A-">A-</MenuItem>
                  <MenuItem value="B+">B+</MenuItem>
                </Select>
                <FormHelperText>{errors?.Select?.message}</FormHelperText>
              </FormControl>
            )}
            name="Select"
            control={control}
          />
        </div>
        <div className="mt-4 mb-4">
          <Controller
            render={({ field }) => (
              <FormControl error={!!errors.Select} required fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                 <Select {...field}variant="outlined" size="small" label="Gender" fullWidth>
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                    </Select>
                <FormHelperText>{errors?.Select?.message}</FormHelperText>
              </FormControl>
            )}
            name="Select"
            control={control}
          />
        </div>
       <div className="mt-4 mb-4">
          <Controller
            render={({ field }) => (
              <FormControl error={!!errors.Select} required fullWidth>
                 <InputLabel id="demo-simple-select-label">Religion</InputLabel>
                <Select {...field}variant="outlined" size="small" label="Religion" fullWidth>
                  <MenuItem value="hindu">Hindu</MenuItem>
                  <MenuItem value="Aglipayan ">Aglipayan </MenuItem>
                  
                </Select>
                <FormHelperText>{errors?.Select?.message}</FormHelperText>
              </FormControl>
            )}
            name="Select"
            control={control}
          />
        </div>
        <div className="mt-4 mb-4">
          <Controller
            render={({ field }) => (
              <FormControl error={!!errors.Select} required fullWidth>
                <InputLabel id="demo-simple-select-label">Civil Status</InputLabel>
                <Select {...field}variant="outlined" label="Civil Status" size="small" fullWidth>
                  <MenuItem value="10">Permanent</MenuItem>
                  <MenuItem value="20">Probation</MenuItem>
                  <MenuItem value="30">Retailers</MenuItem>
                </Select>
                <FormHelperText>{errors?.Select?.message}</FormHelperText>
              </FormControl>
            )}
            name="Select"
            control={control}
          />
        </div>
        <div className="mt-4 mb-4">
          <Controller
            render={({ field }) => (
              <FormControl error={!!errors.Select} required fullWidth>
                <InputLabel id="demo-simple-select-label">Departments</InputLabel>
                <Select {...field} variant="outlined" label="Departments" size="small" fullWidth>
                  <MenuItem value="10">Permanent</MenuItem>
                  <MenuItem value="20">Probation</MenuItem>
                  <MenuItem value="30">Retailers</MenuItem>
                </Select>
                <FormHelperText>{errors?.Select?.message}</FormHelperText>
              </FormControl>
            )}
            name="Select"
            control={control}
          />
        </div>
        <div className="mt-4 mb-4">
          <Controller
            render={({ field }) => (
              <FormControl error={!!errors.Select} required fullWidth>
                <InputLabel id="demo-simple-select-label">Designation</InputLabel>
                <Select {...field} variant="outlined" label="Designation" size="small" fullWidth>
                 <MenuItem value="10">Permanent</MenuItem>
                  <MenuItem value="20">Probation</MenuItem>
                  <MenuItem value="30">Retailers</MenuItem>
                </Select>
                <FormHelperText>{errors?.Select?.message}</FormHelperText>
              </FormControl>
            )}
            name="Select"
            control={control}
          />
        </div>
      
        <div className="mt-4 mb-4">
          <Controller
            render={({ field }) => (
              <FormControl error={!!errors.Select} required fullWidth>
                <InputLabel id="demo-simple-select-label">User Roles</InputLabel>
                 <Select {...field} variant="outlined" label="User Roles" size="small" fullWidth>
                  <MenuItem value="10">Permanent</MenuItem>
                  <MenuItem value="20">Probation</MenuItem>
                  <MenuItem value="30">Retailers</MenuItem>
                </Select>
                <FormHelperText>{errors?.Select?.message}</FormHelperText>
              </FormControl>
            )}
            name="Select"
            control={control}
          />
        </div>

      </div>
    </div>
  );
}

export default BasicInfoTab;
