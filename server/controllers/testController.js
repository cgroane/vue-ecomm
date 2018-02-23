const axios = require('axios');
const apiURL = "https://swapi.co/api/";
// const firebase = require('./../fire').firebase;

module.exports = {
    getPeople: (req, res, next) => {
        var people = axios.get(`${apiURL}people`).then(response => {
            console.log(response.data)
            return res.status(200).send(response.data)
        });
    },
    
}