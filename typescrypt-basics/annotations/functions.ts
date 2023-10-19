const add = (a: number, b: number) => {
  return a + b
}

const subtract = (a: number, b: number): number => {
  return a - b
}

function divide(a: number, b: number): number {
  return a / b
}

const multiply = function (a: number, b: number): number {
  return a * b
}

const logger = (message: string): void => {
  console.log(message)
}

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message)
  }
}
function prime(value: number): number {
  return Math.random() * value
}
const checkFun = (
  name: string,
  value: number,
  access: (val: number) => number
): number | void => {
  if (name === 'done') {
    return access(value)
  }
}

console.log('Check', checkFun('done', 30, prime))

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
}

const logWeather = ({
  date,
  weather,
}: {
    date: Date
    weather: string
}): void => {
  console.log(date)
  console.log(weather)
}

logWeather(todaysWeather)
