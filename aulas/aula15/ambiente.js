let num = [5, 8, 4, 9, 3]
console.log(num)
num.push(2)
console.log(num)
num.sort()
console.log(num)
num.push(1)
console.log(`nosso vetor agora é o ${num}!`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
if (pos == -1){
  console.log(`O valor não foi encontrado!`)
}else {
console.log(`O valor 8 está na posição ${pos}`)
}