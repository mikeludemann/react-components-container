import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Google_Maps extends Component {

	constructor(props) {

		super(props);

  }
  
  googleMaps() {

    const API_KEY = this.props.key;
    const CALLBACK_NAME = this.props.callbackname || 'gmapsCallback';

    let initialized = !!window.google;
    let resolveInitPromise;
    let rejectInitPromise;

    const initPromise = new Promise((resolve, reject) => {
      resolveInitPromise = resolve;
      rejectInitPromise = reject;
    });

    if (initialized) return initPromise;

    initialized = true;

    window[CALLBACK_NAME] = () => resolveInitPromise(window.google);

    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=${CALLBACK_NAME}`;
    script.onerror = rejectInitPromise;
    document.querySelector('head').appendChild(script);

    return initPromise;
  
  }

	componentDidMount() {

		try {

			const google = this.googleMaps();
			const geocoder = new google.maps.Geocoder();
			const map = new google.maps.Map(this.$el);

			geocoder.geocode({ address: 'Germany' }, (results, status) => {

				if (status !== 'OK' || !results[0]) {
					throw new Error(status);
        }
        
				map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
        
      });
      
			const markerClickHandler = (marker) => {

				map.setZoom(13);
        map.setCenter(marker.getPosition());
        
      };
      
			const markers = this.props.locations
				.map((location) => {

					const marker = new google.maps.Marker({ ...location, map });
					marker.addListener('click', () => markerClickHandler(marker));
          return marker;
          
        });
        
			new MarkerClusterer(map, markers, {
				imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
			});

		} catch (error) {

			console.error(error);

		}

	}

	render() {
		return (
			<div class="maps"></div>
		)
	}
}

Google_Maps.propTypes = {
	locations: PropTypes.array.isRequired,
	key: PropTypes.string.isRequired,
	callbackname: PropTypes.string
}
