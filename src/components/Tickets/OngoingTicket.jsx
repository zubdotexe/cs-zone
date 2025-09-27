import { toast } from "react-toastify";

export default function OngoingTicket({oIssue, resolveIssue}) {
    const handleComplete = () => {
        toast.success(<span>Ticket <strong>{oIssue.id}</strong> has been resolved!</span>);
        resolveIssue(oIssue);
    };

    return (
        <div className="bg-white hover:bg-gray-50 p-4 rounded-sm space-y-4 mb-4">
            <h3 className="font-medium text-xl text-black">{oIssue.issue}</h3>
            <button onClick={handleComplete} className="w-full btn bg-[#02A53B] font-semibold text-white">
                Complete
            </button>
        </div>
    );
}
