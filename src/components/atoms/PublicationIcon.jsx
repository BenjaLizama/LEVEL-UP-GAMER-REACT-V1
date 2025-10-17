import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function PublicationIcon({
  icon,
  size,
  color,
  onClick,
  colorHover,
  padding,
  marked = false,
}) {
  const [hover, setHover] = useState(false);

  return (
    <FontAwesomeIcon
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      icon={icon}
      onClick={onClick}
      style={{
        fontSize: `${size}rem`,
        transition: "all 0.15s ease",
        color: marked || hover ? colorHover : color,
        backgroundColor: marked || hover ? colorHover + "40" : "transparent",
        borderRadius: "50%",
        padding: padding,
      }}
    ></FontAwesomeIcon>
  );
}
