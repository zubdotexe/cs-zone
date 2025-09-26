import { use } from "react";
import calendarIcon from "./assets/calendarIcon.png";
import "./Issues.css";

export default function Issues({ issuePromise }) {
    const issueData = use(issuePromise);
    console.log(issueData);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {issueData.map((issue) => {
                return (
                    <>
                        <div className="p-4 space-y-3 rounded-sm bg-white hover:bg-gray-50">
                            <div className="flex flex-wrap gap-2 justify-between items-center">
                                <h2 className="font-medium text-xl">
                                    {issue.issue}
                                </h2>
                                <button className={`btn ${issue.status === "Open" ? "statusOpen" : "statusOngoing"} rounded-full`}>
                                    <div className={`w-4 h-4 ${issue.status === "Open" ? "openDot" : "ongoingDot"} rounded-full`}></div>
                                    {issue.status}
                                </button>
                            </div>
                            <p className="text-gray-400">{issue.description}</p>
                            <div className="flex flex-wrap gap-3 justify-between items-center text-sm text-gray-400">
                                <div className="flex flex-wrap gap-3">
                                    <span className="font-semibold">
                                        {issue.id}
                                    </span>
                                    <span
                                        className={`font-medium ${
                                            issue.priority.startsWith("HIGH")
                                                ? "high-priority"
                                                : issue.priority.startsWith(
                                                      "MEDIUM"
                                                  )
                                                ? "med-priority"
                                                : "low-priority"
                                        }`}
                                    >
                                        {issue.priority}
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-3 items-center">
                                    <span>{issue.customer_name}</span>
                                    <span className="flex items-center gap-1">
                                        <img
                                            className="w-5"
                                            src={calendarIcon}
                                            alt="Calendar icon"
                                        />
                                        {issue.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
    );
}
