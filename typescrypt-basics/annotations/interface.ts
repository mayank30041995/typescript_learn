interface Reportable {
    name: string;
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const drink = {
    name: 'alex',
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink is ${this.color} has ${this.sugar} grams of sugar`;
    }
};

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);

export { }