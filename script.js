//creamos array de objetos
const questions = [
    {
        questio: "Quin pais té més població?",
        respostaCorrecta: "La Xina",
        respostaIncorrecta: "La India",
    },
    {
        questio: "El primer astronàuta a trepitjar la lluna va ser?",
        respostaCorrecta: "Neil Armstrong",
        respostaIncorrecta: "Louis Armstrong",
    },
    {
        questio: ""
    }
]; // aqui va ; ya que acaba el array
//variables necesarias
//variable  para saber en qué parte del array estamos:
let indexQuestioActual = 0;
//contadores de respuestas
let respostesCorrectes = 0;
let respostesIncorrectes = 0;

const questioProposada = document.getElementById("questioProposada");
const btnEsquerre = document.getElementById("btnEsquerre");
const btnDret = document.getElementById("btnDret");
const missatge = document.getElementById("missatge");
const btnReiniciar = document.getElementById("btnReiniciar");

function barrejaRespostes(correcta, incorrecta) { // para poner las preguntas y respuestas en los lados aleatoriamente
    const respostes = [correcta, incorrecta];
    respostes.sort(() => Math.random() - 0.5);
    return respostes;
}

function mostraQuestio() { //comprueba que estamos dentro del array de preguntas
    if(indexQuestioActual < questions.length) {
        const questioActual = questions[indexQuestioActual];
        questioProposada.textContent = questioActual.questio;//coloca la pregunta en el primer div

        const [barrejatCorrecte, barrejatIncorrecte] = barrejaRespostes( // vuelca cada elemento en los botones 
            questioActual.respostaCorrecta,
            questioActual.respostaIncorrecta
        );

        btnEsquerre.textContent = barrejatCorrecte;
        btnDret.textContent = barrejatIncorrecte;
    } else {
        //el juego ha terminado
        if(respostesCorrectes === questions.length) {
            missatge.textContent = "Has guanyat!! Has respost totes les questions correctament!";
        } else {
            missatge.textContent = `Joc acabat. Respostes correctes: ${ respostesCorrectes }, Respostes incorrectes: ${ respostesIncorrectes}`;
        }

        btnEsquerre.style.display = "none"; //ocultamos estos botones y mostramos el de reiniciar
        btnDret.style.display = "none";
        btnReiniciar.style.display = "block";
    }
}

//funcion que verifica las respuestas
function comprovaResposta (respostaSeleccionada) {

    const questioActual = questions[indexQuestioActual];

    if(respostaSeleccionada === questioActual.respostaCorrecta) {
        respostesCorrectes++;
    } else {
        respostesIncorrectes++;
    }

    indexQuestioActual++; // pasamos a la pregunta siguiente

    mostraQuestio();
}

//eventos
btnEsquerre.addEventListener("click", () => comprovaResposta(btnEsquerre.textContent));
btnDret.addEventListener("click", () => comprovaResposta(btnDret.textContent));

btnReiniciar.addEventListener("click", () =>{
    indexQuestioActual = 0;
    respostesCorrectes = 0;
    respostesIncorrectes = 0;
    missatge.textContent = "";
    btnEsquerre.style.display = "inline-block";
    btnDret.style.display = "inline-block";
    btnReiniciar.style.display = "none";

    mostraQuestio();
});

//Comenzar el juego
mostraQuestio();