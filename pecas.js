//CRIA LISTA DE PEÇAS DENTRO DE UM ARRAY
var dadosLista = [];

function salvarUser() {
    let nomeUser = document.getElementById("nomeUser").value;
    let precoUser = parseFloat(document.getElementById("precoInput").value);
    
    if (nomeUser && !isNaN(precoUser)) {
        dadosLista.push({ nome: nomeUser, preco: precoUser });
        criaLista();
        document.getElementById("nomeUser").value = '';
        document.getElementById("precoInput").value = '';
    } else {
        alert("Preencha o nome e/ou preço corretamente");
    }
}

// FUNÇÃO PARA A CRIAÇÃO DE LISTA NA TABELA
function criaLista() {
    let tabela = document.getElementById("tabela");
    tabela.innerHTML = `
        <tr>
            <th>Nome Usuário</th>
            <th>Preço</th>
            <th>Ações</th>
        </tr>`;

    for (let i = 0; i < dadosLista.length; i++) {
        tabela.innerHTML += `
            <tr>
                <td>${dadosLista[i].nome}</td>
                <td>R$ ${dadosLista[i].preco.toFixed(2)}</td>
                <td>
                    <button class='btn btn-success' onclick='editar(${i})'>Editar</button>
                    <button class='btn btn-danger' onclick='excluir(${i})'>Excluir</button>
                </td>
            </tr>`;
    }
}

// FUNÇÃO PARA EDITAR PEÇA
function editar(i) {
    document.getElementById("nomeUser").value = dadosLista[i].nome;
    document.getElementById("precoInput").value = dadosLista[i].preco;
    dadosLista.splice(i, 1);
    criaLista();
}

// FUNÇÃO PARA EXCLUIR PEÇA
function excluir(i) {
    dadosLista.splice(i, 1);
    criaLista();
}

// FUNÇÃO PARA CALCULAR TOTAL
function calcularTotal() {
    let total = 0;
    for (let i = 0; i < dadosLista.length; i++) {
        total += dadosLista[i].preco;
    }
    document.getElementById("total").textContent = total.toFixed(2);
}
