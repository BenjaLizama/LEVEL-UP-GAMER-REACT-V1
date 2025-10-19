import React from "react";
import Styles from "../../styles/Map.module.css";
export default function Map({ mapa }) {
  return (
    <div className="">
      <iframe src={mapa} frameborder=" 0"></iframe>
    </div>
  );
}
