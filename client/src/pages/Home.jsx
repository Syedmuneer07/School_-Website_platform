import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-ink-700 via-ink-600 to-brand-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <p className="uppercase tracking-widest text-white/80 text-sm">Your School Name</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">Excellence in education,<br/>character for life.</h1>
          <p className="mt-4 max-w-xl text-white/90">A nurturing campus where curious minds become confident leaders.</p>
          <div className="mt-8 flex gap-3">
            <Link to="/achievements" className="btn bg-white text-ink-700 hover:bg-slate-100">See Achievements</Link>
            <Link to="/results" className="btn border border-white/30 text-white hover:bg-white/10">Check Results</Link>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-6">
        {[
          ["Holistic Curriculum","Academics, sports, arts and values — balanced for every learner."],
          ["Experienced Faculty","Mentors who guide students well beyond the textbook."],
          ["Modern Campus","Smart classrooms, labs, library and safe transport."],
        ].map(([t,d]) => (
          <div key={t} className="card p-6">
            <div className="w-10 h-10 rounded-md bg-brand-100 text-brand-700 grid place-items-center font-bold">★</div>
            <h3 className="mt-4 font-semibold text-slate-900">{t}</h3>
            <p className="mt-2 text-sm text-slate-600">{d}</p>
          </div>
        ))}
      </section>
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-600">About Us</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink-900">A learning community built on purpose and care</h2>
            <p className="mt-4 text-slate-600 text-base md:text-lg">We provide a safe, inspiring environment where every student can grow academically, socially, and emotionally. Our curriculum blends strong academics with character-building programs, so learners thrive with confidence and compassion.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Mission","To empower each learner with knowledge, creativity, and leadership for a bright future."],
              ["Vision","A school community where curiosity, respect, and excellence shape every student."],
              ["Values","Integrity, kindness, lifelong learning, and community engagement guide all we do."],
            ].map(([title, detail]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-ink-900">{title}</h3>
                <p className="mt-3 text-slate-600 text-sm">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-600">Leadership & Faculty</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-ink-900">Meet the team guiding our school</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base md:text-lg">Our leadership and faculty work together to create a supportive, high-performing school that puts students first.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Anita Sharma", role: "Owner", detail: "Steers the school vision, values, and long-term growth.", initials: "AS", color: "bg-brand-100 text-brand-700" },
            { name: "Dr. Rohit Mehta", role: "Principal", detail: "Oversees academic quality, student support and faculty development.", initials: "RM", color: "bg-ink-100 text-ink-700" },
            { name: "Priya Nair", role: "President", detail: "Builds community partnerships and represents school interests.", initials: "PN", color: "bg-violet-100 text-violet-700" },
            { name: "Mr. Sameer Jain", role: "Administrator", detail: "Manages operations, facilities, and day-to-day school services.", initials: "SJ", color: "bg-emerald-100 text-emerald-700" },
            { name: "Trustee Panel", role: "Trustees", detail: "Provides governance, accountability, and strategic oversight.", initials: "TP", color: "bg-slate-100 text-slate-700" },
            { name: "Faculty Team", role: "Senior Faculty", detail: "Designs learning experiences and mentors every student journey.", initials: "FT", color: "bg-orange-100 text-orange-700" },
          ].map((member) => (
            <div key={member.role} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${member.color} font-semibold`}>{member.initials}</div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{member.role}</p>
                  <h3 className="mt-2 text-xl font-semibold text-ink-900">{member.name}</h3>
                </div>
              </div>
              <p className="mt-5 text-slate-600 text-sm leading-6">{member.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
