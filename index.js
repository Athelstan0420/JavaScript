
// Texto:

function alterarHTML() {

    document.getElementById("texto").innerHTML="Pronto! Agora  você alterou o texto!" //Você também pode colocar isso dentro de uma variavel = VAR;
    

}

//------------------------------------------------------------------------------------------------------------

// Luz:

function ascender() {

    document.getElementById("imagem").src = 'pic_bulbon.gif'

}
function apagar() {

    document.getElementById("imagem").src = 'pic_bulboff.gif'


}

//-----------------------------------------------------------------------------------------------------------------

//aumentar a fonte:

function aumentarfonte() {

    document.getElementById("texto1").style.fontSize = '60px'

    document.getElementById("texto1").style.color = "red"
    
}

//Diminuir:

function voltarfonte() {

    document.getElementById("texto1").style.fontSize = "20px"

    document.getElementById("texto1").style.color = "black"

}

//-----------------------------------------------------------------------------------------------------------------


//mostrar imagem:

function mostrarimg() {

    document.getElementById("imagem1").style.display = "block"

}