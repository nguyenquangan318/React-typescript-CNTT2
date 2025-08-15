class Student {
    private id: number
    private name: string
    constructor (id:number, name: string) {
        this.id = id;
        this.name = name;
    }
}

// class Classroom {
//     private students: Student[]=[];

//     addStudent(student: Student): void {
//         this.students.push(student);
//     }

//     addStudentClass(id: number):void{
//         const index = students.findIndex(student => student.getId()=== id);
//         if (index )
//     }
// }

let students : Student[]= []
students.push(
    new Student(1, "An"),
    new Student(2, "Hoa"),
    new Student(3, "Nhien"),
    new Student(4, "Khanh"),
    new Student(5, "Bao"),
    new Student(6, "Anh"),
);
console.log(students);



