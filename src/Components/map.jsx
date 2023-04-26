import { GoogleMap, LoadScript } from '@react-google-maps/api';

function Map() {
  const mapStyles = {
    height: "600px",
    width: "70%",
    margin: "0 auto",
  };

  const defaultCenter = {
    lat: 37.23581350776856,
    lng: 14.512339499220039,
  };

  return (
    <LoadScript>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={17}
        center={defaultCenter}
      />
    </LoadScript>
  );
}
export default Map;