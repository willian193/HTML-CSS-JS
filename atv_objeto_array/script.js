// ==========================
// 1. Cadastro de Produto
// ==========================

let produto = {
    nome: "Notebook",
    preco: 3500,
    quantidade: 10
};

// 1. Exibir o objeto completo
console.log(produto);

// 2. Exibir apenas o nome
console.log(produto.nome);

// 3. Alterar o preço
produto.preco = 4000;

// 4. Adicionar categoria
produto.categoria = "Eletrônicos";

// 5. Remover quantidade
delete produto.quantidade;

// 6. Exibir objeto atualizado
console.log(produto);


// ==========================
// 2. Cadastro de Filmes
// ==========================

let filmes = [
    {
        id: 1,
        titulo: "Vingadores",
        genero: "Ação",
        ano: 2019
    },
    {
        id: 2,
        titulo: "Toy Story",
        genero: "Animação",
        ano: 2010
    },
    {
        id: 3,
        titulo: "Titanic",
        genero: "Romance",
        ano: 1997
    }
];

// 1. Exibir todos os filmes
console.log(filmes);

// 2. Título do primeiro filme
console.log(filmes[0].titulo);

// 3. Gênero do segundo filme
console.log(filmes[1].genero);

// 4. Mostrar todos os filmes
for(let i = 0; i < filmes.length; i++){
    console.log(filmes[i]);
}

// 5. Mostrar apenas os títulos
for(let i = 0; i < filmes.length; i++){
    console.log(filmes[i].titulo);
}


// ==========================
// 3. Sistema de Alunos
// ==========================

let alunos = [
    {
        matricula: 101,
        nome: "João",
        nota: 8.5
    },
    {
        matricula: 102,
        nome: "Maria",
        nota: 9.0
    },
    {
        matricula: 103,
        nome: "Pedro",
        nota: 7.5
    },
    {
        matricula: 104,
        nome: "Ana",
        nota: 10
    }
];

// 1. Exibir todos os alunos
console.log(alunos);

// 2. Adicionar novo aluno
alunos.push({
    matricula: 105,
    nome: "Carlos",
    nota: 8.8
});

// 3. Lista atualizada
console.log(alunos);

// 4. Remover último aluno
alunos.pop();

// 5. Exibir novamente
console.log(alunos);

// 6. Mostrar apenas os nomes
for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i].nome);
}


// ==========================
// 4. Busca de Funcionário
// ==========================

let funcionarios = [
    {
        id: 1,
        nome: "Lucas",
        cargo: "Gerente"
    },
    {
        id: 2,
        nome: "Fernanda",
        cargo: "Analista"
    },
    {
        id: 3,
        nome: "Marcos",
        cargo: "Programador"
    },
    {
        id: 4,
        nome: "Juliana",
        cargo: "Designer"
    }
];

// 1. Exibir todos
console.log(funcionarios);

// 2, 3 e 4. Buscar funcionário com id = 3
for(let i = 0; i < funcionarios.length; i++){
    if(funcionarios[i].id === 3){
        console.log("Funcionário encontrado:");
        console.log(funcionarios[i]);
    }
}


// ==========================
// 5. Simulando uma API de Livros
// ==========================

let livros = [
    {
        id: 1,
        titulo: "Dom Casmurro",
        autor: "Machado de Assis"
    },
    {
        id: 2,
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry"
    },
    {
        id: 3,
        titulo: "Harry Potter",
        autor: "J.K. Rowling"
    }
];

let respostaAPI = {
    status: true,
    mensagem: "Livros encontrados",
    dados: livros
};

// 1. Exibir respostaAPI
console.log(respostaAPI);

// 2. Exibir dados
console.log(respostaAPI.dados);

// 3. Título do primeiro livro
console.log(respostaAPI.dados[0].titulo);

// 4. Mostrar todos os títulos
for(let i = 0; i < livros.length; i++){
    console.log(livros[i].titulo);
}

// 5. Adicionar novo livro
livros.push({
    id: 4,
    titulo: "Senhor dos Anéis",
    autor: "J.R.R. Tolkien"
});

// 6. Exibir novamente a resposta da API
console.log(respostaAPI);


// ==========================
// 6. Sistema de Cadastro de Jogos
// ==========================

// Objeto de jogo
let jogo1 = {
    id: 1,
    nome: "Minecraft",
    categoria: "Sandbox"
};

// Array de jogos
let jogos = [];

// Adicionar jogos
jogos.push(jogo1);

jogos.push({
    id: 2,
    nome: "FIFA 25",
    categoria: "Esporte"
});

jogos.push({
    id: 3,
    nome: "GTA V",
    categoria: "Ação"
});

// Listar todos os jogos
console.log("Lista de jogos:");

for(let i = 0; i < jogos.length; i++){
    console.log(jogos[i]);
}

// Buscar jogo pelo id
let idBusca = 2;

for(let i = 0; i < jogos.length; i++){
    if(jogos[i].id === idBusca){
        console.log("Jogo encontrado:");
        console.log(jogos[i]);
    }
}

// Exibir apenas nome e categoria
console.log("Nome e Categoria:");

for(let i = 0; i < jogos.length; i++){
    console.log(
        "Nome: " + jogos[i].nome +
        " | Categoria: " + jogos[i].categoria
    );
}