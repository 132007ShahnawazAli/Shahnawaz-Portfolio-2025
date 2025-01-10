"use client";

import { useEffect } from "react";

export default function MouseAnimation() {
  useEffect(() => {
    const interBubble = document.querySelector(".interactive");
    if (!interBubble) return; 
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;

      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    }

    const handleMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null; 
}
