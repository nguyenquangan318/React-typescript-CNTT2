import { Link, NavLink, useNavigate } from "react-router-dom"

function Navbar() {
    const navigate = useNavigate()
    return (
        <div>
            <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                <Link to={"/home?id=1"}>Home</Link>
            </span>
            <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                <span onClick={() => { navigate("/products") }}>Products</span>
            </span>
            <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                <NavLink to={"/about"} className={({ isActive }) => isActive ? "color-red" : "color-blue"}>About</NavLink>
            </span>
        </div>
    )
}

export default Navbar