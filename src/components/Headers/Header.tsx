import React from "react";
import {
  Box, Link
} from '@mui/material';

const HeaderLink = ({ title }: { title: string }) => {
  return <Link
    href="/"
    underline="none"
    sx={{
      color: "#fff",
      fontWeight: "bold",
    }}
  >
    {title}
  </Link>
}

export default function Header() {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: 'space-between',
      position: "absolute",
      top: "51px",
      left: 0, right: 0,
      width: 400,
      marginLeft: "auto", marginRight: "auto",
    }}>
      <HeaderLink title="Главная" />
      <HeaderLink title="Выбрать пиццу" />
      <HeaderLink title="Оформить заказ" />
    </Box>
  )
}
