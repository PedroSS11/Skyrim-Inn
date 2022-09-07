// Controla a exibição das pages das cidades (escolhe qual html abrir)
const cidadesPages = () => {
    //Dawnstar
    const dawnstarTag = document.getElementById('dawnstar')
    const abreDawsntar = () => {
        window.open('dawnstar.html')
    }
    dawnstarTag.addEventListener("click", abreDawsntar)

    //Falkeath
    const falkeathTag = document.getElementById('falkeath')
    const abreFalkeath = () => {
        window.open('index.html')
    }
    falkeathTag.addEventListener("click", abreFalkeath)

    //Markarth
    const markarthTag = document.getElementById('markarth')
    const abreMarkarth = () => {
        window.open('index.html')
    }
    markarthTag.addEventListener("click", abreMarkarth)

    //Morthal
    const morthalTag = document.getElementById('morthal')
    const abreMorthal = () => {
        window.open('index.html')
    }
    morthalTag.addEventListener("click", abreMorthal)

    //Riften
    const riftenTag = document.getElementById('riften')
    const abreRiften = () => {
        window.open('index.html')
    }
    riftenTag.addEventListener("click", abreRiften)

    //Solitude
    const solitudeTag = document.getElementById('solitude')
    const abreSolitude = () => {
        window.open('index.html')
    }
    solitudeTag.addEventListener("click", abreSolitude)

    //Whiterun
    const whiterunTag = document.getElementById('whiterun')
    const abreWhiterun = () => {
        window.open('index.html')
    }
    whiterunTag.addEventListener("click", abreWhiterun)

    //Windhelm
    const windhelmTag = document.getElementById('windhelm')
    const abreWindhelm = () => {
        window.open('index.html')
    }
    windhelmTag.addEventListener("click", abreWindhelm)

    //Winterhold
    const winterholdTag = document.getElementById('winterhold')
    const abreWinterhold = () => {
        window.open('index.html')
    }
    winterholdTag.addEventListener("click", abreWinterhold)
}
cidadesPages()



