import { Suspense } from "react";
import PendingTickets from "./PendingTickets";
import OngoingTickets from "./OngoingTickets";
import ResolvedTickets from "./ResolvedTickets";

export default function Tickets({
    loading,
    // issuePromise,
    pendingIssues,
    ongoingIssues,
    handleOngoingIssues,
    resolvedIssues,
    resolveIssue,
}) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[2.3fr_.7fr] gap-8 max-w-[1330px] mx-auto pb-20 px-4">
            <div className="space-y-4">
                <h1 className="font-semibold text-2xl text-gray-600">
                    Customer Tickets
                </h1>
                {/* <Suspense
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
                </Suspense> */}
                
                {/* 
                if loading is true, there will be loading spinner
                if loading is not true, the script checks
                    if there are elements in the array,
                    and if the array is empty, a message is shown
                     
                */}
                {loading ? (
                    <div className="w-full h-full flex justify-center items-center">
                        <span className="loading loading-spinner loading-xl"></span>
                    </div>
                ) : pendingIssues?.length ? (
                    <PendingTickets
                        // issuePromise={issuePromise}
                        pendingIssues={pendingIssues}
                        ongoingIssues={ongoingIssues}
                        handleOngoingIssues={handleOngoingIssues}
                    ></PendingTickets>
                ) : (
                    <span className="text-gray-400 mt-4">
                        Hooray! There are no tickets left!
                    </span>
                )}
            </div>
            <div className="flex-1 space-y-10">
                <OngoingTickets
                    ongoingIssues={ongoingIssues}
                    resolveIssue={resolveIssue}
                ></OngoingTickets>
                <ResolvedTickets
                    resolvedIssues={resolvedIssues}
                ></ResolvedTickets>
            </div>
        </div>
    );
}
