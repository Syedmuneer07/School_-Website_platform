import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Achievements from "../pages/Achievements.jsx";
import Results from "../pages/Results.jsx";
import Alumni from "../pages/Alumni.jsx";
import Events from "../pages/Events.jsx";
import Contact from "../pages/Contact.jsx";
import AdminLogin from "../pages/AdminLogin.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import { useAuth } from "../context/AuthContext.jsx";

function Protected({ children }) {
  const { user, ready } = useAuth();
  if (!ready) return null;
  return user ? children : <Navigate to="/admin/login" replace />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/results" element={<Results />} />
      <Route path="/alumni" element={<Alumni />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<Protected><Dashboard /></Protected>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
