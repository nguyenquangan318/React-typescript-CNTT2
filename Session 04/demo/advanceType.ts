//type alias + union type
type scoreType = number | string;
type numArr = scoreType[];
type Student = {
    id: number,
    name: string,
    score?: scoreType
}
//intersection type
type User = {
    userName: string;
};
type StudentUser = User & Student;

let numbers: numArr = [1, 2, 3];
let student: Student = {
    id: 1,
    name: "An",
}
let user: StudentUser = {
    userName: "test",
    id: 1,
    name: "An"
}

