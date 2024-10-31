const array = ["porshe","audi","bmw","mesedec","lombargini"]
const car = 'porshe'
for (let x=0; x< array.length; x++){
    if ( array[x]===car)
        console.log(`нашли ${car} по индексу ${x}`)
}
