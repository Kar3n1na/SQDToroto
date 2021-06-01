import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import "./Sidebar.css";
import Sidebar from "./SideBar";

export default function Map_laguna() {
  const [viewport, setViewport] = useState({
    latitude: 18.4486309,
    longitude: -90.2192165,
    width: "80vw",
    height: "95vh",
    zoom: 9,
    pitch: 20,
  });
  return (
    <div className="container_sidebar_laguna">
      <Sidebar />
      <div className="container_mapa_laguna">
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken="pk.eyJ1IjoiZWxpemFiZXRoZ2giLCJhIjoiY2twOHBkaHNvMDN1MjJvcDR6aGhpM2h2ayJ9.U3EK7VZc-urMFKxXy83cpQ"
          mapStyle="mapbox://styles/elizabethgh/ckp8r5cxj28lq18p5ud5gwhy4"
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        ></ReactMapGL>
      </div>
    </div>
  );
}
