import { useEffect, useState } from "react";
import api from "../services/api.js";
import Card from "../components/Card.jsx";
import Loader from "../components/Loader.jsx";

export default function Achievements() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    api.get("/achievements")
      .then(r => setItems(r.data))
      .catch(e => setErr(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="h1">Student Achievements</h1>
      <p className="mt-2 text-slate-600">Celebrating our students' hard work and success.</p>
      {loading ? <Loader /> : err ? <p className="text-red-600 mt-6">{err}</p> : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {items.map(a => (
            <Card key={a.id} image={a.image_url} subtitle={a.student_name} title={a.title}>
              {a.description}
            </Card>
          ))}
          {items.length === 0 && <p className="text-slate-500">No achievements yet.</p>}
        </div>
      )}
    </div>
  );
}
