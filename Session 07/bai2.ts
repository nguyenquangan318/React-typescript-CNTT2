abstract class Job{
    public type: string;

    constructor(type: string){
        this.type = type;
    }

    printType(): void{
        console.log(`Loai cong viec: ${this.type}`);
    }
}

class parttimeJob extends Job{
    public workingHour: number;

    constructor(type: string, workingHour: number){
        super(type);
        this.workingHour = workingHour;
    }

    calculateSalary(): number{
        return 10000000+30000*this.workingHour;
    }

}

const job =new parttimeJob("phuc vu", 10);
console.log(job.type, job.workingHour, job.calculateSalary());

