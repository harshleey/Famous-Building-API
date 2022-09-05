const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8000

app.use(cors())


let famousBuildings  = {
    "empire state building" : {
        "name": "Empire State Building",
        "city": 'New York City',
        "country": "USA",
        "built": 1930
    },
    "taj mahal": {
        "name": "Taj Mahal",
        "city": "Agra",
        "country": "India",
        "built": 1632-53
    },
    "eiffel tower": {
        "name": "Eiffel Tower",
        "city": "Paris",
        "country": "France",
        "built": 1889
    },
    "unknown": {
        "name": "Unknown",
        "city": "Unknown",
        "country": "Unknown",
        "built": "Unknown"
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const buildingName = request.params.name.toLowerCase()
    if(famousBuildings[buildingName]){
        response.json(famousBuildings[buildingName])
    }else{
        response.json(famousBuildings['unknown'])
    }
})

app.listen( PORT, () => {
    console.log(`port ${PORT} is working!!!!`)
})