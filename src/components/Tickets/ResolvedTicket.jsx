export default function ResolvedTicket({ rIssue }) {
    return (
        <div className="bg-[#E0E7FF] px-4 py-5 rounded-sm mb-4">
            <h3 className="font-medium text-xl text-black">{rIssue.issue}</h3>
        </div>
    );
}
