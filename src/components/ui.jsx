export function Card({ children, className = "" }) {
  return <div className={`rounded-3xl bg-white shadow-sm ${className}`}>{children}</div>;
}

export function Button({ children, className = "", variant = "", ...props }) {
  const style =
    variant === "outline"
      ? "bg-white text-slate-900 border border-slate-300"
      : "bg-slate-900 text-white border border-slate-900";

  return (
    <button className={`cursor-pointer font-semibold transition ${style} ${className}`} {...props}>
      {children}
    </button>
  );
}
