export default function OngoingTickets({ongoingIssues}) {
    return (
        <div>
            <h1 className="font-semibold text-2xl text-gray-600">
                Task Status
            </h1>
            <div className="pt-4">
                <p className="text-gray-400">
                    {
                        ongoingIssues.length 
                        ? ongoingIssues.map(oIssue => {
                            return (
                                <div className="bg-white p-4 rounded-sm space-y-4 mb-4">
                                    <h3 className="font-medium text-xl text-black">{oIssue.issue}</h3>
                                    <button className="w-full btn bg-[#02A53B] font-semibold text-white">Complete</button>
                                </div>
                            )
                        }) 
                        : "Select a ticket to add to Task Status"
                    }
                </p>
            </div>
        </div>
    );
}
