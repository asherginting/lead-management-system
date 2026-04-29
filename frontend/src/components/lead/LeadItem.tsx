type Lead = {
  id: string;
  name: string;
  email: string;
  status: string;
};

export default function LeadItem({ lead }: { lead: Lead }) {
  return (
    <div className="flex justify-between items-center py-4 border-b last:border-none">
      <div>
        <p className="text-sm font-medium text-gray-900">{lead.name}</p>
        <p className="text-xs text-gray-500">{lead.email}</p>
      </div>
      <span className="text-xs text-gray-600">{lead.status}</span>
    </div>
  );
}
