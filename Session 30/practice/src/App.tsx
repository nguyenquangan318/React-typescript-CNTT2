import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react';
interface Student {
  id: number,
  name: string,
  email: string,
  address: string,
  phone: string
  status: boolean,
  created_at: Date
}

function App() {
  let [students, setStudents] = useState<Student[]>([])
  useEffect(() => {
    getAllStudent()
  }, [])
  async function getAllStudent() {
    try {
      let res = await axios.get("http://localhost:3000/students")
      setStudents(res.data)
      console.log("Lay du lieu");

    } catch (err: any) {
      console.log(err.message);
    }
  }
  async function deleteStudent(id: number) {
    try {
      let res = await axios.delete(`http://localhost:3000/students/${id}`)
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  function handleDelete(id: number) {
    if (confirm("Ban chac chan muon xoa sinh vien nay?")) {
      deleteStudent(id).then(() => {
        getAllStudent()
      })
    }
  }
  // async function getStudentById() {
  //   try {
  //     let res = await axios.get("http://localhost:3000/students/2")
  //     console.log(res.data);
  //   } catch {
  //     console.log("Khong tim thay");
  //   }
  // }
  // function createStudent() {
  //   let newStudent = {
  //     "id": String(2),
  //     "name": "Phuong",
  //     "email": "phuong@gmail.com",
  //     "address": "Thanh Hoa",
  //     "phone": "036363636",
  //     "status": true,
  //     "created_at": new Date()
  //   }
  //   axios.post("http://localhost:3000/students", newStudent)
  // }
  // createStudent()

  // getStudentById()
  return (
    <div>
      <header style={{ backgroundColor: "#435d7d", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Quan ly sinh vien</h1>
        <button style={{ height: "30px" }}>Them moi sinh vien</button>
      </header>
      <table style={{ padding: "10px", tableLayout: "fixed" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px" }}><input type="checkbox" /></th>
            <th>Ten sinh vien</th>
            <th>Email</th>
            <th>Dia chi</th>
            <th>So dien thoai</th>
            <th>Lua chon</th>
          </tr>
        </thead>
        <tbody>
          {students!.map((student) =>
            <tr key={student.id}>
              <td style={{ padding: "10px" }}><input type="checkbox" /></td>
              <td> {student.name}</td>
              <td>{student.email}</td>
              <td>{student.address}</td>
              <td>{student.phone}</td>
              <td>
                <button>Sua</button>
                <button onClick={() => { handleDelete(student.id) }}>Xoa</button>
              </td>
            </tr>)}
        </tbody>
      </table>

    </div>
  )
}

export default App