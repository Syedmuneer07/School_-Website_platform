import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const links = [
  ["/", "Home"], ["/achievements", "Achievements"], ["/results", "Results"],
  ["/alumni", "Alumni"], ["/events", "Events"], ["/contact", "Contact"],
];

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-ink-600 to-brand-600 grid place-items-center text-white font-bold">S</div>
          <span className="font-bold text-slate-900">Your School Name</span>
        </Link>
        <nav className="hidden md:flex gap-1">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to==="/"} className={({isActive}) =>
              `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "text-ink-700 bg-ink-50" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`
            }>{label}</NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <Link to="/admin" className="btn-ghost text-sm">Dashboard</Link>
              <button onClick={logout} className="btn-primary text-sm">Logout</button>
            </>
          ) : (
            <Link to="/admin/login" className="btn-primary text-sm">Admin</Link>
          )}
        </div>
      </div>
    </header>
  );
}
