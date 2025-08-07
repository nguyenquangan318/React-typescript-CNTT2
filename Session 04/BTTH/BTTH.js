;
;
var students = [];
//B2: Xay dung cac ham theo yeu cau
function addStudent(student) {
    students.push(student);
    console.log("Thêm sinh viên thành công");
}
function updateStudent(name, newName, newAge) {
    var findStudent = students.find(function (student) { return student.name === name; });
    if (findStudent) {
        findStudent.name = newName;
        findStudent.age = newAge;
    }
    else {
        console.log("Không tìm thấy sinh viên");
    }
}
function deleteStudent(name) {
    var deleteIndex = students.findIndex(function (student) { return student.name === name; });
    if (deleteIndex != -1) {
        students.splice(deleteIndex, 1);
    }
    else {
        console.log("Không tìm thấy sinh viên");
    }
}
function convert(score) {
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
function avg(student) {
    //Tinh tong diem tat ca cac mon
    var total = student.subjects.reduce(function (acc, element) {
        if (typeof element.score === "number") {
            return acc + element.score;
        }
        else {
            return acc + convert(element.score);
        }
    }, 0);
    //Tinh diem trung binh
    return total / student.subjects.length;
}
function rank(student) {
    var avgScore = avg(student);
    if (avgScore >= 8.5) {
        return "Giỏi";
    }
    else if (avgScore >= 6.5) {
        return "Khá";
    }
    else if (avgScore >= 5) {
        return "Trung bình";
    }
    else {
        return "Yếu";
    }
}
function showStudents() {
    console.log("Danh sách sinh viên");
    students.forEach(function (student) {
        var avgScore = avg(student);
        var studentRank = rank(student);
        console.log(" T\u00EAn: ".concat(student.name, ", tu\u1ED5i: ").concat(student.age, ",\n            \u0110TB: ").concat(avgScore, ", x\u1EBFp lo\u1EA1i: ").concat(studentRank));
    });
}
//B3: Goi ham, kiem tra
addStudent({
    name: "Nguyen Van A",
    age: 20,
    subjects: [
        { subjectName: "Math", score: 9 },
        { subjectName: "English", score: "B" }
    ]
});
addStudent({
    name: "Nguyen Van B",
    age: 21,
    subjects: [
        { subjectName: "Math", score: "A" },
        { subjectName: "History", score: "C" }
    ]
});
showStudents();
