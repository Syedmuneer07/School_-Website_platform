export default function Loader({ label = "Loading..." }) {
  return (
    <div className="flex items-center justify-center py-16 text-slate-500">
      <div className="w-6 h-6 border-2 border-ink-600 border-t-transparent rounded-full animate-spin mr-3" />
      {label}
    </div>
  );
}
