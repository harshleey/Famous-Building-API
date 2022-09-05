document.querySelector('button').addEventListener('click', apiRequest)

console.log('yes')

async function apiRequest(){
    const building = document.querySelector('input').value
    try{
        const response = await fetch(`https://famous-building-api.onrender.com/api/${building}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.city
    }catch(error){
        console.log(error)
    }
}



