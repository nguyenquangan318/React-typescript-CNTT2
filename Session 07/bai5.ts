interface changeSpeed{
    speedUp(): void;
    slowDown(): void;
    stop(): void;
}
class Vehicle implements changeSpeed{
    private speed: number;
    constructor(speed: number){
        this.speed = speed;
    }
    slowDown(): void {
        this.speed -= 10;
        console.log(`Toc do giam con: ${this.speed} km/h`);
    }
    speedUp(): void{
        this.speed += 10;
        console.log(`Toc do tang len: ${this.speed} km/h`);
    }
    stop(): void{
        this.speed = 0;
        console.log("Toc do da ve 0");
    }
}
let xeMay = new Vehicle(40)
xeMay.slowDown();
xeMay.speedUp();
xeMay.stop();

