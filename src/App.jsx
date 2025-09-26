import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FooterInfo from "./components/Footer/FooterInfo";
import Copyright from "./components/Footer/Copyright";

import { Suspense } from "react";
import Issues from "./Issues";

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
                {/* flex flex-wrap-reverse */}
                <div className="grid grid-cols-1 lg:grid-cols-[2.3fr_.7fr] gap-8 max-w-[1330px] mx-auto pb-20 px-10 lg:px-4">
                    {/* w-3/4 */}
                    <div className="space-y-4">
                        <h1 className="font-semibold text-2xl text-gray-600">
                            Customer Tickets
                        </h1>
                        <Suspense
                            fallback={
                                <span className="loading loading-spinner loading-xl"></span>
                            }
                        >
                            <Issues issuePromise={issuePromise}></Issues>
                        </Suspense>
                    </div>
                    <div className="flex-1 space-y-10">
                        <div>
                            <h1 className="font-semibold text-2xl text-gray-600">
                                Task Status
                            </h1>
                            <div>
                                <p className="text-gray-400">
                                    Select a ticket to add to Task Status
                                </p>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-semibold text-2xl text-gray-600">
                                Resolved Task
                            </h1>
                            <p className="text-gray-400">
                                No resolved tasks yet.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="bg-black pt-20">
                <FooterInfo></FooterInfo>
                <Copyright></Copyright>
            </footer>
        </div>
    );
}

export default App;
