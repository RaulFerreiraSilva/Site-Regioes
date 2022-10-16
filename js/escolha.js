var regiao = "";

function escolher_nordeste(){
    regiao = "Nordeste"
}
function escolher_norte(regiao){
    regiao = "Norte"
}
function escolher_sul(regiao){
    regiao = "Sul"
}
function escolher_sudeste(regiao){
    regiao = "Suldeste"
}
function escolher_centro(regiao){
    regiao = "Centro_Oeste"
}
function escolher_regiao(regiao){
    document.getElementById('votacao').value = regiao;
}
