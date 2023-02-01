import React from 'react';

const scale = 0.8;

export default function Vegetables() {
  return (
    <>
      <img
        src="/img/pexels-karolina-grabowska-4033324-removebg-preview.png"
        style={{
          position: "absolute",
          top: "20%",
          left: "20%",
          transform: "rotate(-5.18deg)",
          width: 134 * scale, height: 90 * scale,
        }}
      />
      <img
        src="/img/pngfuel.png"
        style={{
          position: "absolute",
          top: "35%", right: "5%",
          width: 185 * scale, height: 163 * scale,
        }}
      />
      <img
        src="/img/onion.png"
        style={{
          position: "absolute",
          bottom: "1%", left: "1%",
          width: 296, height: 296,
        }}
      />
    </>
  )
}
