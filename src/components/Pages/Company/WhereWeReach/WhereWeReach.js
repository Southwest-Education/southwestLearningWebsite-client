import React, { Component } from 'react';
import './style.css';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import axios from 'axios';
import { faMapMarkerAlt } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class WhereWeReach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: '100vw',
        height: '70vh',
        latitude: 39.8283,
        longitude: -98.5795,
        zoom: 3.75,
      },
      data: [],
    };
  }

  componentDidMount() {
    axios.get('/api/map').then((res) => {
      const data = res.data;
      this.setState({ data: data });
    });
  }

  render() {
    const { viewport, data } = this.state;
 
    return (
      <div>
        <ReactMapGL
          width={viewport.width}
          height={viewport.height}
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          zoom={viewport.zoom}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          // mapStyle='mapbox://styles/shawn220a/ckk73xwfn010117msfolvmiwj'
          onViewportChange={(viewport) => {
            this.setState({ viewport });
          }}>
          <NavigationControl className='navControlStyle' showCompass={true} />
          {data.map((data) =>
            data.geometry.map((coord) => {
              return (
                <Marker
                  key={coord._id}
                  latitude={coord.lat}
                  longitude={coord.lon}
                  offsetLeft={-24.33}
                  offsetTop={-26.5}>
                  <FontAwesomeIcon
                    className='markerIcon'
                    size='2x'
                    icon={faMapMarkerAlt}
                  />
                </Marker>
              );
            }),
          )}
        </ReactMapGL>
      </div>
    );
  }
}
