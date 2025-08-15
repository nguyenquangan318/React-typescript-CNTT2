//Xay dung interface IAnimal
interface IAnimal {
    name: string;
    category: string;
    sound(): string;
    getDetails(): string;
    move(): string;
    feed(): string;
}
//Xay dung lop truu truong Animal
abstract class Animal implements IAnimal {
    name: string;
    private age: number;
    category: string;
    sound(): string {
        return "Sound"
    }
    getDetails(): string {
        return `Name: ${this.name}, age: ${this.age}, category: ${this.category}`
    }
    abstract move(): string;
    feed(): string {
        return "Feed"
    }
}
//Xay dung cac lop con
class Mamal extends Animal {
    furColor: string;
    move(): string {
        return "Chay"
    }
}
class Bird extends Animal {
    wingSpan: string;
    move(): string {
        return "Bay"
    }
}
class Reptile extends Animal {
    venomous: boolean;
    move(): string {
        return "Bo"
    }
}
class Zookeeper {
    careForAnimal(animal: Animal): void {
        console.log(`Care for ${animal.name}`);
    }
    report(animal: Animal): void {
        console.log(`Report for ${animal.name}`);
    }
}