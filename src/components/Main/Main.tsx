import React from 'react';
import OrderButton from './OrderButton';
import Header from '../Headers/Header';
import Logo from '../Headers/Logo';
import Vegetables from '../Headers/Vegetables';
import Greens from '../Headers/Greens';
import Pizza from './Pizza';

export default function Main() {
  return <div style={{ color: "#fff" }}>
    <Header />
    <Logo />
    <Vegetables />
    <Greens />
    <Pizza />
    <OrderButton text={"ЗАКАЗАТЬ"} />
  </div>
}
