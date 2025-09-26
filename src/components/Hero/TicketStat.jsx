import bgImg from "../../assets/vector1.png";

export default function TicketStat({bgColor, cardTitle, ongoingIssues}) {
    console.log(ongoingIssues);
    return (
        <div className={`flex-1 relative p-20 rounded-md ${bgColor}`}>
            <img
                className="object-cover h-full absolute top-0 left-0"
                src={bgImg}
                alt=""
            />
            <div className="text-center text-white space-y-4">
                <h2 className="text-2xl">{cardTitle}</h2>
                <p className="text-6xl font-semibold">{ongoingIssues?.length ?? 0}</p>
            </div>
            <img
                className="object-cover h-full absolute top-0 right-0 transform scale-x-[-1]"
                src={bgImg}
                alt=""
            />
        </div>
    );
}
