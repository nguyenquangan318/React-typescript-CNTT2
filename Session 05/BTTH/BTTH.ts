class Animal {
    private name: string;
    protected age: number;
    public species: string;
    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species
    }
    speak(): void {
        console.log("Phát ra âm thanh");
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
    getAge(): number {
        return this.age;
    }
    setAge(age: number): void {
        this.age = age;
    }
}

class Dog extends Animal {
    public breed: string;
    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }
    speak(): void {
        console.log("Woof!!");
    }
}
class Cat extends Animal {
    public breed: string;
    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }
    speak(): void {
        console.log("Meow!!");
    }
}
class Rabbit extends Animal {
    public breed: string;
    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }
    speak(): void {
        console.log("Squeak!!");
    }
}

let randomAnimal = new Animal("animal", 10, "Mamal");
console.log(randomAnimal.getName());
console.log(randomAnimal.getAge());
console.log(randomAnimal.species);
randomAnimal.speak();

let dog = new Dog("John", 20, "Mamal", "pug");
console.log(dog.getName());
console.log(dog.getAge());
console.log(dog.species);
console.log(dog.breed);
console.log(dog.speak());



