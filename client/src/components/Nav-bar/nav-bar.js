import React from "react";
import { Link as RouterNavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../Login/LogoutButton";
import LoginButton from "../Login/LoginButton";

const MainNav = () => (
    <Nav className="mr-auto">
        <Nav.Link
        as={RouterNavLink}
        to="/"
        exact
        activeClassName="router-link-exact-active"
        >
       Home
       </Nav.Link>
       <Nav.Link
       as={RouterNavLink}
       to="/"
       exact
       activeClassName="router-link-exact-active"
       >
        Profile
       </Nav.Link>
       <Nav.Link
       as={RouterNavLink}
       to="/"
       exact
       activeClassName="router-link-exact-active"
       >
        Profile
        </Nav.Link>
      </Nav>
);
const AuthNav = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <Nav className="justify-content-end">
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Nav>
    )
}

const Navbar = () => {

    return (
        <Navbar bg="light" expand="md">
            <container>
               <Navbar.Brand as={RouterNavLink} className="logo" to="/">
               <MainNav />
               <AuthNav />
               </Navbar.Brand>

            </container>
        </Navbar>
        
    );
};

