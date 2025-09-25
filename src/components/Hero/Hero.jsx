import TicketStat from "./TicketStat";

export default function Hero() {
    return (
        <div className="flex flex-wrap gap-6 p-10 md:p-20">
            <TicketStat
                bgColor={"bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"}
                cardTitle={"In-Progress"}
            ></TicketStat>
            <TicketStat
                bgColor={"bg-gradient-to-r from-[#54CF68] to-[#00827A]"}
                cardTitle={"Resolved"}
            ></TicketStat>
        </div>
    );
}
