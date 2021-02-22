import React, { useState } from "react";
import "./style.css";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
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

  return <div></div>;
};

export default WhereWeReach;

// export default class WhereWeReach extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       viewport: {
//
//       },
//       data: [],
//     };
//   }

//   componentDidMount() {
//     axios.get('/api/map').then((res) => {
//       const data = res.data;
//       this.setState({ data: data });
//     });
//   }

//   render() {
//     const { viewport, data } = this.state;

//     return (
//       <div className="container">
//         <ReactMapGL
//           width={viewport.width}
//           height={viewport.height}
//           latitude={viewport.latitude}
//           longitude={viewport.longitude}
//           zoom={viewport.zoom}
//           mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
//           mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
//           onViewportChange={(viewport) => {
//             this.setState({ viewport });
//           }}
//         >
//           <NavigationControl className="navControlStyle" />
//           {data.map((mapData) =>
//             mapData.geometry.map((coord) => {
//               return (
//                 <Marker
//                   key={coord._id}
//                   latitude={coord.lat}
//                   longitude={coord.lon}
//                   offsetLeft={-24.33}
//                   offsetTop={-26.5}
//                 >
//                   <FontAwesomeIcon
//                     className="markerIcon"
//                     size="2x"
//                     icon={faMapMarkerAlt}
//                   />
//                 </Marker>
//               );
//             })
//           )}
//         </ReactMapGL>
//         <hr className="whereWeReach" />
//       </div>
//     );
//   }
// }
