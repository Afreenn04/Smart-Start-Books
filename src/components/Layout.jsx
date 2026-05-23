import { Link, NavLink } from "react-router-dom";
import { GraduationCap, Menu } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/student", label: "Student" },
  { to: "/parent", label: "Parent" },
  { to: "/admin", label: "Admin" },
  { to: "/curriculum", label: "Curriculum" },
  { to: "/lessons", label: "Lessons" },
];

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="rounded-2xl bg-slate-900 p-2 text-white">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Smart Start Books</h1>
              <p className="text-xs text-slate-500">Scottish CfE self-study for kids</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "font-bold text-slate-950" : "hover:text-slate-950"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Menu className="h-6 w-6 md:hidden" />
        </div>
      </header>
      {children}
    </div>
  );
}
