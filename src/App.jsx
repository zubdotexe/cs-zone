import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FooterInfo from "./components/Footer/FooterInfo";
import Copyright from "./components/Footer/Copyright";
import Tickets from "./components/Tickets/Tickets";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

// const issuePromise = fetchData();

function App() {
    const [pendingIssues, setPendingIssues] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await fetch("/issueData.json");
            const data = await res.json();
            setPendingIssues(data);
            setLoading(false);
        };

        fetchData();
    }, []);

    const [ongoingIssues, setOngoingIssues] = useState([]);
    const [resolvedIssues, setResolvedIssues] = useState([]);

    const handleOngoingIssues = (issue) => {
        // const updatedOngoingIssues = [...ongoingIssues, issue.id];
        // setOngoingIssues(updatedOngoingIssues);

        setOngoingIssues((ongoingIssues) => {
            return [...ongoingIssues, issue];
        });
    };

    const resolveIssue = (issue) => {
        
        const updatedOngoingIssues = ongoingIssues.filter(
            (oIssue) => oIssue.id !== issue.id
        );
        setOngoingIssues(updatedOngoingIssues);
        setResolvedIssues((prevIssues) => [...prevIssues, issue]);

        const updatedPendingIssues = pendingIssues.filter(
            (pIssue) => pIssue.id !== issue.id
        );
        setPendingIssues(updatedPendingIssues);
    };

    return (
        <div className="bg-[#F5F5F5]">
            <header>
                <Navbar></Navbar>
                <Hero
                    ongoingIssues={ongoingIssues}
                    resolvedIssues={resolvedIssues}
                ></Hero>
            </header>
            <main>
                <Tickets
                    loading={loading}
                    // issuePromise={issuePromise}
                    pendingIssues={pendingIssues}
                    ongoingIssues={ongoingIssues}
                    handleOngoingIssues={handleOngoingIssues}
                    resolvedIssues={resolvedIssues}
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
