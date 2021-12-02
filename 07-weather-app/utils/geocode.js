const axios = require("axios").default;

const getCoordinates = (address, cb) => {
    const mapboxApiURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic3luZXJneTI0MTEiLCJhIjoiY2p4NXc0cm53MDZoODQwbHFuNzdzMzV5NCJ9.DKIDo6bcG51yLXf2DmlYcQ`
    axios.get(mapboxApiURL)
        .then(response => {
            const [lat, lng] = response.data.features[0].center
            const placeName = response.data.features[0].place_name
            cb(null, {latitude : lat, longitude : lng, placeName})
        })
        .catch(err=>{
            cb(err)
        })
}

// getCoordinates("delhi");
module.exports = {
    getCoordinates
}