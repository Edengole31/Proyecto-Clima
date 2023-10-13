let api_key='51a71240bdc0392a1fe900e5aad964a8'
let diferenciaKelvin= 273.15
//let ciudad = 'tucuman'
let url='https://api.openweathermap.org/data/2.5/weather?q='
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

document.getElementById('botonBusqueda').addEventListener('click',()=>{
let ciudad = document.getElementById('ciudadEntrada').value
if(ciudad){
    fetchDatosClima(ciudad)
}
})

function fetchDatosClima(ciudad){
    fetch(`${url}${ciudad}&appid=${api_key}`) 
    .then(response => response.json())
    .then(response => mostrarDatosClima(response))

}


function mostrarDatosClima(response){
    console.log(response)
    const divDatosClima= document.getElementById('datosClima')
    divDatosClima.innerHTML=''
    const ciudadNombre=response.name
    const temperatura = response.main.temp
    const descripcion = response.weather[0].description
    const icono= response.weather[0].icon

    const ciudadTitulo=document.createElement('h2')
    ciudadTitulo.textContent=ciudadNombre;
    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent=`La temperatura es  ${Math.floor(temperatura - diferenciaKelvin)} °C`
    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent=`La descrición de clima es : ${descripcion}`
    const iconoInfo = document.createElement('img')
   iconoInfo.src=`https://openweathermap.org/img/wn/${icono}.png`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(iconoInfo)
}