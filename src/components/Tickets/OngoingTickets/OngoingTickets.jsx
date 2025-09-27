import OngoingTicket from "./OngoingTicket";

export default function OngoingTickets({ ongoingIssues, resolveIssue }) {
    return (
        <div>
            <h1 className="font-semibold text-2xl text-gray-600">
                Task Status
            </h1>
            <div className="text-gray-400 pt-4 space-y-4">
                {ongoingIssues.length
                    ?   ongoingIssues.map((oIssue) => (
                            <OngoingTicket
                                key={oIssue.id}
                                oIssue={oIssue}
                                resolveIssue={resolveIssue}
                            ></OngoingTicket>
                        ))
                    : "Select a ticket to add to Task Status"}
            </div>
        </div>
    );
}
