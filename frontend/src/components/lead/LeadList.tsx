import LeadItem from "./LeadItem";

type Lead = {
  id: string;
  name: string;
  email: string;
  status: string;
};

type Props = {
  leads: Lead[];
};

export default function LeadList({ leads }: Props) {
  return (
    <div className="bg-gray-50 border rounded-xl p-5">
      <h2 className="text-sm font-semibold text-gray-700 mb-4">
        Leads ({leads.length})
      </h2>
      {leads.length === 0 ? (
        <p className="text-sm text-gray-400">No leads yet</p>
      ) : (
        leads.map((lead) => <LeadItem key={lead.id} lead={lead} />)
      )}
    </div>
  );
}
