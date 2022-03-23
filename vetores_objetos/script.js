// Trabalhando com vetores e objetos

// Testando arrays

let array = ['string', 1, false, true]
console.log(array)

array.push("Item add", 2, ['array2'])
console.log(array)

array.pop([2])
console.log(array)

// Testando arrays

const list = document.getElementById("list")
const button = document.getElementById("button")
const input = document.getElementById("input")
var items = []

var emptyList = "Lista limpa."

list.innerHTML = "Lista Vazia."

function addItem(){
    items.push(" " + input.value)
    list.innerHTML = `${items}`
    console.log(items)
}

function emptyArray(){
    items.length = 0
    list.innerHTML = emptyList
}

/*for (let loop = 0; loop < 100; loop++) {
    button.click()    
}
*/