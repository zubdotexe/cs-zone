import "./Footer.css";
import twitterIcon from "../../assets/twitterIcon.png";
import fbIcon from "../../assets/fbIcon.png";
import linIcon from "../../assets/linIcon.png";
import emailIcon from "../../assets/emailIcon.png";

export default function FooterInfo() {
    return (
        <div className="max-w-[1330px] mx-auto px-10 lg:px-4 text-[#A1A1AA] grid grid-cols-1 lg:grid-cols-6 gap-6">
            <div className="col-span-1 lg:col-span-2">
                <h1 className="mb-4 font-bold text-2xl text-white">
                    CS — Ticket System
                </h1>
                <p className="w-4/5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>
            </div>
            <div className="elem">
                <h1>Company</h1>
                <p>About Us</p>
                <p>Our Mission</p>
                <p>Contact Sales</p>
            </div>
            <div className="elem">
                <h1>Services</h1>
                <p>Products & Services</p>
                <p>Customer Stories</p>
                <p>Download Apps</p>
            </div>
            <div className="elem">
                <h1>Information</h1>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Join Us</p>
            </div>
            <div className="elem">
                <h1>Social Links</h1>
                <p className="flex gap-2">
                    <img src={twitterIcon} alt="X icon" />
                    <span>@CS — Ticket System</span>
                </p>
                <p className="flex gap-2">
                    <img src={linIcon} alt="LinkedIn icon" />
                    <span>@CS — Ticket System</span>
                </p>
                <p className="flex gap-2">
                    <img src={fbIcon} alt="Facebook icon" />
                    <span>@CS — Ticket System</span>
                </p>
                <p className="flex gap-2">
                    <img src={emailIcon} alt="Email icon" />
                    <span>support@cst.com</span>
                </p>
            </div>
        </div>
    );
}
