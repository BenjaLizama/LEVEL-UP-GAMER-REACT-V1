import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SimpleIcon({ icon, size, color }) {
  return (
    <FontAwesomeIcon icon={icon} style={{ fontSize: `${size}rem`, color }} />
  );
}
