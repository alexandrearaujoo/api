const api = require('./api')
const express = require('express')
const server = express()
const key = 'f6b550d0a14cf4580377c1af762e7418'
server.use(express.json())
server.listen(3001)


server.get('/flights', async (req, res) => {
    try {
        const {data} = await api.get(`flights?access_key=${key}&limit=10`)
        const departure = data.data.map(data => {
            const newDeparture = {
                airport: data.airport,
                timezone: data.timezone,
            }
            return newDeparture
        })
        const arrival = data.data.map(data => {
            const newArrival = {
                airport: data.airport,
                timezone: data.timezone,
            }
            return newArrival
        })
        const airline = data.data.map(data => {
            const newAirline = {
                name: data.name
            }
            return newAirline
        })

        return res.send({departure: departure, arrival: arrival, airline: airline})
    }
    catch (error){
        res.send({error: error.message})
    }
})

server.get('/airports', async (req, res) => {
    try {
        const {data} = await api.get(`airports?access_key=${key}&limit=10`)
        const informations = data.data.map(infos => {
            const obj = {
                id: infos.id,
                airport_id: infos.airport_id,
                airport_name: infos.airport_name,
                country_name: infos.country_name,
                timezone: infos.timezone
            }
            return obj
        })
        
        return res.send({data: informations})
    }
    catch (error){
        res.send({error: error.message})
    }
})
server.get('/airlines', async (req, res) => {
    try {
        const {data} = await api.get(`airlines?access_key=${key}&limit=10`)
        const informations = data.data.map((infos) => {
            const obj = {
                id: infos.id,
                airline_name: infos.airline_name,
                country_name: infos.country_name,
                status: infos.status,
                date_founded: infos.date_founded
            }
            return obj
        })
        
        return res.send({data: informations})
    }
    catch (error){
        res.send({error: error.message})
    }
})

server.get('/airplanes', async (req, res) => {
    try {
        const {data} = await api.get(`airplanes?access_key=${key}&limit=10`)
        const informations = data.data.map((infos) => {
            const obj = {
                id: infos.id,
                plane_owner: infos.plane_owner,
                production_line: infos.production_line,
                plane_status: infos.plane_status,
                plane_age: infos.plane_age
            }

            return obj
        })
        
        return res.send({data: informations})
    }
    catch (error){
        res.send({error: error.message})
    }
})

server.get('/aircraft_types', async (req, res) => {
    try{
        const {data} = await api.get(`aircraft_types?access_key=${key}&limit=10`)
        const informations = data.data.map(infos => {
            const obj = {
                aircraft_name: infos.aircraft_name
            }
            return obj
        })

        return res.send({data: informations})
    }
    catch(error) {
        res.send({error: error.message})
    }
})

server.get('/taxes', async (req, res) => {
    try {
        const {data} = await api.get(`taxes?access_key=${key}&limit=10`)
        const taxName = data.data.map(data => {
            const obj = {
                tax_name: data.tax_name
            }
            return obj
        })
        return res.send({data: taxName})
    }
    catch(error) {
        res.send({error: error.message})
    }
})

server.get('/cities', async (req, res) => {
    try {
        const {data} = await api.get(`cities?accsess_key=${key}&limiti=10`)
        const informations = data.data.map(infos => {
            const obj = {
                city_name: infos.city_name,
                latitude: infos.latitude,
                longitude: infos.longitude,
                timezone: infos.timezone
            }

            return obj
        })

        return res.send({data: informations})
    }
    catch(error) {
        res.send({error: error.message})
    }
})

server.get('/countries', async (req, res) => {
    try {
        const {data} = await api.get(`countries?access_key=${key}&limit=10`)
        const informations = data.data.map(infos => {
            const obj = {
                country_name: infos.country_name,
                population: infos.population,
                capital: infos.capital,
                continent: infos.continent,
                currency_name: infos.currency_name,
            }
            return obj
        })
        return res.send({data: informations})
    }
    catch (error) {
        res.send({error: error.message})
    }
})

server.get('/airlines', async (req, res) => {
    try {
        const {data} = await api.get(`airlines?access_key=${key}&limit=10`)
        const airlines = data.data.map(airline => {
            const newAirline = {
                airline_name: airline.airline_name,
                country_name: airline.country_name,
                date_founded: airline.date_founded,
                status: airline.status
            }
            return newAirline
        })
        return res.send({data: airlines})
    }
    catch(error) {
        res.send({error: error.message})
    }
})