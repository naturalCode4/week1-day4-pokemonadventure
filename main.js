// Pokemon adventure!

let backpack = []

backpack.push('pokeball')
backpack.push('potion')
backpack.push('pokedollars')

//backpack.shift()
backpack.splice(0,1,'pokeball')

let stone = 'water stone'
backpack.push(stone)
backpack.pop()
backpack.push(['Vaporean'])

//backpack.push('great ball', 'antidote', 'revive')
let satchel = backpack.splice(3, 2)
// you could remove items and add at same time with splice

for (let i=0; i<backpack.length; i++) {
    console.log('The item at index ', i ,' is ', backpack[i])
}

if (backpack.length > 2) {
    for (let i=0; i<2; i++) {
        console.log(backpack[i])
    } 
    } else {
        for (let i=0; i<backpack.length; i++) {
            console.log('The item at index ', i ,' is ', backpack[i])
    }
}

//console.log(backpack)
//console.log(satchel)

let guessMe = 2

while (guessMe < 100) {
    console.log(`value of guessMe at beginning of loop ${guessMe}`)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25
        console.log (`if divisible by 4 or 5, adding 25`, guessMe)
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
        console.log ('if divisible by 3, subtracting 27',guessMe)
    } else {
        guessMe += 3
        console.log('added 3', guessMe)
    }
    guessMe += 22
    console.log('add 22')
}
console.log('adding 22... and final value of guessMe is', guessMe)