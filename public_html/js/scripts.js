var enviar = document.getElementById('enviar');

//Index.html
function showAlert() {
    if (confirm("\
                    Você estando pronto ou não, nós vamos começar xD\n\
                    Lembrando olhe sempre as anotações de todas as paginas, se possivel.")) {
        //document.open("Fases/Fase1.html");
    }
}
function index() {
    window.alert("\
                    Botão de ajuda sempre disponível, caso precise.\n\
                    Olhe sempre as anotações de todas as paginas, se possivel.");
}


// to fase 5 or high (javascript)
// console.log("sslstrip");
//window.alert("Você estando pronto ou não, nós vamos começar xD"); 


//Fase1.html   
function respostaFase1() {
    var respostaUsuario = document.getElementById('respostaUsuario').value;
    var numero = respostaUsuario;
    if (numero === "6") {
        document.getElementById('demo').style.display = 'block';
    } else {
        window.alert("Resposta Incorreta");
    }
}
function Fase1() {
    window.alert("Informe a resposta da equação. Tempo estimado de 5s.");

}

//fase2cl.html
function Fase2close() {
    window.alert("Porque não abrir o que está fechado?");
}

//Fase2Open.html
function fase3() {
    var key = document.getElementById('key').value;
    var keyF = key;
    if (keyF === "white") {
        document.getElementById('Ajuste').style.display = 'block';
    }
}
function Fase2Open() {
    window.alert("Utilize as ferramentas de desenvolvimento do navegador.");
}

//Fase3
function aviso() {
    window.alert("Você chegou perto, tente novamente, uma dica uma folha de estilo cairia bem");
}
function Fase3() {
    window.alert("Utilize as ferramentas de desenvolvimento do navegador.");
}
function novaFase() {
    var respostaUsuario = document.getElementById('respostaUsuario').value;
    var numero = respostaUsuario;
    if (numero === "6") {
        window.alert("In the next, pay attention!");
        document.getElementById('demo').style.display = 'block';
    } else if (numero === "25") {
        window.alert("Now Pay Attention!");
        document.getElementById('dem0').style.display = 'block';
    } else {
        window.alert("No no no, please look more.");
        document.getElementById('d3mo').style.display = 'block';
    }
}

function proximaFase() {
    var respostaUsuario = document.getElementById('key').value;
    var resposta = respostaUsuario;
    if (resposta === "#ffffff") {
        document.getElementById('demo').style.display = 'block';
    } else {
        window.alert("Please, insert a valid key");
    }
}

//Fase4
function ajuda() {
    window.alert("Preste atenção, não somente em min <3");
}

function aha() {
    var respostaUsuario = document.getElementById('respostaUsuario').value;
    var resposta = respostaUsuario;
    var erro = 0;

    if (resposta === "") {
        document.getElementById('demo').style.display = 'block';
    }
}