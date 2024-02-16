//! Cambiarlo por axios (PATRON ADAPTADOR)
const axios = require('axios');

const httpClientPlugin = {

    get: async(url) => {

        const { data } = await axios.get(url);
        return data;
        // const resp = await fetch(url); //*FETCH
        // return await resp.json();
    },
    post: async(url) => {

    },
    put: async(url) => {

    },
    delete: async(url) => {

    }


};

module.exports = {
    http: httpClientPlugin,
}