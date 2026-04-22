export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="font-bold text-white text-base">Your School Name</div>
          <p className="mt-2 text-slate-400">Empowering students for a brighter tomorrow.</p>
        </div>
        <div>
          <div className="font-semibold text-white">Contact</div>
          <p className="mt-2">123 School Lane, Your City</p>
          <p>info@yourschool.edu · +91 00000 00000</p>
        </div>
        <div>
          <div className="font-semibold text-white">Hours</div>
          <p className="mt-2">Mon–Fri · 8:00 AM – 4:00 PM</p>
        </div>
      </div>
      <div className="border-t border-slate-800 text-center text-xs py-4 text-slate-500">
        © {new Date().getFullYear()} Your School Name. All rights reserved.
      </div>
    </footer>
  );
}
