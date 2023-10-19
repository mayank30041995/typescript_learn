const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const car: string = carMakers[0] as string;
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push('stew');

// Help with 'map'
carMakers.map(
    (car: string): string => {
        return car.toUpperCase();
    }
);

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());

console.log(car, carMakers, importantDates)

export { }