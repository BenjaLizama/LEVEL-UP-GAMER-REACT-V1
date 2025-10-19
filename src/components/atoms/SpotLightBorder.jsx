import React, { useRef } from "react";
import styles from "../../styles/SpotLightBorder.module.css";

export default function SpotlightBorder({ children }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty("--x", `${x}px`);
    ref.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={ref}
      className={styles.spotlightBorder}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
}
