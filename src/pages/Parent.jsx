import { UsersRound } from "lucide-react";
import Layout from "../components/Layout";
import { Card } from "../components/ui";
import { loadLessons } from "../storage";

export default function Parent() {
  const lessons = loadLessons();

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 py-12">
        <div className="rounded-[2rem] bg-slate-900 p-8 text-white">
          <UsersRound className="h-10 w-10" />
          <h1 className="mt-4 text-4xl font-black">Parent Portal</h1>
          <p className="mt-3 text-slate-300">Review lessons, weekly goals and worksheet plans.</p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Card className="p-6"><p className="text-sm text-slate-500">Lessons Available</p><h2 className="mt-1 text-3xl font-black">{lessons.length}</h2></Card>
          <Card className="p-6"><p className="text-sm text-slate-500">Weekly Goal</p><h2 className="mt-1 text-3xl font-black">3 lessons</h2></Card>
          <Card className="p-6"><p className="text-sm text-slate-500">Reports</p><h2 className="mt-1 text-3xl font-black">Coming next</h2></Card>
        </div>

        <Card className="mt-8 p-6">
          <h2 className="text-2xl font-black">Parent Actions</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {["View child progress", "Set weekly goals", "Download worksheets", "Review quiz scores"].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-4 font-semibold">{item}</div>
            ))}
          </div>
        </Card>
      </main>
    </Layout>
  );
}
