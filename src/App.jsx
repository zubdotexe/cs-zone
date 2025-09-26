import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FooterInfo from "./components/Footer/FooterInfo";
import Copyright from "./components/Footer/Copyright";
import Tickets from "./components/Tickets/Tickets";
import { ToastContainer } from "react-toastify";

const fetchData = async () => {
    const res = await fetch("/issueData.json");
    return res.json();
};

function App() {
    const issuePromise = fetchData();

    return (
        <div className="bg-[#F5F5F5]">
            <header>
                <Navbar></Navbar>
                <Hero></Hero>
            </header>
            <main>
                <Tickets issuePromise={issuePromise}></Tickets>
            </main>
            <footer className="bg-black pt-20">
                <FooterInfo></FooterInfo>
                <Copyright></Copyright>
            </footer>
            <ToastContainer />
        </div>
    );
}

export default App;
