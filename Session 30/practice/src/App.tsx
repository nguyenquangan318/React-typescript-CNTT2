import StudentTable from "./components/StudentTable"
import "./App.css"
import axios from "axios"
import { useEffect, useState } from "react"

function App() {
    let [students, setStudents] = useState([])

    useEffect(() => {
        getAllStudent()
    }, [])
    async function deleteStudent(){

    }
    async function getAllStudent() {
        try {
            let res = await axios.get("http://localhost:3000/student")
            console.log(res.data);
            setStudents(res.data)
        } catch (err) {
            console.log(err);
        }
    }
    async function getStudentById(id: number) {
        try {
            let res = await axios.get(`http://localhost:3000/student/${id}`)
            console.log(res.data);

        } catch (error) {
            console.log(error);

        }
    }
    async function createStudent() {
        const student = {
            id: String(6),
            student_name: "Thanh",
            email: "thanh@gmail.com",
            address: "Ha Noi",
            phone: "0123456789",
            status: true,
            created_at: "27/9/2025"
        }
        try {
            await axios.post(`http://localhost:3000/student`, student)
        } catch (error) {
            console.log(error);
        }
    }

    // getAllStudent();
    // getStudentById(1);
    // createStudent()

    return (
        <div>
            <StudentTable students={students} />
        </div>
    )
}


export default App