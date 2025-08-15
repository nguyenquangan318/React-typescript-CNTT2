abstract class Shape {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    abstract getSize(): string ;
}

class Rectangle extends Shape {
    public width: number;
    public height: number;
    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize(): string {
        return `Chieu rong: ${this.width}, Chieu cao: ${this.height}`;
    }
}

const rectangle = new Rectangle("Hinh chu nhat", 2, 4);
console.log(rectangle.getName());
console.log(rectangle.getSize());


