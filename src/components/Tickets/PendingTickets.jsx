import PendingTicket from "./PendingTicket";
import { use } from "react";

export default function PendingTickets({ issuePromise }) {
    const issueData = use(issuePromise);
    console.log(issueData);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {issueData.map((issue) => (
                <PendingTicket key={issue.id} issue={issue}></PendingTicket>
            ))}
        </div>
    );
}
