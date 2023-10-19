let apples = 5
let speed: string = 'fast'
let hasName: boolean = true

let nothingMuch: null = null
let nothing: undefined = undefined

// built in objects
let now: Date = new Date()

// Array
let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1, 2, 3]
let truths: boolean[] = [true, true, false]

// Classes
class Car { }
let car: Car = new Car()

// Object literal
let calculate: { x: number; y: number } = {
    x: 10,
    y: 20,
}

let bundles = {
    x: 10,
    y: 20,
    method: (i: number, j: number): number => i + j,
    method2(i: number): string {
        return `${i}`
    },
}

const printBundle = (bundles: {
    x: number
    y: number
    method(i: number, j: number): number
    method2(i: number): string
}): number => {
    console.log(bundles.method(bundles.x, bundles.y))
    console.log(bundles.method2(50 + 60))
    return bundles.method(bundles.x, bundles.y)
}

printBundle(bundles)

interface Globe {
    method(): string
}

let point = {
    award: 'gold',
    method(): string {
        return this.award
    },
}
const printSummary = (points: Globe): void => {
    console.log(points.method())
}
printSummary(point)

const sumOfNumbers: (arg1: number, arg2: number) => number = (
    arg1: number,
    arg2: number
) => {
    return arg1 + arg2
}

sumOfNumbers(1, 2)

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}


// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}'
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates) // {x: 10, y: 20};

// 2) When we declare a variable on one line
// and initalizate it later
let words = ['red', 'green', 'blue']
let foundWord: boolean

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true
    }
}

// 3) Variable whose type cannot be inferred correctly
let numbers: number[] = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}
