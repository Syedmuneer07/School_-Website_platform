import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function AdminLogin() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [username, setU] = useState("admin");
  const [password, setP] = useState("admin123");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault(); setErr(""); setBusy(true);
    try { await login(username, password); nav("/admin"); }
    catch (e) { setErr(e.response?.data?.error || e.message); }
    finally { setBusy(false); }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="card p-8">
        <h1 className="h2">Admin Login</h1>
        <p className="text-sm text-slate-500 mt-1">Default: <code>admin / admin123</code></p>
        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <div><label className="label">Username</label><input className="input" value={username} onChange={e=>setU(e.target.value)} /></div>
          <div><label className="label">Password</label><input className="input" type="password" value={password} onChange={e=>setP(e.target.value)} /></div>
          {err && <p className="text-sm text-red-600">{err}</p>}
          <button disabled={busy} className="btn-primary w-full">{busy ? "Signing in..." : "Sign In"}</button>
        </form>
      </div>
    </div>
  );
}
