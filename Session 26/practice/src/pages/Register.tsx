import { useNavigate } from "react-router"
export default function Register() {
  const navigate = useNavigate();
    return (
        <form >
            <h5>Dang ky</h5>
            <input type="text" placeholder='' /><br />
            <input type='text' /><br />
            <input type="text" /><br /><br />
            <button onClick={( )=> navigate('/Login')}>Dang ky</button>
        </form>
    )
}
