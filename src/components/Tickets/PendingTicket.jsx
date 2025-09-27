import { toast } from "react-toastify";
import calendarIcon from "../../assets/calendarIcon.png";
import "./Issues.css";

export default function PendingTicket({
    issue,
    ongoingIssues,
    handleOngoingIssues,
}) {
    const handleClick = () => {
        const res = ongoingIssues.find((oIssue) => oIssue.id === issue.id);

        if (res) {
            toast.error(
                <span>
                    Ticket <strong>{issue.id}</strong> has already been added to
                    Task Status!
                </span>
            );
            return;
        }

        handleOngoingIssues(issue);

        // toast.success(`Ticket ${issue.id} has been added to the task list!`);
        toast.success(
            <span>
                Ticket <strong>{issue.id}</strong> has been added to Task Status!
            </span>
        );
    };

    return (
        <div
            onClick={handleClick}
            className="animate-right cursor-pointer cardShadow p-4 space-y-3 rounded-sm bg-white hover:bg-gray-50"
        >
            <div className="flex flex-wrap gap-2 justify-between items-center">
                <h2 className="font-medium text-xl">{issue.issue}</h2>
                <button
                    className={`btn ${
                        issue.status === "Open" ? "statusOpen" : "statusOngoing"
                    } rounded-full`}
                >
                    <div
                        className={`w-4 h-4 ${
                            issue.status === "Open" ? "openDot" : "ongoingDot"
                        } rounded-full`}
                    ></div>
                    {issue.status}
                </button>
            </div>
            <p className="text-gray-400">{issue.description}</p>
            <div className="flex flex-wrap gap-3 justify-between items-center text-sm text-gray-400">
                <div className="flex flex-wrap gap-3">
                    <span className="font-semibold">{issue.id}</span>
                    <span
                        className={`font-medium ${
                            issue.priority.startsWith("HIGH")
                                ? "high-priority"
                                : issue.priority.startsWith("MEDIUM")
                                ? "med-priority"
                                : "low-priority"
                        }`}
                    >
                        {issue.priority}
                    </span>
                </div>
                <div className="flex flex-wrap gap-3 items-center">
                    <span>{issue.customer}</span>
                    <span className="flex items-center gap-1">
                        <img
                            className="w-4"
                            src={calendarIcon}
                            alt="Calendar icon"
                        />
                        {issue.createdAt}
                    </span>
                </div>
            </div>
        </div>
    );
}
