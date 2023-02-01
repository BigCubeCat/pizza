import React from 'react';


export default function Pizza() {
  return (
    <>
      <img
        src="/img/ingredients/halfPizza.png"
        style={{
          position: "absolute",
          left: 0, right: 0,
          marginLeft: "auto", marginRight: "auto",
          bottom: 0, zIndex: 0,
          maxWidth: 700,
        }} />
    </>
  )
}
