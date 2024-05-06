const botoes = document.querySelectorAll(".botao");
const texto= document.querySelectorAll(".aba-conteudo");
const contadores= document.querySelectorAll(".contador");
const tempoObjetivo1= new Date("2023-09-01T00:00:00");
const tempoObjetivo2= new Date("2027-05-01T00:00:00");
const tempoObjetivo3= new Date("2023-09-01T00:00:00");
const tempoObjetivo4= new Date("2023-09-01T00:00:00");
const tempoAtual1= new Date;
//Declara quais elementos vão ser lidos. O script vai ler todos que tiverem a classe "botao".

for(let i=0;i <botoes.length;i++){
    //Variável "i" é igual a 0, mas enquanto essa variável for menor que a quantidade de elementos nessa lista, aumentamos o valor de "i", ou seja, i será a quantidade de botões.
    botoes[i].onclick = function() {
        for(let j=0;j<botoes.length;j++) {
        botoes[j].classList.remove("ativo");
        texto[j].classList.remove("ativo");
       
        }
        //Remove a classe "ativo" de todos os botões.
        botoes[i].classList.add("ativo");
        texto[i].classList.add("ativo");
        //Adiciona a classe ativo só no botão clicado.
    }
}

contadores[0].textContent= tempoObjetivo1 - tempoAtual1;



contadores[0].textContent= cauculaTempo (tempoObjetivo1);
contadores[1].textContent= cauculaTempo (tempoObjetivo1);
contadores[2].textContent= cauculaTempo (tempoObjetivo1);
contadores[3].textContent= cauculaTempo (tempoObjetivo1);


function cauculaTempo (tempoObjetivo1){
    let tempoAtual= new Date();
    let tempoFinal= tempoObejetivo-tempoAtual;
    let segundos= Math.floor(tempoFinal/1000);
    let minutos= Math.floor(segundos/60);
    let horas= Math.floor(minutos/60)
    let dias= Math.floor(horas/24)
    let anos= Math.floor(dias/365)
    

    segundos%=60;
    minutos%=60;
    horas%=24;

    
    return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";

}