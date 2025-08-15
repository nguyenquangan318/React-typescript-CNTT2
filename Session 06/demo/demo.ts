interface IHuman {
    id: number;
    name: string;
    move(): void;
}

abstract class Human {
    private id: number;
    constructor() {

    }
    abstract move(): void;
    speak(): void {
        console.log("Speak");
    }
}

class dev extends Human{
    move(){
    }
}