const axios = require("axios").default;

const getForcast = (lat, lng, cb) => {
    const forecastApiURL = `https://api.darksky.net/forecast/473fe696d21e65026547b2d50b56014c/${lat},${lng}`
    axios.get(forecastApiURL)
        .then(response => {
            let temperature = response.data.currently.temperature
            let summary = response.data.daily.summary
            cb(null, {temperature, summary});
        })
        .catch(err => {
            cb(err)
        })
}

// getForcast("18.6452489","73.92318563785392")
module.exports = { getForcast }