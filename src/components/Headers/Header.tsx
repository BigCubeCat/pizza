import React from "react";
import {
  Box, Link
} from '@mui/material';

const HeaderLink = ({ title, link }: {
  title: string,
  link: string,
}) => {
  return <Link
    href={link}
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
      <HeaderLink link="/" title="Главная" />
      <HeaderLink link="/list" title="Выбрать пиццу" />
      <HeaderLink link="/order" title="Оформить заказ" />
    </Box>
  )
}
