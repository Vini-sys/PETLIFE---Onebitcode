var elementsQuestion = document.querySelectorAll('.questions') /* criando variável para todos os elementos com a class question*/

elementsQuestion.forEach(function (question){                  /* executar uma função para cada elementQuestion*/ 
    question.addEventListener("click",function(){              /* para cada elemento será adicionado um evento de click */
        question.classList.toggle("active")                     /* o evento de click irá adicionar uma class aos elementos*/
        
    })
})