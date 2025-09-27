import { Suspense } from "react";
import PendingTickets from "./PendingTickets";
import OngoingTickets from "./OngoingTickets";
import ResolvedTickets from "./ResolvedTickets";

export default function Tickets({ issuePromise, pendingIssues, ongoingIssues, handleOngoingIssues }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[2.3fr_.7fr] gap-8 max-w-[1330px] mx-auto pb-20 px-10 lg:px-4">
            <div className="space-y-4">
                <h1 className="font-semibold text-2xl text-gray-600">
                    Customer Tickets
                </h1>
                <Suspense
                    fallback={
                        <span className="loading loading-spinner loading-xl"></span>
                    }
                >
                    <PendingTickets
                        issuePromise={issuePromise}
                        pendingIssues={pendingIssues}
                        ongoingIssues={ongoingIssues}
                        handleOngoingIssues={handleOngoingIssues}
                    ></PendingTickets>
                </Suspense>
            </div>
            <div className="flex-1 space-y-10">
                <OngoingTickets ongoingIssues={ongoingIssues}></OngoingTickets>
                <ResolvedTickets></ResolvedTickets>
            </div>
        </div>
    );
}
