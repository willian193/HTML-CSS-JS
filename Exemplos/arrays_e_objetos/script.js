// array de objetos no js

// criando um objeto chamado usuario

let usuario = {

    nome: "Fulano",
    idade: 20,
    cidade: "Joinville"

}

console.log(usuario)

console.log(usuario.nome)
console.log(usuario.idade)
console.log(usuario.cidade)

usuario.email = "fulano@email.com"
console.log(usuario)

let usuarios = [

    {
        id:1,
        nome:natalino,
        idade:67
    },

    {
        id:2,
        nome:natalio,
        idade:67
    },

    {
        id:3,
        nome:natalin,
        idade:67
    }

]
console.log (usuarios)
console.log(usuarios[2])

console.log(usuarios[0].nome)

console.log(usuarios[0].idade)

for(let i=0; i<usuarios.length;i++){
    console.log(usuarios[i])
}


usuarios.push(
    {
        id:4,
        nome:"natalino",
        idade:67
    }
)

for(let i=0; i<usuarios.length;i++){
    if (usuarios[i].id == 2){
        console.log("usuario encontrado")
        console.log(usuario[i])
    }
}

