import React, { useRef, useEffect } from "react";
import "./Map.css";
const Map = (props) => {
  const mapRef = useRef();
  // we need to use useEffect so that when the data is loaded the ref={mapRef} is not yet executed, we need to make sure that only after the input(props.center, props.zoom) changes
  useEffect(() => {
    // create map
    const map = new window.google.maps.Map(mapRef.current, {
      center: props.center,
      zoom: props.zoom,
    });
    // create marker
    new window.google.maps.Marker({ position: props.center, map: map });
  }, [props.center, props.zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
