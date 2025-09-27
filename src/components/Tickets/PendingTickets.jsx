import PendingTicket from "./PendingTicket";
import { use } from "react";

export default function PendingTickets({ issuePromise, pendingIssues, ongoingIssues, handleOngoingIssues }) {
    // const issueData = use(issuePromise);
    // console.log(issueData);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {pendingIssues.map((issue) => (
                <PendingTicket key={issue.id} issue={issue} ongoingIssues={ongoingIssues} handleOngoingIssues={handleOngoingIssues}></PendingTicket>
            ))}
        </div>
    );
}
