import React from 'react';
import OrderButton from './OrderButton';
import Header from '../Headers/Header';
import Logo from '../Headers/Logo';

export default function Main() {
  return <div style={{ color: "#fff" }}>
    <Header />
    <OrderButton text={"ЗАКАЗАТЬ"} />
    <Logo />
  </div>
}
