import React, { useState, useEffect } from "react";
import "./style.css";
import ReactMapGL, { Marker, NavigationControl, Popup } from "react-map-gl";
import axios from "axios";
import { faMapMarkerAlt } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const WhereWeReach = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "65vh",
    latitude: 39.8283,
    longitude: -98.5795,
    zoom: 3.75,
  });

  const [mapData, getMapData] = useState([]);

  const [selectedBuilding, setSelectedBuilding] = useState(null);

  useEffect(() => {
    getAllMapData();
  }, []);

  const getAllMapData = () => {
    axios.get("/api/map").then((res) => {
      const data = res.data;
      getMapData(data);
    });
  };

  return (
    <div className="container">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {" "}
        <NavigationControl className="navControlStyle" />
        {mapData.map((data) =>
          data.geometry.map((coord) => {
            return (
              <Marker
                key={coord._id}
                latitude={coord.lat}
                longitude={coord.lon}
                offsetLeft={-24.33}
                offsetTop={-26.5}
              >
                <FontAwesomeIcon
                  className="markerIcon"
                  size="2x"
                  icon={faMapMarkerAlt}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedBuilding(data);
                  }}
                />
              </Marker>
            );
          })
        )}
        {selectedBuilding ? (
          <Popup
            latitude={selectedBuilding.geometry[0].lat}
            longitude={selectedBuilding.geometry[0].lon}
            onClose={() => {
              setSelectedBuilding(null);
            }}
          >
            <div>
              <h2>{selectedBuilding.name}</h2>
              <p>{selectedBuilding.district[0].name}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
      <hr className="whereWeReach" />
    </div>
  );
};

export default WhereWeReach;
