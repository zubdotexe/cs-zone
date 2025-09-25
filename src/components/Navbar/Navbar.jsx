export default function Navbar() {
    return (
        <div className="bg-white">
            <div className="flex flex-wrap gap-4 items-center justify-between px-10 lg:px-4 py-4 max-w-[1330px] mx-auto">
                <h1 className="cursor-pointer font-bold text-2xl">
                    CS — Ticket System
                </h1>
                <div className="flex items-center gap-4 md:gap-8 text-gray-600">
                    <div className="dropdown md:hidden">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a>Home</a>
                            </li>
                            <li>
                                <a>FAQ</a>
                            </li>
                            <li>
                                <a>Changelog</a>
                            </li>
                            <li>
                                <a>Blog</a>
                            </li>
                            <li>
                                <a>Download</a>
                            </li>
                            <li>
                                <a>Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden md:flex gap-8">
                        <p className="cursor-pointer hover:text-black font-medium">
                            Home
                        </p>
                        <p className="cursor-pointer hover:text-black font-medium">
                            FAQ
                        </p>
                        <p className="cursor-pointer hover:text-black font-medium">
                            Changelog
                        </p>
                        <p className="cursor-pointer hover:text-black font-medium">
                            Blog
                        </p>
                        <p className="cursor-pointer hover:text-black font-medium">
                            Download
                        </p>
                        <p className="cursor-pointer hover:text-black font-medium">
                            Contact
                        </p>
                    </div>
                    <button className="whitespace-nowrap bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-sm px-4 py-3 text-white font-semibold cursor-pointer transform transition-colors duration-300 hover:scale-[1.03]">
                        + New Ticket
                    </button>
                </div>
            </div>
        </div>
    );
}
