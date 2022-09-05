document.querySelector('button').addEventListener('click', apiRequest)


async function apiRequest(){
    const building = document.querySelector('input').value
    // console.log(building)
    try{
        const response = await fetch(`https://famous-building-api.onrender.com/api/${building}`)
        const data = await response.json()

        // console.log(data)
        document.querySelector('h2').textContent = data.city
    }catch(error){
        console.log(error)
    }
}



