import React from 'react';

import {
  Card, CardContent, Typography, CardMedia
} from "@mui/material";
import { TPizza } from '../../types/pizza';

export default function PizzaCard({ pizza }: { pizza: TPizza }) {
  console.log(pizza)
  return (
    <Card sx={{
      maxWidth: 300, margin: 5,
    }}>
      <img
        height="200px"
        width="200px"
        src={pizza.img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {pizza.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {
            pizza.ingredients.join(', ')
          }
        </Typography>
      </CardContent>
    </Card>
  )
}
