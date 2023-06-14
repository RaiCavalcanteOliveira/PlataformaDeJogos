var espaco1 = document.getElementById('espaco1');
var espaco2 = document.getElementById('espaco2');
var espaco3 = document.getElementById('espaco3');
var espaco4 = document.getElementById('espaco4');
var espaco5 = document.getElementById('espaco5');
var espaco6 = document.getElementById('espaco6');
var espaco7 = document.getElementById('espaco7');
var espaco8 = document.getElementById('espaco8');
var espaco9 = document.getElementById('espaco9');

var espaco12 = document.getElementById('espaco1').value;
var espaco22 = document.getElementById('espaco2').value;
var espaco32 = document.getElementById('espaco3').value;
var espaco42 = document.getElementById('espaco4').value;
var espaco52 = document.getElementById('espaco5').value;
var espaco62 = document.getElementById('espaco6').value;
var espaco72 = document.getElementById('espaco7').value;
var espaco82 = document.getElementById('espaco8').value;
var espaco92 = document.getElementById('espaco9').value;

var empates = 0;
var totalJogadas = 0;

var contaJogadas = 0;

// espaco1.addEventListener('input', function () {
//     const valorInput = espaco1.value;
//     console.log(valorInput)
// })

var espacos = [espaco1, espaco2, espaco3, espaco4, espaco5, espaco7, espaco8, espaco9]

espacos[0] = espaco1;
espacos[1] = espaco2;
espacos[2] = espaco3;

espacos[3] = espaco4;
espacos[4] = espaco5;
espacos[5] = espaco6;
espacos[6] = espaco7;
espacos[7] = espaco8;
espacos[8] = espaco9;

var vitoriabolinha = 0;
var vitoriax = 0;
var bolinhaa = "O player da bolinha está com: "
var xx = "O player do X está com:"

