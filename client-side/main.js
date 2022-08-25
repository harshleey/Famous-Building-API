document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const building = document.querySelector('input').value
    try{
        const response = await fetch(`https://famous-buildings-apis.herokuapp.com/api/${building}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.city
    }catch(error){
        console.log(error)
    }
}