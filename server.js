// const express = require('express')
// const app = express()
// const PORT = process.env.PORT || 8000
// const cors = require('cors')

// app.use(cors())
// // app.use(express.static('public'));
// // app.use(express.json())

// let famousBuildings  = {
//     "Empire State Building" : {
//         "city": 'New York City',
//         "country": "USA",
//         "built": 1930
//     },
//     "Taj Mahal": {
//         "city": "Agra",
//         "country": "India",
//         "built": 1632-53
//     },
//     "Eiffel Tower": {
//         "city": "Paris",
//         "country": "France",
//         "built": 1889
//     },
//     "Unknown": {
//         "city": "Unknown",
//         "country": "Unknown",
//         "built": "Unknown"
//     }
// }


// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/index.html')
// })

// app.get('/api/:building', (request, response) => {
//     const buildingDeet = request.params.building.toLowerCase()
//     console.log(buildingDeet)
//     if(famousBuildings[buildingDeet]){
//         response.json(famousBuildings[buildingDeet])
//     }else{
//         response.json(famousBuildings['unknown'])
//     }
//     // response.json(famousBuildings)
// })

// app.listen( PORT, () => {
//     console.log(`port ${PORT} is working!!!!`)
// })

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {
    '21 savage': {
        'age': 28,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthdate': '22 October 1992', 
        'birthLocation': 'London, England',
        'origin': 'Atlanta, Georgia',
        'genre': 'hip hop, trap, rap, horrorcore',
        'occupation': 'rapper, songwriter, record producer',
        'yearsActive': '2013-present',
        'labels': 'Epic, Slaughter Gang',
        'children': 3
    },
    'chance the rapper':{
        'age': 28,
        'birthName': 'Chancelor Jonathan Bennett',
        'birthdate': 'April 16, 1993', 
        'birthLocation': 'London, England',
        'origin': 'Chicago, Illinois',
        'genre': 'hip hop, alternative hip hop, r & b',
        'occupation': 'rapper, singer, song writer, record producer, activist, actor, philanthropist',
        'yearsActive': '2011-present',
        'labels': 'none',
        'children': 0
    },
    'unknown':{
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown', 
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})