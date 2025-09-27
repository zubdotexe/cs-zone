import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FooterInfo from "./components/Footer/FooterInfo";
import Copyright from "./components/Footer/Copyright";
import Tickets from "./components/Tickets/Tickets";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

const fetchData = async () => {
    const res = await fetch("/issueData.json");
    return res.json();
};

const issuePromise = fetchData();

function App() {
    const [pendingIssues, setPendingIssues] = useState([]);

    useEffect(() => {
        fetch("./issueData.json")
            .then((res) => res.json())
            .then((data) => setPendingIssues(data));
    }, []);

    const [ongoingIssues, setOngoingIssues] = useState([]);
    const [resolvedIssues, setResolvedIssues] = useState([]);

    const handleOngoingIssues = (issue) => {
        // const updatedOngoingIssues = [...ongoingIssues, issue.id];
        // setOngoingIssues(updatedOngoingIssues);
        console.log("in parent");
        setOngoingIssues(
            (ongoingIssues) => (ongoingIssues = [...ongoingIssues, issue])
        );
    };

    const resolveIssue = (issue) => {
        console.log("parent");
        const updatedOngoingIssues = ongoingIssues.filter(oIssue => oIssue.id !== issue.id);
        setOngoingIssues(updatedOngoingIssues);
        setResolvedIssues(issue => [...resolvedIssues, issue]);
    };

    return (
        <div className="bg-[#F5F5F5]">
            <header>
                <Navbar></Navbar>
                <Hero ongoingIssues={ongoingIssues} resolvedIssues={resolvedIssues}></Hero>
            </header>
            <main>
                <Tickets
                    issuePromise={issuePromise}
                    pendingIssues={pendingIssues}
                    ongoingIssues={ongoingIssues}
                    handleOngoingIssues={handleOngoingIssues}
                    resolveIssue={resolveIssue}
                ></Tickets>
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
