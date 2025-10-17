import React, { useEffect, useRef, useState } from "react";

export default function ToolTip({ children, content }) {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", display: "inline-block" }}
      onClick={() => setVisible(true)}
    >
      {children}

      {visible && (
        <div
          style={{
            position: "absolute",
            bottom: "120%",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#fff",
            padding: "0.5rem 1rem",
            whiteSpace: "nowrap",
            zIndex: 1000,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
}
