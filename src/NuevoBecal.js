import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl"

mapboxgl.accessToken ="pk.eyJ1IjoiZWxpemFiZXRoZ2giLCJhIjoiY2twOHBkaHNvMDN1MjJvcDR6aGhpM2h2ayJ9.U3EK7VZc-urMFKxXy83cpQ";

export default function NuevoBecal() {
  const [pageIsMounted, setPageIsMounted] = useState(false)
  
  useEffect(()=>{
    setPageIsMounted(true)
    const map = new mapboxgl.Map({
      container: 'map',
      style: "mapbox://styles/elizabethgh/ckp8r5cxj28lq18p5ud5gwhy4",
      center: [ -89.22572773113599, 18.549250755763801 ],
      zoom: 10
    })
    
    map.on("load", function () {
      // Add a data source containing GeoJSON data.
      map.addSource("maine", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Polygon",
            // These coordinates outline Maine.
            coordinates: [
              [
                [ -89.22572773113599, 18.549250755763801 ], 
                [ -89.335399093001072, 18.547275803180387 ], 
                [ -89.335525007458543, 18.554679747701844 ], 
                [ -89.335372919171917, 18.554999803660127 ], 
                [ -89.331902281045302, 18.557155945084165 ], 
                [ -89.332012228398952, 18.559917515723846 ], 
                [ -89.319039684851433, 18.569956240370271 ],
                [ -89.327843700124362, 18.605727225058626 ], 
                [ -89.327876978645449, 18.605948713843762 ], 
                [ -89.330049198714931, 18.625359978457926 ], 
                [ -89.327406822982169, 18.749632810901474 ], 
                [ -89.327029417533879, 18.755123456605034 ], 
                [ -89.324633233420727, 18.791448444480267 ], 
                [ -89.303512529677604, 18.792192907391961 ], 
                [ -89.223727893191409, 18.795477056945572 ], 
                [ -89.151549471155406, 18.799280219866709 ], 
                [ -89.151507065717865, 18.799282443108755 ], 
                [ -89.144943586384599, 18.799626894663056 ], 
                [ -89.144943585251369, 18.799626858721137 ], 
                [ -89.14439050404215, 18.756189475788943 ], 
                [ -89.155747416761969, 18.753114689827086 ], 
                [ -89.155747455123517, 18.753114679835967 ], 
                [ -89.154165346454448, 18.746106641850929 ], 
                [ -89.153007248102156, 18.740976781036778 ], 
                [ -89.152427008720736, 18.737544757154236 ], 
                [ -89.152120312818184, 18.73573069954756 ], 
                [ -89.151792977653372, 18.730948723239482 ], 
                [ -89.151318774013575, 18.72402117366865 ],
                [ -89.151337809024469, 18.701270784638471 ], 
                [ -89.149625915858579, 18.549610862441615 ], 
                [ -89.22572773113599, 18.549250755763801 ]
              ],
            ],
          },
        },
      });
  
      // Add a new layer to visualize the polygon.
      map.addLayer({
        id: "maine",
        type: "fill",
        source: "maine", // reference the data source
        layout: {},
        paint: {
          "fill-color": "#0080ff", // blue color fill
          "fill-opacity": 0.5,
        },
      });
      // Add a black outline around the polygon.
       map.addLayer({
        id: "outline",
        type: "line",
        source: "maine",
        layout: {},
        paint: {
          "line-color": "#000",
          "line-width": 3,
        }
      })
      map.addControl(new mapboxgl.NavigationControl());
      map.addControl(new mapboxgl.FullscreenControl());
    });
  }) 

  return (
    <>
    <head><link
    href='https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css'
    rel='stylesheet'/></head>
    <div id="map" style={{height:"100vh", width:"100%"}}>
    </div>
    </>
  );
};



/* import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 18.609742,
    longitude: -89.3112548,
    width: "100vw",
    height: "91vh",
    zoom: 9,
    pitch: 50,
  });
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiZWxpemFiZXRoZ2giLCJhIjoiY2twOHBkaHNvMDN1MjJvcDR6aGhpM2h2ayJ9.U3EK7VZc-urMFKxXy83cpQ"
        mapStyle="mapbox://styles/elizabethgh/ckp8r5cxj28lq18p5ud5gwhy4"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      ></ReactMapGL>
    </div>
  );
}
 */