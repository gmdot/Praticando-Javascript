const valor_nome = document.getElementById("nome")
const enter = document.getElementById("enter")

class Person {
    constructor(name) {
        this.name = name
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const nome = new Person(valor_nome.value)

function introduceName(){
    nome.introduce()
}