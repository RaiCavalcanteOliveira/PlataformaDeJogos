var sPerguntas = [["CARAMBOLA", "FRUTA"], ["JABOTICABA", "FRUTA"],
                  ["JAMBO", "FRUTA"], ["CUPUAÇU", "FRUTA"], ["PITOMBA", "FRUTA"],
                  ["FORTALEZA", "CIDADE"], ["HOLAMBRA", "CIDADE"], ["TERESÓPOLIS", "CIDADE"],
                  ["HORTOLÂNDIA", "CIDADE"], ["CARAPICUIBA", "CIDADE"], ["ALICATE","FERRAMENTA"]  
]

//Matriz para fazer O shuffle
var iSorteados = [];
//Conta a quantidade de jogadas feitas para buscar no vetor de Sorteados
var iJogada=0;
//Armazena a palavra da vez
var sPalavraSorteada;
//Conta as letras certas
var iAcertos=0;
//Conta as letras erradas
var iErro=0;
//Guarda a letra clicada para poder desabilitá-la
var cLetraClicada="";

//Vetor con AS letras do teclado para facilitar n busca do Id
var sletras=['A', 'B', 'C','D', 'E','F', 'G', 'H', 'I', 'J','K', 'L','M','N','O','P','Q','R', 'S','T', 'U', 'V', 'W','X', 'Y', 'Z','-']

//VARIAVEIS QUE CONTAM ACERTOS E ERROS
var certos =0, erradas =0

////////////////

//funçao que cria os espaços das letras
function criaLetras(palavra){
    //busca form
    var formula  = document.getElementById('tenta')
    var j=0
    console.log('Palavra: ' + palavra)

    //for do tamnho da palavra 
    for(var i=0; i< palavra.length; i++){
        ///se for diferente de espaço (32)
        if(palavra[i].charCodeAt(0)!= 32){
            //тог do tamanho da palavra
        //Cria um INPUT
        var letra = document.createElement("input");
         //Define os atributos para o INPUT
        //Tipo
        letra.setAttribute("type","text");
         //Name
        letra.setAttribute("name","tenta"+j);
        //id
        letra.setAttribute("id","tenta"+j);
        //tamanho max
        letra.setAttribute("maxlength",1);
        //tamanho de exibição
        letra.setAttribute("size",1);
        //desabilita a edição
        letra.setAttribute("disabled",true);
        //add o input no form
        formula.appendChild(letra);
        j++;
        }else{
            //quando for espaço, ele separa 20px a esquerda
            ///e 1px a direita do input anterior
            document.getElementById('tenta'+(j-1)).style.margin ="0px 20px 0px 1px"
        }

    }
    //remove tods os espaços e acentos 
    sPalavraSorteada = limpa(palavra)
    //exibe o tema e a quantidade de letras 
    document.getElementById('tema').innerHTML = sPerguntas[iSorteados [iJogada]][1]+ " - " + sPalavraSorteada.length+ " Letras"
}
////

///funçao que cinfere a letra clicada 
function sorteia(){
    //insere os numeros dentro do vetor confrome a qauntidade de itens na matriz 
    for(var m=0; m< sPerguntas.length; m++){
        iSorteados.push(m)
    }
    //faz a mistura
    iSorteados = shuffArray(iSorteados)
    //chama a funçao que separa as letras das palavras 
    criaLetras(sPerguntas[iSorteados[iJogada]][0])
}

///funçao que confere a letra clicada 
function Confere(letra){
    //ATRIBUI A LETRA A UMA VARIAVEL GLOBAL 
    cLetraClicada = letra
    //cria variavel que definira se a letra foi encontrada na palavra 
    var achou =false
    //percorre as letras da palavra sorteada 
    for(var i=0; i< sPalavraSorteada.length;i++){
        //se a letra clicada, existir na palavra 
        if(letra == sPalavraSorteada.charAt(i)){
            //insere a exibiçao da letra
            document.getElementById('tenta'+i).value = letra
            //conta acertos
            iAcertos++
            //exibe acertos
            document.getElementById('acerto').innerHTML = "Acertos: "+ iAcertos
            //indica que achou a letra na palavra
            achou = true 
        }
    }

    //se nao achou a letra 
    if(achou==false){
        //conta erro
        iErro++
        document.getElementById('imagem').src = "imagens/forca"+(iErro+1)+".png"
    }
}
///

//funçao que verifia se o jogo acabou
function acabou(){
    //cria variavel que indicara se o jogo acabou 
    var acabou = false
    //se a qntd de acertos for igual ao tamnho da palavra 
    if(iAcertos == sPalavraSorteada.length){
        //o jogo acabou
        acabou= true
        //exibe mensagem 
        alert('Parabéns, você ganhou!')
        certos++

        //se a qntd d eltras erradas chegou a 6 
    }else if(iErro ==6){
        //o jogo acabou
        acabou=true
        alert('Enforcado! :(')
        erradas++
    } 

    //desabilita a letra clicada 
    document.getElementById(cLetraClicada).disabled=true;
    //se o jogo acabou 
    if(acabou){
        //remove todos os inputs 
        for(var i=0; i< sPalavraSorteada.length;i++){
            document.getElementById('tenta'+i).remove()
        }
        //incremento  jogadas para ir para proxima palavra
        iJogada++
        //exibe a qntd de palavras jogadas cERTAS e ERRADAS
        document.getElementById('palcerta').innerHTML = "Palavras certas: "+  certos+"<br> Palavras Erradas: "+ erradas

        //chama funçao que criará novo jogo umnovo jogo
        criaLetras(sPerguntas[iSorteados[iJogada]][0])
        //inicializa variavies 
        iAcertos=0;
        iErro=0
        document.getElementById('acerto').innerHTML= "Acertos: "+ iAcertos
        document.getElementById('imagem').src = "imagens/forca"+(iErro+1)+".png"

        //habilita todas as letras 
        for(var i=0; i< sletras.length;i++){
            document.getElementById(sletras[i]).disabled=false
        }
    }
}

//funçao que mistura os valores do Arrey
function shuffArray(d){
    for(var c = d.length -1; c>0;c--){
        var b = Math.floor(Math.random()*(c+1))
        var a =d[c]
        d[c] = d[b]
        d[b] = a
    }
    return d
}

//função para tirar espaços e acentos 
function limpa(item){
    var resultado = item

    //retira os espaços
    resultado = replaceAll(resultado, " ","")

    //remove acentos e Ç
    //o metodo normalize, serve para converter uma string 
    //



    resultado = resultado.normalize('NFD').replace(/[\u0300-\u036f]/g,"")
    return resultado
}

//funçao para substituir  todas as ocorrencias 
function replaceAll(str,de,para){
    //procurar ocorrencia
    var pos = str.indexOf(de)
    //se acou
    while(pos > -1){
        //substitui
        str = str.replace (de,para)
        //e procura novamente a ocorrencia 
        pos = str.indexOf(de)
    }
    //retorna a string sem acentos e espaços
    return (str)
}

function shake(e, oncomplete, distancia, time){
    var time = 500
    var distancia = 5

    var start = (new Date()).getTime()
    animate()

    function animate(){
        var now  = (new Date()).getTime()

        var elapsed  = now  - start

        var fraction = elapsed /time
        if(fraction<1){
            var x = distancia* Math.sin(fraction*4 * Math.PI)
            e.style.left - x +'px'
            setTimeout(animate, Math.min(25,time - elapsed) )
        }else{
            if(oncomplete) oncomplete(e)
        }

    }

}
function shakeme(event1){
    shake(event1.target)
}