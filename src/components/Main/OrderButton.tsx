import React from 'react';
import {
  Button, Typography
} from '@mui/material';
import { Link } from "react-router-dom";

export default function OrderButton({ text }: { text: string }) {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: 15,
        paddingLeft: 5,
        paddingRight: 5,
        position: "absolute",
        left: 0, right: 0,
        marginLeft: "auto", marginRight: "auto",
        width: 175, bottom: 80,
      }}
      component={Link}
      to={"/order"}
    >
      <Typography style={{
        fontSize: 16,
        color: "#ffffff",
        fontWeight: "bold",
      }}>{text}</Typography>
    </Button>
  );
}

