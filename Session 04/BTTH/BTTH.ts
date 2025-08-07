//B1: Tao ra cac kieu du lieu can thiet
interface Subject {
    subjectName: string;
    score: number | string
};
interface Student {
    name: string;
    age: number;
    subjects: Subject[]
};
let students: Student[] = []
//B2: Xay dung cac ham theo yeu cau
function addStudent(student: Student): void {
    students.push(student);
    console.log("Thêm sinh viên thành công");
}
function updateStudent(name: string, newName: string, newAge: number): void {
    let findStudent = students.find(student => student.name === name);
    if (findStudent) {
        findStudent.name = newName;
        findStudent.age = newAge;
    } else {
        console.log("Không tìm thấy sinh viên");
    }
}
function deleteStudent(name: string): void {
    let deleteIndex = students.findIndex((student) => student.name === name)
    if (deleteIndex != -1) {
        students.splice(deleteIndex, 1)
    } else {
        console.log("Không tìm thấy sinh viên");
    }
}
function convert(score: string): number {
    switch (score) {
        case "A":
            return 10;
        case "B":
            return 8;
        case "C":
            return 6;
        case "D":
            return 4;
        default:
            return 0;
    }
}
function avg(student: Student): number {
    //Tinh tong diem tat ca cac mon
    let total = student.subjects.reduce((acc, element) => {
        if (typeof element.score === "number") {
            return acc + element.score;
        } else {
            return acc + convert(element.score)
        }
    }, 0)
    //Tinh diem trung binh
    return total / student.subjects.length;
}
function rank(student: Student): string {
    let avgScore = avg(student);
    if (avgScore >= 8.5) {
        return "Giỏi"
    } else if (avgScore >= 6.5) {
        return "Khá"
    } else if (avgScore >= 5) {
        return "Trung bình"
    } else {
        return "Yếu"
    }
}
function showStudents(): void {
    console.log("Danh sách sinh viên");
    students.forEach(student => {
        let avgScore = avg(student);
        let studentRank = rank(student);
        console.log(` Tên: ${student.name}, tuổi: ${student.age},
            ĐTB: ${avgScore}, xếp loại: ${studentRank}`);
    })
}
//B3: Goi ham, kiem tra
addStudent({
    name: "Nguyen Van A",
    age: 20,
    subjects: [
        { subjectName: "Math", score: 9 },
        { subjectName: "English", score: "B" }
    ]
})
addStudent({
    name: "Nguyen Van B",
    age: 21,
    subjects: [
        { subjectName: "Math", score: "A" },
        { subjectName: "History", score: "C" }
    ]
})
showStudents()