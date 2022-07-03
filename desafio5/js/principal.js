    var diaSemana = document.querySelectorAll('#sexta');

    for (i = 0; i < diaSemana.length; i++) {
        let pratoDoDia = diaSemana[i];
        let salada = pratoDoDia.querySelector(".salada").textContent
        let principal = pratoDoDia.querySelector(".principal").textContent;
        let acompanhamento = pratoDoDia.querySelector(".acompanhamento").textContent;
        console.log(salada)
        console.log(principal);
        console.log(acompanhamento);
    }

    

