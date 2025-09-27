import PendingTicket from "./PendingTicket";
import { use } from "react";

export default function PendingTickets({ pendingIssues, ongoingIssues, handleOngoingIssues }) {
    // const issueData = use(issuePromise);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {pendingIssues.map((issue) => (
                <PendingTicket key={issue.id} issue={issue} ongoingIssues={ongoingIssues} handleOngoingIssues={handleOngoingIssues}></PendingTicket>
            ))}
        </div>
    );
}
