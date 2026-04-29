type Props = {
  label: string;
  children: React.ReactNode;
  error?: string;
};

export default function Field({ label, children, error }: Props) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
