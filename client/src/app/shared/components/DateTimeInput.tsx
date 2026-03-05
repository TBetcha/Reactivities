/** @format */

import { type TextFieldProps } from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { type FieldValues, useController, type UseControllerProps } from 'react-hook-form'

type Props<T extends FieldValues> = {} & UseControllerProps<T> & TextFieldProps
export default function DateTimeInput<T extends FieldValues>(props: Props<T>) {
  const { field, fieldState } = useController({ ...props })

  return (
    <DateTimePicker
      {...props}
      value={field.value ? new Date(field.value) : null}
      onChange={(value) => {
        field.onChange(new Date(value!))
      }}
      sx={{ width: '100%' }}
      slotProps={{
        textField: {
          error: !!fieldState.error,
          onBlur: field.onBlur,
          helperText: fieldState.error?.message,
        },
      }}
    />
  )
}
