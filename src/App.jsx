import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FooterInfo from "./components/Footer/FooterInfo";
import Copyright from "./components/Footer/Copyright";

function App() {
    return (
        <div className="bg-[#F5F5F5]">
            <header>
                <Navbar></Navbar>
                <Hero></Hero>
            </header>
            <footer className="bg-black pt-20">
                <FooterInfo></FooterInfo>
                <Copyright></Copyright>
            </footer>
        </div>
    );
}

export default App;
