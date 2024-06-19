import React from "react";
import { Text } from "@mantine/core";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png"; // Importa a logo

const NavBar = () => {
    return (
        <div className="navbar">
            <img
                src={logo}
                alt="Logo"
                style={{ height: "40px", marginRight: "10px" }}
            />{" "}
            <div className="menu">
                <Link to="/">
                    <Text>Home</Text>
                </Link>
                <Link to="/agency">
                    <Text>Agencias</Text>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
