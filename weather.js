const request = require('request');

const url = 'https://api.darksky.net/forecast/9c880ff6938f26256b6a68467abb8730/37.8267,-122.4233';

request({"url": url}, (err, res) => console.log(JSON.parse(res.body)))

const lat = 37.8267; const long = -122.4233;
// request.get(`https://api.darksky.net/forecast/${process.env.DARK_SKY_SECRET}/${lat},-${long}`)
