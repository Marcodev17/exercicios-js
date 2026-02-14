function adicionar() {
const num = document.getElementById("numero")
const anali = document.getElementById("sel")

const resultado = document.getElementById("res")

const valores = []

if(isNumero(num.value) && !inLista(num.value)){
window.alert('tudo ook')

}else{
    window.alert('valor invalido ou ja encontrado na lista.')
}


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }

}
function inLista(n,l){
if(l.indexOf(Number(n)) != -1){

    return true
}else{
    return false
}

}

}