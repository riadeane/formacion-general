document.getElementById("g22-click").onclick = function() {myFunction()};

const courses = JSON.parse(courses);

function myFunction() {
    const sigla = document.getElementById("sigla").value
    fetch(`https://bc.horariomaker.com/api/v3?sigla=${sigla}&semestre=2022-1`)
    .then(response => response.json())
    .then(data => parseData(data, sigla));
}

function parseData(sigla){
    if (data["data"][sigla]["1"]["Area de FG"]){
        document.getElementById("area").innerHTML = data["data"][sigla]["1"]["Area de FG"]
    }
    else {
        document.getElementById("area").innerHTML = "Nop :("
    }
}

function inDisciplinasProhibidas(sigla){
    if (sigla.startsWith("MAT") || sigla.startsWith("EYP")){
        return true
    }
    else if (sigla.startsWith("FIM") || sigla.startsWith("FIS") || sigla.startsWith("FIZ")){
        return true
    }
    else if (sigla.startsWith("QIF") || sigla.startsWith("QIM") || sigla.startsWith("QPG")){
        return true
    }
    else if (sigla.startsWith("EAA") || sigla.startsWith("EAE")  || sigla.startsWith("EAM")){
        return true
    }
    return false
}

function isOFG(sigla){
    if (sigla in courses["OFG"]){
        return true
    }
    else if (!(sigla in courses["NO OFG"]) || !(inDisciplinasProhibidas(sigla))) {
        return false
    }
    return false
}

function isOPC(sigla){
    if (sigla in courses["Optativo de Ciencias"]){
        return true
    }
    return false
}

