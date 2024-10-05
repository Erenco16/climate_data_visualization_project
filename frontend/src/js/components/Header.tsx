import React from "react";
import CircularLogo from "./SVGDrawing";

const Header = () => {
    return (
            <div className="logo-container">
                <CircularLogo/>
                <img className="logo stable" src="./stable-logo.svg" alt="Ket Logo"/>
            </div>
    )
}

export default Header;