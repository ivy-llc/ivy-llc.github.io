import React from "react";
import "src/styles/App.css";
import "src/styles/index.css";
import "src/styles/LandingPage.css";
import "src/styles/S2S.css";
import NavBar from "src/components/NavBar";
import Transpilation3 from "src/components/Transpilation3";

export default function SourceToSource() {
    return (
        <>
            <NavBar/>
            <h1>Source-to-Source Transpiler</h1>
            <Transpilation3/>
        </>
    )
};