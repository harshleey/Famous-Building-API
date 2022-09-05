const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

let famousBuildings  = {
    "Empire State Building" : {
        "city": 'New York City',
        "country": "USA",
        "built": 1930
    },
    "Taj Mahal": {
        "city": "Agra",
        "country": "India",
        "built": 1632-53
    },
    "Eiffel Tower": {
        "city": "Paris",
        "country": "France",
        "built": 1889
    },
    "Unknown": {
        "city": "Unknown",
        "country": "Unknown",
        "built": "Unknown"
    }
}


app.get('/', (request, response) => {
    response.render('public')
})

app.get('/api/:building', (request, response) => {
    const buildingDeet = request.params.building.toLowerCase()
    if(famousBuildings[buildingDeet]){
        response.json(famousBuildings[buildingDeet])
    }else{
        response.json(famousBuildings['unknown'])
    }
    // response.json(famousBuildings)
})

app.listen( PORT, () => {
    console.log(`port ${PORT} is working!!!!`)
})