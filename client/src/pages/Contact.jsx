import { useState } from "react";
import api from "../services/api.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [msg, setMsg] = useState("");

  const onChange = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/contacts", form);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setMsg(err.response?.data?.error || err.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="h1">Contact Us</h1>
      <p className="mt-2 text-slate-600">We'd love to hear from parents and prospective students.</p>
      {sent ? (
        <div className="mt-8 card p-6 bg-brand-50 border-brand-100">
          <p className="text-brand-700 font-medium">Thanks! We'll get back to you shortly.</p>
        </div>
      ) : (
        <form className="mt-8 space-y-4" onSubmit={submit}>
          <div><label className="label">Name</label><input className="input" value={form.name} onChange={onChange("name")} required /></div>
          <div><label className="label">Email</label><input className="input" type="email" value={form.email} onChange={onChange("email")} required /></div>
          <div><label className="label">Subject</label><input className="input" value={form.subject} onChange={onChange("subject")} /></div>
          <div><label className="label">Message</label><textarea className="input" rows="4" value={form.message} onChange={onChange("message")} required /></div>
          <button className="btn-primary" type="submit">Send Message</button>
          {msg && <p className="text-sm text-red-600 mt-2">{msg}</p>}
        </form>
      )}
    </div>
  );
}
