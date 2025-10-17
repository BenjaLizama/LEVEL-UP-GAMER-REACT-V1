import React, { useState } from "react";

export default function ZoomImage({ src, alt }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <img
        src={src}
        alt={alt}
        style={{ cursor: "pointer", maxWidth: "100%" }}
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            cursor: "zoom-out",
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{ maxHeight: "90%", maxWidth: "90%" }}
          />
        </div>
      )}
    </>
  );
}
