import React from "react";
import Logo from "../../assets/images/cÜk_long.png"

const logout = () => {
    localStorage.clear();
    window.location.href = '/login';
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
           <div>
          <button type="submit" className="btn-warning text-center " onClick={logout}>Log Out</button>
        </div>
      </nav>
</div>
    );
}
export default Header;