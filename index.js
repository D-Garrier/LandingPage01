var leonardo = document.getElementById("leonardo");
var bruna = document.getElementById("bruna");
var samantha = document.getElementById("samantha");
var setaEsquerda = document.getElementById("setaEsquerda");
var setaDireita = document.getElementById("setaDireita");

function rolarParaDireita() {
    setaDireita.style = "display: none";
    setaEsquerda.style = "display: flex; margin-top: 50%;";
    bruna.style = "display: none";
    samantha.style = "display: flex"; 
}

function rolarParaEsquerda() {
    setaDireita.style = "display: flex";
    setaEsquerda.style = "display: none";
    bruna.style = "display: flex";
    samantha.style = "display: none"; 
}