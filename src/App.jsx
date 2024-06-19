import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Agency from "./pages/Agency";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const App = () => {
    return (
        <MantineProvider defaultColorScheme="dark">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/agency" element={<Agency />} />
                </Routes>
            </Router>
        </MantineProvider>
    );
};

export default App;
