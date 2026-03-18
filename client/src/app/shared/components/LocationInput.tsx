import { type FieldValues, useController, type UseControllerProps } from 'react-hook-form'
import type { LocationIQSuggestion } from '../../../lib/types';
import { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';

type Props<T extends FieldValues> = {} & UseControllerProps<T>

export default function LocationInput<T extends FieldValues>(props: Props<T>) {
  const { field, fieldState } = useController({ ...props });
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<LocationIQSuggestion[]>([]);
  return (
    <Box>
      <TextField
        {...props}
        {...field}
        fullWidth
        variant="outlined"
        error={!!fieldState.error}
        helperText={fieldState.error ? fieldState.error.message : null}
      />
      {loading && <Typography>Loading...</Typography>}
      {}

    </Box>
  )
}


