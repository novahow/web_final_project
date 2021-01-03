import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9tYW50aWNkdWtlIiwiYSI6ImNramg3NWQzdjZnMjUycXJ3NGZ0MGZzMzcifQ.q5BvzHDORxEQCIJ5EZondQ';

class Application extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      lng: 121.5416,
      lat: 25.0174,
      zoom: 13
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <div>
        <div className='sidebarStyle'>
          <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
        </div>
        <div ref={el => this.mapContainer = el} className='mapContainer' />
      </div>
    )
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));
