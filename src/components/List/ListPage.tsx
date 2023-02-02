import React, { useState, useEffect } from 'react';

import {
  Box, Typography, Button
} from "@mui/material";
import { RU_CATEGORYS, US_CATEGORYS, TPizza } from '../../types/pizza';
import { getAllPizza } from '../../api/pizza';
import PizzaCard from '../PizzaCard/PizzaCard';

export default function ListPage() {
  const [pizzaList, setPizzaList] = useState<TPizza[]>([]);

  useEffect(() => {
    getAllPizza().then(value => setPizzaList(value));
  }, [])

  return (
    <Box sx={{
      backgroundColor: "#fff",
      width: "100wh",
      height: "100wh",
      position: "absolute",
      bottom: 0, left: 0, right: 0, top: "15%",
      padding: 7, overflowY: 'scroll',
    }}>
      <Typography
        variant="h4"
        fontWeight="bold"
      >Выбрать пиццу</Typography>
      <Box sx={{
        display: "flex", justifyContent: 'center',
      }}>
        {US_CATEGORYS.map((element, i) =>
          <Button
            key={"button" + i}
            variant="contained"
            sx={{
              margin: 2, marginTop: 5,
              borderRadius: 25,
              fontWeight: "bold",
              color: "#fff"
            }}
          >{RU_CATEGORYS[i]}</Button>
        )}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        {pizzaList.map(
          (item) => <PizzaCard pizza={item} />
        )}
      </Box>
    </Box>
  )
}

