let url = "https://www.datos.gov.co/resource/ccvq-rp9s.json"
function buscar(){
    //obtener valor input
    let departamento = document.getElementById("searchInput").value

    //hago consulta
    var urlResutltado = url + +"?departamento="+departamento
    console.log(urlResutltado)
    fetch(urlResutltado)
          .then(data => {return data.json()})
          .then(res => procesarRespuesta(res))

}

function procesarRespuesta(res){
    console.log(res)
}