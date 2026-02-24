import  { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import {type SelectInputProps } from '@mui/material/Select/SelectInput';
import {  type FieldValues, useController,  type UseControllerProps } from 'react-hook-form';

type Props<T extends FieldValues> = {
  items: { text: string; value: string }[]
  label: string
} & UseControllerProps<T> &
    Partial<SelectInputProps>
  
export default function SelectInput<T extends FieldValues>(props: Props<T>) {
    const { field, fieldState } = useController({ ...props })
    return (
      <FormControl fullWidth error={!!fieldState.error}>
        <InputLabel>{props.label}</InputLabel>
        <Select label={props.label} value={field.value || ''} onChange={field.onChange}>
          {props.items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
    }