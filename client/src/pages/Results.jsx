import { useState } from "react";
import api from "../services/api.js";
import Loader from "../components/Loader.jsx";

export default function Results() {
  const [roll, setRoll] = useState("");
  const [rows, setRows] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const search = async (e) => {
    e.preventDefault();
    if (!roll.trim()) return;
    setLoading(true); setErr(""); setRows(null);
    try {
      const { data } = await api.get(`/results/${encodeURIComponent(roll.trim())}`);
      setRows(data);
    } catch (e) {
      setErr(e.response?.data?.error || e.message);
    } finally { setLoading(false); }
  };

  const total = rows?.reduce((s, r) => s + r.marks, 0) ?? 0;
  const max = (rows?.length ?? 0) * 100;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="h1">Exam Results</h1>
      <p className="mt-2 text-slate-600">Enter your roll number to view your subject-wise marks.</p>
      <form onSubmit={search} className="mt-6 flex gap-2">
        <input className="input" placeholder="e.g. R001" value={roll} onChange={e=>setRoll(e.target.value)} />
        <button className="btn-primary" type="submit">Search</button>
      </form>

      {loading && <Loader />}
      {err && <p className="text-red-600 mt-6">{err}</p>}

      {rows && rows.length > 0 && (
        <div className="card mt-8 p-0">
          <div className="px-5 py-4 border-b border-slate-200">
            <div className="font-semibold text-slate-900">{rows[0].student_name}</div>
            <div className="text-sm text-slate-500">Roll Number: {rows[0].roll_number}</div>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr><th className="text-left px-5 py-3">Subject</th><th className="text-right px-5 py-3">Marks</th><th className="text-right px-5 py-3">Out of</th></tr>
            </thead>
            <tbody>
              {rows.map(r => (
                <tr key={r.id} className="border-t border-slate-100">
                  <td className="px-5 py-3">{r.subject}</td>
                  <td className="px-5 py-3 text-right font-medium">{r.marks}</td>
                  <td className="px-5 py-3 text-right text-slate-500">100</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-slate-50 font-semibold">
              <tr><td className="px-5 py-3">Total</td><td className="px-5 py-3 text-right">{total}</td><td className="px-5 py-3 text-right">{max}</td></tr>
              <tr><td className="px-5 py-3">Percentage</td><td colSpan="2" className="px-5 py-3 text-right text-brand-700">{((total/max)*100).toFixed(2)}%</td></tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
}
