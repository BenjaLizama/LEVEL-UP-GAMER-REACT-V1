import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon({ icon, size, color = "#ffffff" }) {
  return (
    <FontAwesomeIcon
      icon={icon}
      style={{ fontSize: `${size}px`, color: color }}
    ></FontAwesomeIcon>
  );
}
