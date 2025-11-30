var leonardo = window.document.getElementById ("leonardo")
var samantha = window.document.getAnimations ("samantha")
var bruna = window.document.getElementById ("bruna")
var setaEsquerda = window.document.getElementById ("seta-esquerda")
var setaDireita = window.document.getElementById ("seta-direita")

function RolarParadireita ()
{
leonardo.style = "display:none"
bruna.style = "display:flex"
setaDireita.style = "display:none"
setaEsquerda.style = "display:flex"
}
function RolarParaEsquerda ()
{
leonardo.style = "display:flex"
bruna.style = "display:none"
setaDireita.style = "display:flex margin 55px"
setaEsquerda.style = "display:none"
}