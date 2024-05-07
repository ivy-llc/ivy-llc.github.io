import "src/styles/App.css";
import "src/styles/index.css";
import "src/styles/LandingPage.css";
import NavBar from "src/components/NavBar";
import SocialHandles from "src/components/SocialHandles";

export default function Console() {
    return (
        <>
            <NavBar />
            <h1>Transpile AI Console</h1>
            <p>We&apos;re still working on integrating the Transpile console to this page, apologies for the inconvenience.</p>
            <SocialHandles />
        </>
    );
}
