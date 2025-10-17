import React, { useState } from "react";
import styles from "../../styles/PublicationButton.module.css";
import Icon from "./PublicationIcon";

export default function PublicationButton({
  icon,
  quantity,
  colorHover,
  color,
  onClick,
}) {
  const [marked, setMarked] = useState(false);

  return (
    <span className={styles.content}>
      <Icon
        onClick={() => {
          setMarked(!marked);
          {
            onClick;
          }
        }}
        icon={icon}
        size={"1"}
        color={marked ? colorHover : color}
        colorHover={colorHover}
        padding={".4rem"}
      />
      {quantity}
    </span>
  );
}
