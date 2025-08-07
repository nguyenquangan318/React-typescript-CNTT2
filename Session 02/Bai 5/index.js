const students =  [
{ id: 1, name: "Nguyễn A" }, 

{ id: 2, name: "Trần B" }

]
let students2=students.map(element => {
    return `Xin chào ${element.name}! Mã số: ${element.id}`;
});
console.log(students2);
