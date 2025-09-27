export default function ResolvedTicket({ rIssue }) {
    return (
        <div className="animate-left cardShadow bg-[#E0E7FF] hover:bg-[#dae1f9] px-4 py-5 rounded-sm">
            <h3 className="font-medium text-xl text-black">{rIssue.issue}</h3>
        </div>
    );
}
