const fs = require("fs").promises;
const http = require("http");
const url = require("url");
const path = require("path");
const { getCoordinates } = require("./utils/geocode")

const requestListener = (req, res) => {
    if(req.url === "/home"){
        fs.readFile(path.join(__dirname, "public/index.html"))
            .then(contents => {
                res.write(contents)
                return res.end()
            })
            .catch(err=>console.log(err))
    } else if(req.url.includes('location')){
        const { address }  = url.parse(req.url, true).query;
        getCoordinates(address, (err, {latitude, longitude, placeName}) => {
            if(err){
                console.log(err)
                return res.end(err)
            }
            let msg = { "message" : "SUCCESS", latitude, longitude, placeName}
            res.write(JSON.stringify(msg))
            return res.end();
        })
    }else{
        return res.end("NOT FOUND")
    }
}

const server = http.createServer(requestListener)

server.listen("9090","localhost",()=>console.log("Weather App Server started at PORT : 9090"))
