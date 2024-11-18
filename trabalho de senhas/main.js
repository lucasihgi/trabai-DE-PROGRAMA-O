const numeroSenha=document.querySelector(".parametro-senha-texto");
let tamanhoSenha=12;
numeroSenha.textContent=tamanhoSenha;
const botoes= document.querySelectorAll(".parametro-senha-botao");
botoes[0].onclick=diminuirTamanho;
botoes[1].onclic=aumentartamanho
function diminuirTamanho(){
    if(tamanhoSenha>6){
    tamanhoSenha=tamanhoSenha-1;
    numeroSenha.textContent=tamanhoSenha;
}
}
botoes[1].onclick=aumentartamanho;
function aumentartamanho(){
    if(tamanhoSenha<12){
    tamanhoSenha=tamanhoSenha+1;
    numeroSenha.textContent=tamanhoSenha;
    }
}
