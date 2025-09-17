import { useParams } from 'react-router'

export default function UserDetail() {
    const {id} = useParams()
    const listUser = [
        {id:1,name: "Nguyen Van A", email:"nva@gmail.com",address:"Ha Noi"},
        {id:2,name: "Nguyen Van B", email:"nvb@gmail.com",address:"Ha Noi"},
        {id:3,name: "Nguyen Van C", email:"nvc@gmail.com",address:"Ha Noi"},
    ]
    const user = listUser.find((user) => user.id === parseInt(id!));

  return (

    <div>
        {user ? 
                <div>
                <p>Id: {user.id}</p>
                <p>UserName: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Address: {user.address}</p>
            </div>
            : ""} 

    </div>
  )
}
