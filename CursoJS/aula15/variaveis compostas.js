let num = [5,6,8,7,3]

console.log(num.length) // mostra que o vetor tem 5 elementos
console.log(num.sort())
console.log(num[3])

for(let pos=0;pos<num.length;pos++){
    console.log(num[pos])
}

var busca = num.indexOf(10)
console.log(busca)