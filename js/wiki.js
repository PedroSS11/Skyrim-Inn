const linkCity = document.getElementsByClassName('linkLocations')
const cidades = [{id:1, cidade:'dawnstar', url:'index.html'}]

// TIPO ISSOOOOO
const dawnstar = document.getElementById('dawnstar')
const abreDawnstar = () => {
    let site = cidades[0].url
    window.open(site)
}
dawnstar.addEventListener("click", abreDawnstar)








//console.log(linkCity)

// for(i in linkCity) {

//     let cidades = {}
//     let num = 1

//     if(linkCity[i].id) {

//         console.log(linkCity[i].id)

//         cidades.push(linkCity[i].id + num)

//         console.log(cidades)


//     } 





// }




// const abreJanela = () => {
//     let janela = ''
//     if (dawnstar.id === 'dawnstar') {
//        janela = 'index.html'
//        window.open(janela) 
//     } else {
//         alert("nao encontrado")
//     }
    
// }

//dawnstar.addEventListener("click", abreJanela)