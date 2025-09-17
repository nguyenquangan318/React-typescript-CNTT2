
interface Student {
    id: string,
    student_name: string,
    email: string,
    address: string,
    phone: string,
    status: boolean,
    created_at: Date
}

export default function StudentTable({ students }: { students: Student[] }) {
    return (
        <div>
            <div style={{ display: "flex", backgroundColor: "#435d7d", alignItems: "center", justifyContent: "space-between" }}>

                <h1>Quan Ly Sinh Vien</h1>
                <button style={{ height: "40px" }}>Them moi sinh vien</button>
            </div>
            <table style={{ width: "100%", marginTop: "10px" }}>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" />
                        </th>
                        <th>
                            Ten sinh vien
                        </th>
                        <th>Email</th>
                        <th>Dia chi</th>
                        <th>SDT</th>
                        <th>Lua chon</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) =>
                        <tr key={student.id}>
                            <td><input type="checkbox" /></td>
                            <td>{student.student_name}</td>
                            <td>{student.email}</td>
                            <td>{student.address}</td>
                            <td> {student.phone}</td>
                            <td>
                                <button style={{ marginRight: "5px" }}>Sua</button>
                                <button>Xoa</button>
                            </td>
                        </tr>)}

                </tbody>
            </table>
        </div>
    )
}
