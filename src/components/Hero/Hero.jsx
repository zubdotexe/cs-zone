import TicketStat from "./TicketStat";

export default function Hero({ongoingIssues, resolvedIssues}) {
    console.log(ongoingIssues.length)
    return (
        <div className="flex flex-wrap gap-6 py-20 px-10 lg:px-4 max-w-[1330px] mx-auto">
            <TicketStat
                bgColor={"bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"}
                cardTitle={"In-Progress"}
                ongoingIssues={ongoingIssues}
            ></TicketStat>
            <TicketStat
                bgColor={"bg-gradient-to-r from-[#54CF68] to-[#00827A]"}
                cardTitle={"Resolved"}
                resolvedIssues={resolvedIssues}
            ></TicketStat>
        </div>
    );
}
