import { BookOpen, FileText, Users, BarChart3, PlusCircle } from "lucide-react";

export default function AdminDashboard() {
  const cards = [
    { title: "Add Lesson", text: "Create CfE lessons by level and subject.", icon: BookOpen },
    { title: "Upload Worksheet", text: "Add PDF worksheets for students.", icon: FileText },
    { title: "Manage Users", text: "View students, parents and teachers.", icon: Users },
    { title: "Progress Reports", text: "Track student scores and activity.", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-3xl bg-slate-900 p-8 text-white">
          <p className="text-sm text-slate-300">Smart Start Books</p>
          <h1 className="mt-2 text-4xl font-black">Admin Dashboard</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Manage lessons, worksheets, curriculum topics, users and student progress.
          </p>
        </div>

        <button className="mb-6 flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">
          <PlusCircle className="h-5 w-5" />
          Add New Content
        </button>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="rounded-3xl bg-white p-6 shadow-sm">
                <Icon className="mb-4 h-8 w-8" />
                <h2 className="text-xl font-black">{card.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{card.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">Curriculum Management</h2>
            <div className="mt-5 space-y-3">
              {["Early Level", "First Level", "Second Level", "11+ Preparation"].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                  <span className="font-semibold">{item}</span>
                  <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
                    Edit
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">Recent Admin Tasks</h2>
            <div className="mt-5 space-y-3">
              {[
                "Add P4 fractions worksheet",
                "Review P2 phonics lesson",
                "Upload 11+ verbal reasoning quiz",
                "Check parent progress report",
              ].map((task) => (
                <div key={task} className="rounded-2xl bg-slate-50 p-4 font-medium">
                  {task}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
