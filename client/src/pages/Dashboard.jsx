import { useEffect, useState } from "react";
import api from "../services/api.js";
import { useAuth } from "../context/AuthContext.jsx";

const tabs = ["achievements", "results", "alumni", "events", "contacts"];

const blank = {
  achievements: { student_name:"", title:"", description:"", image_url:"" },
  results:      { student_name:"", roll_number:"", subject:"", marks:0 },
  alumni:       { name:"", company:"", role:"", story:"" },
  events:       { title:"", description:"", date:"" },
  contacts:     { name:"", email:"", subject:"", message:"" },
};

export default function Dashboard() {
  const { user } = useAuth();
  const [tab, setTab] = useState("achievements");
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(blank.achievements);
  const [msg, setMsg] = useState("");
  const [editingId, setEditingId] = useState(null);

  const load = async () => {
    const { data } = await api.get(`/${tab}`);
    setItems(data);
  };

  useEffect(() => { setForm(blank[tab]); setMsg(""); setEditingId(null); load(); /* eslint-disable-next-line */ }, [tab]);

  const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/${tab}/${editingId}`, form);
        setMsg("Updated ✓");
      } else {
        await api.post(`/${tab}`, form);
        setMsg("Saved ✓");
      }
      setForm(blank[tab]); setEditingId(null); load();
    } catch (e) { setMsg(e.response?.data?.error || e.message); }
  };

  const edit = (item) => {
    setForm(item);
    setEditingId(item.id);
    setMsg("");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="h1">Admin Dashboard</h1>
          <p className="text-sm text-slate-500">Signed in as <b>{user?.username}</b></p>
        </div>
      </div>

      <div className="mt-6 flex gap-2 flex-wrap">
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-3 py-1.5 rounded-md text-sm font-medium capitalize ${tab===t ? "bg-ink-600 text-white" : "bg-white border border-slate-200 text-slate-700"}`}>
            {t}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <div className="card p-6">
          <h2 className="h2 capitalize">{editingId ? "Edit" : "Add"} {tab.slice(0,-1)}</h2>
          <form className="mt-4 space-y-3" onSubmit={submit}>
            {Object.keys(blank[tab]).map(k => (
              <div key={k}>
                <label className="label capitalize">{k.replace("_"," ")}</label>
                <input
                  className="input"
                  type={k==="date" ? "date" : k==="marks" ? "number" : "text"}
                  value={form[k]} onChange={onChange(k)} required={k!=="description" && k!=="image_url" && k!=="story" && k!=="company" && k!=="role"} />
              </div>
            ))}
            <div className="flex gap-2">
              <button className="btn-accent">{editingId ? "Update" : "Save"}</button>
              {editingId && <button type="button" onClick={() => { setForm(blank[tab]); setEditingId(null); setMsg(""); }} className="btn-ghost">Cancel</button>}
            </div>
            {msg && <p className="text-sm text-slate-600">{msg}</p>}
          </form>
        </div>

        <div className="card p-6">
          <h2 className="h2 capitalize">{tab}</h2>
          <ul className="mt-4 divide-y divide-slate-100">
            {items.map(it => (
              <li key={it.id} className="py-3 flex items-start justify-between gap-4">
                <div>
                  <div className="font-medium text-slate-900">{it.title || it.name || it.student_name}</div>
                  <div className="text-sm text-slate-500">{it.student_name || it.company || it.roll_number || it.email || (it.date && new Date(it.date).toDateString())}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={()=>edit(it)} className="text-sm text-blue-600 hover:underline">Edit</button>
                  <button onClick={()=>remove(it.id)} className="text-sm text-red-600 hover:underline">Delete</button>
                </div>
              </li>
            ))}
            {items.length===0 && <li className="text-sm text-slate-500 py-3">No entries yet.</li>}
          </ul>
        </div>
      </div> 
    </div>
  );
}
