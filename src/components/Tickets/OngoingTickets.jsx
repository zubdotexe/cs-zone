import OngoingTicket from "./OngoingTicket";

export default function OngoingTickets({ongoingIssues}) {
    return (
        <div>
            <h1 className="font-semibold text-2xl text-gray-600">
                Task Status
            </h1>
            <div className="pt-4">
                <p className="text-gray-400">
                    {
                        ongoingIssues.length 
                        ? ongoingIssues.map(oIssue => <OngoingTicket oIssue={oIssue}></OngoingTicket>) 
                        : "Select a ticket to add to Task Status"
                    }
                </p>
            </div>
        </div>
    );
}