for (let x = 0; x < espacos.length; x++) {

    espacos[x].addEventListener('input', function (put) {
        var vitoriabolinhaa = document.getElementById('vitoriabolinha')
        var vitoriaxx = document.getElementById('vitoriaxx')
        var ganhou = false;
        var contaespaco = 0;
        var inputValor = [espacos[0].value, espacos[1].value, espacos[2].value, espacos[3].value, espacos[4].value, espacos[5].value, espacos[6].value, espacos[7].value, espacos[8].value]
        for (let y = 0; y < inputValor.length; y++) {
            if (espacos[x].value == "O" || espacos[x].value == "X") {
                if (inputValor[0] == "X" && inputValor[4] == "X" && inputValor[8] == "X") {
                    alert("O player do X ganhou")
                    vitoriax++;
                    ganhou = true;
                    vitoriaxx.innerHTML = "<h3>" + xx + " " + vitoriax + " pontos" + "</h3>";
                } else if (inputValor[0] == "X" && inputValor[1] == "X" && inputValor[2] == "X") {
                    alert("O player do X ganhou")
                    ganhou = true;
                    vitoriax++;
                    vitoriaxx.innerHTML = "<h3>" + xx + " " + vitoriax + " pontos" + "</h3>";;
                } else if (inputValor[0] == "X" && inputValor[3] == "X" && inputValor[6] == "X") {
                    alert("O player do X ganhou")
                    vitoriax++;
                    ganhou = true;
                    vitoriaxx.innerHTML = "<h3>" + xx + " " + vitoriax + " pontos" + "</h3>";
                } else if (inputValor[0] == "X" && inputValor[4] == "X" && inputValor[8] == "X") {
                    alert("O player do X ganhou")
                    vitoriax++;
                    ganhou = true;
                    vitoriaxx.innerHTML = "<h3>" + xx + " " + vitoriax + " pontos" + "</h3>";

                } else if (inputValor[2] == "X" && inputValor[5] == "X" && inputValor[8] == "X") {
                    alert("O player do X ganhou")
                    vitoriax++;
                    ganhou = true;
                    vitoriaxx.innerHTML = "<h3>" + xx + " " + vitoriax + " pontos" + "</h3>";
                } else if (inputValor[6] == "X" && inputValor[7] == "X" && inputValor[8] == "X") {
                    alert("O player do X ganhou")
                    vitoriax++;
                    ganhou = true;
                    vitoriaxx.innerHTML = "<h3>" + xx + " " + vitoriax + " pontos" + "</h3>";
                } else if (inputValor[1] == "X" && inputValor[4] == "X" && inputValor[7] == "X") {
                    alert("O player do X ganhou")
                    vitoriax++;
                    ganhou = true;
                    vitoriaxx.innerHTML = "<h3>" + xx + " " + vitoriax + " pontos" + "</h3>";
                } else if (inputValor[2] == "X" && inputValor[4] == "X" && inputValor[6] == "X") {
                    alert("O player do X ganhou")
                    vitoriax++;
                    ganhou = true;
                    vitoriaxx.innerHTML = "<h3>" + xx + " " + vitoriax + " pontos" + "</h3>";
                } else if (inputValor[1] == "X" && inputValor[4] == "X" && inputValor[7] == "X") {
                    alert("O player do X ganhou")
                    vitoriax++;
                    ganhou = true;
                    vitoriaxx.innerHTML = "<h3>" + xx + " " + vitoriax + " pontos" + "</h3>";
                } else if (inputValor[0] == "O" && inputValor[4] == "O" && inputValor[8] == "O") {
                    alert("O player da bolinha ganhou")
                    vitoriabolinha++;
                    ganhou = true;
                    vitoriabolinhaa.innerHTML ="<h3>" +bolinhaa + " " + vitoriabolinha + " pontos"+"</h3>";
                } else if (inputValor[0] == "O" && inputValor[1] == "O" && inputValor[2] == "O") {
                    alert("O player da bolinha ganhou")
                    vitoriabolinha++;
                    ganhou = true;
                    vitoriabolinhaa.innerHTML = "<h3>" + bolinhaa + " " + vitoriabolinha + " pontos" + "</h3>";
                } else if (inputValor[0] == "O" && inputValor[3] == "O" && inputValor[6] == "O") {
                    alert("O player da bolinha ganhou")
                    vitoriabolinha++;
                    ganhou = true;
                    vitoriabolinhaa.innerHTML = "<h3>" + bolinhaa + " " + vitoriabolinha + " pontos" + "</h3>";
                } else if (inputValor[0] == "O" && inputValor[4] == "O" && inputValor[8] == "O") {
                    alert("O player da bolinha ganhou")
                    vitoriabolinha++;
                    ganhou = true;
                    vitoriabolinhaa.innerHTML = "<h3>" + bolinhaa + " " + vitoriabolinha + " pontos" + "</h3>";
                } else if (inputValor[2] == "O" && inputValor[5] == "O" && inputValor[8] == "O") {
                    alert("O player da bolinha ganhou")
                    vitoriabolinha++;
                    ganhou = true;
                    vitoriabolinhaa.innerHTML = "<h3>" + bolinhaa + " " + vitoriabolinha + " pontos" + "</h3>";
                } else if (inputValor[6] == "O" && inputValor[7] == "O" && inputValor[8] == "O") {
                    alert("O player da bolinha ganhou")
                    vitoriabolinha++;
                    ganhou = true;
                    vitoriabolinhaa.innerHTML = "<h3>" + bolinhaa + " " + vitoriabolinha + " pontos" + "</h3>";
                } else if (inputValor[1] == "O" && inputValor[4] == "O" && inputValor[7] == "O") {
                    alert("O player da bolinha ganhou")
                    vitoriabolinha++;
                    ganhou = true;
                    vitoriabolinhaa.innerHTML = "<h3>" + bolinhaa + " " + vitoriabolinha + " pontos" + "</h3>";
                } else if (inputValor[2] == "O" && inputValor[4] == "O" && inputValor[6] == "O") {
                    alert("O player da bolinha ganhou")
                    vitoriabolinha++;
                    ganhou = true;
                    vitoriabolinhaa.innerHTML = "<h3>" + bolinhaa + " " + vitoriabolinha + " pontos" + "</h3>";
                } else if (inputValor[3] == "O" && inputValor[4] == "O" && inputValor[5] == "O") {
                    alert("O player da bolinha ganhou")
                    vitoriabolinha++;
                    ganhou = true;
                    vitoriabolinhaa.innerHTML = "<h3>" + bolinhaa + " " + vitoriabolinha + " pontos" + "</h3>";
                } else if (inputValor[3] == "X" && inputValor[4] == "X" && inputValor[5] == "X") {
                    alert("O player do X ganhou")
                    vitoriax++;
                    ganhou = true;
                    vitoriaxx.innerHTML = "<h3>" + xx + " " + vitoriax + " pontos" + "</h3>";
                }
            } else {
                espacos[x].value = "";
            }

            if (vitoriax == 5) {
                alert("Partida Encerrada")
                window.location.href = "indexvelha.html"
            }



            if (ganhou == true) {
                espacos[0].value = ""
                espacos[1].value = ""
                espacos[2].value = ""
                espacos[3].value = ""
                espacos[4].value = ""
                espacos[5].value = ""
                espacos[6].value = ""
                espacos[7].value = ""
                espacos[8].value = ""
                break;
            }

        }

        contaJogadas++;

        // Verificação de empate
        if (contaJogadas == 9 && !ganhou) {
            alert("Empate!");
            espacos[0].value = ""
            espacos[1].value = ""
            espacos[2].value = ""
            espacos[3].value = ""
            espacos[4].value = ""
            espacos[5].value = ""
            espacos[6].value = ""
            espacos[7].value = ""
            espacos[8].value = ""
            empates++;
            var empatesElement = document.getElementById('empates');
            empatesElement.innerHTML = "<h3>Número de empates: " + empates+"</h3>";
        }
    })
}








