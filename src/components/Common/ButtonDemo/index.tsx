import React, { memo } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function ButtonDemo(): React.ReactElement {
  return (
    <Stack direction="row" spacing={2} p={2}>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
    </Stack>
  );
}

export default memo(ButtonDemo);
