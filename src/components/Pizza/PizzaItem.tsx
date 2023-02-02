import React from 'react';
import {
  Box, Typography
} from '@mui/material';

import { TIngredient } from './ingredients';

export default function PizzaItem({ item }: {
  item: TIngredient
}) {
  return (
    <Box>
      <img
        width="80px"
        height="80px"
        src={item.img}
      />
      <Typography color="#fff" variant="h6" component="div" >
        {item.title}
      </Typography>
    </Box>
  );
}
