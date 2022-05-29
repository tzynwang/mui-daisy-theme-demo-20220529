import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function TypographyDemo(): React.ReactElement {
  /* Main */
  return (
    <Box p={2}>
      <Typography variant="h1">h1</Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4">h4</Typography>
      <Typography variant="Read">
        Typography variant="Read": Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Architecto nulla porro ea reprehenderit accusamus
        voluptatum tenetur aspernatur sit praesentium quasi placeat aliquid
        minus odio sequi est, non nisi. Consectetur, dolores?
      </Typography>
    </Box>
  );
}

export default TypographyDemo;
