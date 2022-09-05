const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const cors = require('cors')

app.use(cors())
app.use(express.static('public'));
app.use(express.json())

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
    response.redirect('/public')
})

app.get('/api/:building', (request, response) => {
    const buildingDeet = request.params.building.toLowerCase()
    console.log(buildingDeet)
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