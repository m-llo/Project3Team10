import React from "react";
import Logo from "../../assets/images/cÜk_long.png"

const login = () => {
    window.location.href = '/login';
}
const logout = () => {
    localStorage.clear();
    window.location.href = '/login';
} 
const signup = () => {
    localStorage.clear();
    window.location.href = '/signup';
} 

function Header() {
    return (
    <div>
        <nav className="navbar navbar-light bg-white">
            <div className="container">
                <a className="navbar-brand" href="/home">
                   <img src={Logo} alt="logo" width="150px" height="80px"/>
                </a>
            </div>
            <div className="navbar-brand">
               <button type="submit" className="btn-warning text-center" onClick={login}>Log In</button>
            </div>
            <div className="navbar-brand">
               <button type="submit" className="btn-warning text-center " onClick={logout}>Log Out</button>
            </div>
            <div className="navbar-brand">
               <button type="submit" className="btn-warning text-center " onClick={signup}>Sign up</button>
            </div>
        </nav>
    </div>
    );
}
export default Header;