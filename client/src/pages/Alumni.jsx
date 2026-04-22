import { useEffect, useState } from "react";
import api from "../services/api.js";
import Card from "../components/Card.jsx";
import Loader from "../components/Loader.jsx";

export default function Alumni() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => { api.get("/alumni").then(r=>setItems(r.data)).finally(()=>setLoading(false)); }, []);
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="h1">Alumni Stories</h1>
      <p className="mt-2 text-slate-600">Where our graduates are making an impact.</p>
      {loading ? <Loader /> : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {items.map(a => (
            <Card key={a.id} subtitle={`${a.role || ""} ${a.company ? "· " + a.company : ""}`} title={a.name}>
              {a.story}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
