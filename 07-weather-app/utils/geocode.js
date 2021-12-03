const axios = require("axios").default;

const getCoordinates = (address, cb) => {
  const mapboxApiURL = `https://us1.locationiq.com/v1/search.php?key=pk.8194a80fd1a2983261c4e10837d8a228&q=${address}&format=json`;
  axios
    .get(mapboxApiURL)
    .then((response) => {
      const lat = response.data[0].lat;
      const lon = response.data[0].lon;
      const placeName = response.data[0].display_name;
      console.log(lat, lon, placeName);
      cb(null, {
        latitude: lat,
        longitude: lon,
        placeName,
      });
    })
    .catch((err) => {
      cb(err);
    });
};

// getCoordinates("delhi", (err, {latitude, longitude, placeName}) => {
//     if(err)
//     console.log(err);
//     console.log(latitude)
// });
module.exports = {
  getCoordinates,
};
