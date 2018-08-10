
/* js1 */

function ajuda1() {
    window.alert("\
                    1) Prohibited to use development tools in this exercise. \n\
                    2) Trim / prune / cut in English. \n\
                    3) Cutting method");
    console.log(".trim()");
}


function respostaFase1() {
    var respostaUsuario = document.getElementById('respostaUsuario').value;
    var numero = respostaUsuario;
    var respostaCorreta = ".trim()";
    if (numero === respostaCorreta) {
        document.getElementById('demo').style.display = 'block';
    } else {
        window.alert("Incorrect Answer!");
    }
}


function ajuda2() {
    window.alert("\
                  1) Prohibited to use development tools in this exercise. \n\
                  2) If capital letters doesn't works, try the reverse :P \n\
                  3) Note, I'm sensitive");
    console.log(".trim()");
}

function respostaFase2() {
    var respostaUsuario = document.getElementById('respostaUsuario').value;
    var numero = respostaUsuario;
    var respostaCorreta = ".ToLowerCase()";
    if (numero === respostaCorreta) {
        document.getElementById('demo').style.display = 'block';
    } else {
        window.alert("Incorrect Answer!");
    }
}


function ajuda3() {
    window.alert("\
                  1) Prohibited to use development tools in this exercise. \n\
                  2) Very used.  \n\
                  3) Picking up 'something' from the page");
    console.log(".trim()");
}

function respostaFase3() {
    var respostaUsuario = document.getElementById('respostaUsuario').value;
    var numero = respostaUsuario;
    var respostaCorreta = "document.getElementById()";
    if (numero === respostaCorreta) {
        document.getElementById('demo').style.display = 'block';
    } else {
        window.alert("Incorrect Answer!");
    }
}


function ajuda4() {
    window.alert("\
                  1) Make me a good system. \n\
                  2) Get out over here.  \n\
                  3) Get rid of the bad\n\
                  4) See this URL");
}

function respostaFase4() {
    var respostaUsuario = document.getElementById('respostaUsuario').value;
    var numero = respostaUsuario;
    var respostaCorreta = "goodsystem";
    if (numero === respostaCorreta) {
        document.getElementById('demo').style.display = 'block';
    } else {
        window.alert("Incorrect Answer!");
    }
}