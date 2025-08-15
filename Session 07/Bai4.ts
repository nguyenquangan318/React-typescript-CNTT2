interface Geometry{
    calculateArea(): number
    calculatePermeter(): number
}
class Circle implements Geometry{
    private radius: number
    constructor(radius: number){
        this.radius=radius
    }
    calculateArea(): number {
        return this.radius*Math.PI*this.radius
    }
    calculatePermeter(): number {
        return 2*Math.PI*this.radius
    }
}
class Rectangle implements Geometry{
    private width: number
    private height: number
    constructor(width: number, height: number){
        this.width=width
        this.height=height
    }
    calculateArea(): number {
        return this.width*this.height
    }
    calculatePermeter(): number {
        return (this.width+this.height)*2
    }
}
const circle=new Circle(5)
const rectangle=new Rectangle(5, 10)
console.log(circle.calculateArea(), circle.calculatePermeter());
console.log(rectangle.calculateArea(), rectangle.calculatePermeter());