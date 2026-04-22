export default function Card({ image, title, subtitle, children, footer }) {
  return (
    <div className="card hover:shadow-md transition">
      {image && <img src={image} alt={title} className="w-full h-44 object-cover" />}
      <div className="p-5">
        {subtitle && <div className="text-xs uppercase tracking-wide text-brand-600 font-semibold">{subtitle}</div>}
        <h3 className="mt-1 font-semibold text-slate-900">{title}</h3>
        {children && <p className="mt-2 text-sm text-slate-600">{children}</p>}
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
  );
}
