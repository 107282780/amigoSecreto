const nomeAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let amigos = [];

function adicionarAmigo() {
    const nome = nomeAmigo.value.trim();

    if (nome.length === 0) {
        alert("Por favor, digite um nome válido!");
        return;
    };
    
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado! Digite um nome diferente.");
        return;
    
    } 
    
    amigos.push(nome);
    atualizarLista();
    
    nomeAmigo.value = "";
    nomeAmigo.focus();
    
};

nomeAmigo.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
      adicionarAmigo();
    }
  });


function atualizarLista() {
    listaAmigos.innerHTML = ""; 

    let linhas = Math.ceil(amigos.length / 4); 

    for (let i = 0; i < linhas; i++) {
        let linha = document.createElement("div");
        linha.classList.add("linha-nomes");

        for (let j = 0; j < 4; j++) {
            let index = i * 4 + j;
            if (index < amigos.length) {
                let nomeItem = document.createElement("span");
                nomeItem.classList.add("nome-item");
                nomeItem.textContent = amigos[index];
                linha.appendChild(nomeItem);
            }
        }

        listaAmigos.appendChild(linha);
    }
}

function sortearAmigo() {
    if (amigos.length < 0) {
        alert(`Adicione pelo menos ${3 - amigos.length} nome(s) para sortear!`);
        return;
        
    }; 

    const sorteioAmigo = amigos[Math.floor(Math.random() * amigos.length)];
    
    resultado.textContent = `O amigo sorteado é: ${sorteioAmigo}`;
    document.querySelector(".sorteioBorda").classList.add("border-ativada");
   

};

function button_reset() {
    amigos = [];
    listaAmigos.innerHTML = "";
    resultado.textContent = "";
    document.querySelector(".sorteioBorda").classList.remove("border-ativada");
    amigos = [];
    
    nomeAmigo.value = "";
    nomeAmigo.focus();
};
    
document.addEventListener("DOMContentLoaded", function() {
    if ("ontouchstart" in window && navigator.maxTouchPoints > 0) {
        document.body.classList.add("touchscreen");
    }
});
 
