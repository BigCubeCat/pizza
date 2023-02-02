import React from 'react';

import {
  Card, CardContent, Typography, Box, Button
} from "@mui/material";
import { TPizza } from '../../types/pizza';

export default function PizzaCard({ pizza }: { pizza: TPizza }) {
  return (
    <Card sx={{
      maxWidth: 300, margin: 5,
      display: "flex", justifyContent: "space-between",
      flexDirection: "column", padding: 1
    }}>
      <img
        height="200px"
        width="200px"
        src={pizza.img}
        alt={pizza.name}
        style={{ alignSelf: "center" }}
      />
      <CardContent>
        <Box sx={{
          display: 'flex', justifyContent: 'space-between',
          paddingRight: 1, paddingLeft: 1,
        }}>
          <Typography gutterBottom
            variant="h6"
            component="div"
            textAlign={"start"}
            fontWeight="bold"
          >
            {pizza.name}
          </Typography>
          <Typography gutterBottom
            component="div"
            textAlign={"start"}
            color="text.secondary"
          >
            {pizza.price.size.medium}см
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="start"
        >
          {
            pizza.ingredients.join(', ')
          }
        </Typography>
      </CardContent>
      <Box sx={{
        display: 'flex', justifyContent: 'space-between',
        paddingRight: 1, paddingLeft: 1, marginTop: 2,
      }}>
        <Typography fontWeight="bold">{pizza.price.default}₽</Typography>
        <Button
          variant="contained"
          sx={{
            borderRadius: 100,
            color: "#fff",
            fontWeight: "bold"
          }}
          onClick={() => { }}
        >Добавить</Button>
      </Box>
    </Card>
  );
}
