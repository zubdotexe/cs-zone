import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FooterInfo from "./components/Footer/FooterInfo";
import Copyright from "./components/Footer/Copyright";
import calendarIcon from "./assets/calendarIcon.png";

function App() {
    return (
        <div className="bg-[#F5F5F5]">
            <header>
                <Navbar></Navbar>
                <Hero></Hero>
            </header>
            <main>
                <div className="flex flex-wrap-reverse gap-8 max-w-[1330px] mx-auto pb-20 px-10 lg:px-4">
                    <div className="w-3/4 space-y-4">
                        <h1 className="font-semibold text-2xl text-gray-600">
                            Customer Tickets
                        </h1>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="p-4 space-y-3 rounded-sm bg-white hover:bg-gray-50">
                                <div className="flex flex-wrap gap-2 justify-between items-center">
                                    <h2 className="font-medium text-xl">
                                        Login Issues - Can't Access Account
                                    </h2>
                                    <button className="btn bg-[#F8F3B9] text-[#9C7700] rounded-full">
                                        <div className="w-4 h-4 bg-[#FEBB0C] rounded-full"></div>
                                        In-Progress
                                    </button>
                                </div>
                                <p className="text-gray-400">
                                    Customer is unable to log in to their
                                    account. They've tried resetting their
                                    password multiple times but still...
                                </p>
                                <div className="flex justify-between items-center text-sm text-gray-400">
                                    <div className="flex gap-3">
                                        <span className="font-semibold">#1001</span>
                                        <span className="text-green-500">LOW PRIORITY</span>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <span>Josh Kane</span>
                                        <span className="flex items-center gap-1"><img src={calendarIcon} alt="Calendar icon" />1/15/2024</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 space-y-3 rounded-sm bg-white hover:bg-gray-50">
                                <div className="flex justify-between items-center">
                                    <h2 className="font-medium text-xl">
                                        Login Issues - Can't Access Account
                                    </h2>
                                    <button className="btn bg-[#B9F8CF] text-[#0B5E06] rounded-full">
                                        <div className="w-4 h-4 bg-[#02A53B] rounded-full"></div>
                                        Open
                                    </button>
                                </div>
                                <p className="text-gray-400">
                                    Customer is unable to log in to their
                                    account. They've tried resetting their
                                    password multiple times but still...
                                </p>
                                <div className="flex justify-between text-sm text-gray-400">
                                    <div className="flex gap-3">
                                        <span className="font-semibold">#1001</span>
                                        <span className="text-red-500">HIGH PRIORITY</span>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <span>Josh Kane</span>
                                        <span className="flex items-center gap-1"><img src={calendarIcon} alt="Calendar icon" />1/15/2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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
