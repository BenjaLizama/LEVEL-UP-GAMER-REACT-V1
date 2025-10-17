import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import styles from "../../styles/ToolTip.module.css";

export default function ToolTip({ children, content }) {
  const [visible, setVisible] = useState(false);
  const [styleTooltip, setStyleTooltip] = useState({});
  const containerRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target) &&
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    if (visible) {
      setVisible(false);
      setStyleTooltip({});
      setTimeout(() => setVisible(true), 0);
    } else {
      setStyleTooltip({});
      setVisible(true);
    }
  };

  useLayoutEffect(() => {
    if (visible && tooltipRef.current) {
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;

      let offsetX = 0;

      if (tooltipRect.left < 0) offsetX = -tooltipRect.left + 8;
      if (tooltipRect.right > screenWidth)
        offsetX = screenWidth - tooltipRect.right - 8;

      setStyleTooltip({
        bottom: "120%",
        left: "50%",
        transform: `translateX(-50%) translateX(${offsetX}px)`,
        position: "absolute",
        zIndex: 1000,
      });
    }
  }, [visible]);

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", display: "inline-block" }}
      onClick={handleClick}
      className={styles.children}
    >
      {children}

      {visible && (
        <div ref={tooltipRef} style={styleTooltip} className={styles.tooltip}>
          {content}
        </div>
      )}
    </div>
  );
}
