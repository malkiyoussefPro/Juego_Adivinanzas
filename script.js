const questions = [
{
    question: "que pais tiene mas poblacion?",
    respuestaCorrecta: "La china",
    respuestaIncorrecta: "La India",
},
{
    question: "El primer astronauta a attrizar la luna ?",
    respuestaCorrecta: "neil amstrong",
    respuestaIncorrecta: "mati amstrong",
},
    
];

let indexQuestionActual  = 0;
let respostesCorrectes = 0;
let respostesinCorrectes = 0;

const questioproposada = document.getElementById("questioproposada");
const btnEsquerre = document.getElementById("btnEsquerre");
const btnDret = document.getElementById("btnDret");
const missatge = document.getElementById("missatge");
const  btnReiniciar = document.getElementById("btnReiniciar");

function mezclaRespuesta(correcta, incorrecta){

    const respuesta = [correcta, incorrecta];
    respuesta.sort((() => Math.random() - 0.5));
    return respuesta;
}

function mostrarQuestion(){

    if(indexQuestionActual< questions.length){
        const questionActual = questions[indexQuestionActual];
        questioproposada.textContent = questionActual.question;

      
        const [mezclaCorrecta, mezclainCorrecta] = mezclaRespuesta(questionActual.respuestaCorrecta, questionActual.respuestaIncorrecta);

        btnEsquerre.textContent = mezclaCorrecta;
        btnDret.textContent = mezclainCorrecta;
    }else{
        // el juego ha acabado

        if(respostesCorrectes === question.length){

            missatge.textContent = "has ganado !! has respondido a las preguntas correctamente";
        }else{
            missatge.textContent =`Juego acabado . respuestas correctas : ${respostesCorrectes},
                                    Respuestas incorrectas: ${respostesinCorrectes}´;
        
      }

        btnEsquerre.style.display = "none";
        btnDret.style.display = "none";
        btnReiniciar.style.display = "none";
      
    }

    
}

function comprovaRespuesta(respuestaselecionada){
    const questionActual = question[indexQuestionActual];
    if(respuestaselecionada === questionActual.respostesCorrectes){
        respostesCorrectes++;
    }else{
        respostesinCorrectes++;
    }
    indexQuestionActual++;

    mostrarQuestion();

}

btnEsquerre.addEventListener("click", () => comprovaRespuesta (btnEsquerre.textContent));
btnDret.addEventListener("click", () => comprovaRespuesta (btnDret.textContent));
btnReiniciar.addEventListener("click", () => {
    indexQuestionActual = 0;
    respostesCorrectes = 0;
    respostesinCorrectes = 0;
    missatge.textContent = "";
    btnEsquerre.style.display = "inline-block";
    btnDret.style.display = "inline-block";
    btnReiniciar.style.display = "none";
    
    mostrarQuestion();


});

//Comenzar el juego 

mostrarQuestion();


