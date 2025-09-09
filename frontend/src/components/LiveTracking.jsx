import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const defaultCenter = {
  lat: 28.6139,  // Default to New Delhi
  lng: 77.2090,
};

const LiveTracking = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerRef = useRef(null);
  const [currentPosition, setCurrentPosition] = useState(defaultCenter);

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      version: 'weekly',
      libraries: ['marker'],
    });

    loader.load().then(() => {
      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center: currentPosition,
        zoom: 15,
        mapId: import.meta.env.VITE_GOOGLE_MAP_ID, // optional, for styled map
      });

      markerRef.current = new window.google.maps.marker.AdvancedMarkerElement({
        map: mapInstance.current,
        position: currentPosition,
        title: 'You are here',
      });
    });
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const newPos = { lat: latitude, lng: longitude };
        setCurrentPosition(newPos);

        if (mapInstance.current) {
          mapInstance.current.setCenter(newPos);
        }

        if (markerRef.current) {
          markerRef.current.position = newPos;
        }
      });
    };

    updatePosition();

    const watchId = navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords;
      const newPos = { lat: latitude, lng: longitude };
      setCurrentPosition(newPos);

      if (mapInstance.current) {
        mapInstance.current.setCenter(newPos);
      }

      if (markerRef.current) {
        markerRef.current.position = newPos;
      }
    });

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return <div style={containerStyle} ref={mapRef} />;
};

export default LiveTracking;
