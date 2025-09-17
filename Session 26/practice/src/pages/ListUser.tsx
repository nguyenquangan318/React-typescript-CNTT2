import { useNavigate } from 'react-router'

export default function ListUser() {
    const navigate = useNavigate();
    const listUser = [
        {id:1,name: "Nguyen Van A", email:"nva@gmail.com",address:"Ha Noi"},
        {id:2,name: "Nguyen Van B", email:"nvb@gmail.com",address:"Ha Noi"},
        {id:3,name: "Nguyen Van C", email:"nvc@gmail.com",address:"Ha Noi"},
    ]
    const handleClick = (id:number) => {
        navigate(`/userdetail/${id}`);
    }
  return (
    <div>
        {listUser.map((user) => (
            <div>
                <p>Id: {user.id}</p>
                <p>UserName: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Address: {user.address}</p>
                <button onClick={() => handleClick(user.id)}>Xem chi tiet</button>
            </div>
        ))}
    </div>
  )
}
