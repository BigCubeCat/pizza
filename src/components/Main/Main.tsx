import React from 'react';
import OrderButton from './OrderButton';
import Vegetables from '../Headers/Vegetables';
import Greens from '../Headers/Greens';
import Pizza from '../Pizza/Pizza';

export default function Main() {
  return <div >
    <Vegetables />
    <Greens />
    <Pizza />
    <OrderButton text={"ЗАКАЗАТЬ"} />
  </div>
}
