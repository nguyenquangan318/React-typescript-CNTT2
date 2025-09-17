import { NavLink } from 'react-router'
import './Header.css'
function Header() {
    return (
        <>
            <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/home" style={{ marginLeft: '10px' }}>home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/product" style={{ marginLeft: '10px' }}>product</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/detail" style={{ marginLeft: '10px' }}>detail</NavLink>
        </>
    )
}

export default Header