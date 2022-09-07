// Controla a exibição das pages das cidades (escolhe qual html abrir)
const cidadesPages = () => {
    //Dawnstar
    const dawnstarTag = document.getElementById('dawnstar')
    const abreDawsntar = () => {
        window.open('dawnstar.html')
    }
    dawnstarTag.addEventListener("click", abreDawsntar)

    //Falkeath
    const falkreathTag = document.getElementById('falkreath')
    const abreFalkreath = () => {
        window.open('falkeath.html')
    }
    falkreathTag.addEventListener("click", abreFalkreath)

    //Markarth
    const markarthTag = document.getElementById('markarth')
    const abreMarkarth = () => {
        window.open('markarth.html')
    }
    markarthTag.addEventListener("click", abreMarkarth)

    //Morthal
    const morthalTag = document.getElementById('morthal')
    const abreMorthal = () => {
        window.open('morthal.html')
    }
    morthalTag.addEventListener("click", abreMorthal)

    //Riften
    const riftenTag = document.getElementById('riften')
    const abreRiften = () => {
        window.open('riften.html')
    }
    riftenTag.addEventListener("click", abreRiften)

    //Solitude
    const solitudeTag = document.getElementById('solitude')
    const abreSolitude = () => {
        window.open('solitude.html')
    }
    solitudeTag.addEventListener("click", abreSolitude)

    //Whiterun
    const whiterunTag = document.getElementById('whiterun')
    const abreWhiterun = () => {
        window.open('whiterun.html')
    }
    whiterunTag.addEventListener("click", abreWhiterun)

    //Windhelm
    const windhelmTag = document.getElementById('windhelm')
    const abreWindhelm = () => {
        window.open('windhelm.html')
    }
    windhelmTag.addEventListener("click", abreWindhelm)

    //Winterhold
    const winterholdTag = document.getElementById('winterhold')
    const abreWinterhold = () => {
        window.open('winterhold.html')
    }
    winterholdTag.addEventListener("click", abreWinterhold)
}

cidadesPages()

// ====================================== 





