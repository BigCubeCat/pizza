import React from "react";
import {
  Box, Typography
} from '@mui/material';

import ContactData from './ContactData';

export default function Order() {
  return (
    <Box sx={{
      backgroundColor: "#fff",
      width: "100wh",
      height: "100wh",
      position: "absolute",
      bottom: 0, left: 0, right: 0, top: "15%",
      padding: 7, overflowY: 'scroll',
      display: "flex", justifyContent: 'space-between',
      flexDirection: "column"
    }}>
      <Typography variant="h4" fontWeight="bold">
        Оформить заказ
      </Typography>
      <ContactData />
    </Box>
  )
}
