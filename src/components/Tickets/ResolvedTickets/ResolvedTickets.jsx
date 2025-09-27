import ResolvedTicket from "./ResolvedTicket";

export default function ResolvedTickets({ resolvedIssues }) {
    return (
        <div>
            <h1 className="font-semibold text-2xl text-gray-600">
                Resolved Task
            </h1>
            <div className="text-gray-400 pt-4 space-y-4">
                {resolvedIssues.length
                    ?   resolvedIssues.map((rIssue) => (
                            <ResolvedTicket
                                key={rIssue.id}
                                rIssue={rIssue}
                            ></ResolvedTicket>
                        ))
                    : "No resolved tasks yet."}
            </div>
        </div>
    );
}
