import { useEffect, useState } from "react";
import api from "../services/api.js";
import Loader from "../components/Loader.jsx";

export default function Events() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => { api.get("/events").then(r=>setItems(r.data)).finally(()=>setLoading(false)); }, []);
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="h1">Events & Announcements</h1>
      {loading ? <Loader /> : (
        <ul className="mt-8 space-y-4">
          {items.map(e => (
            <li key={e.id} className="card p-5 flex gap-4">
              <div className="w-16 text-center shrink-0">
                <div className="text-xs uppercase text-brand-600 font-semibold">{new Date(e.date).toLocaleString("en", { month: "short" })}</div>
                <div className="text-2xl font-bold text-slate-900">{new Date(e.date).getDate()}</div>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{e.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{e.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
