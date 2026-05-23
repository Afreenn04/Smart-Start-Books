import { Link } from "react-router-dom";
import { GraduationCap, Star } from "lucide-react";
import Layout from "../components/Layout";
import { Card } from "../components/ui";
import { loadLessons } from "../storage";

export default function Student() {
  const lessons = loadLessons();

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 py-12">
        <div className="rounded-[2rem] bg-slate-900 p-8 text-white">
          <GraduationCap className="h-10 w-10" />
          <h1 className="mt-4 text-4xl font-black">Student Portal</h1>
          <p className="mt-3 text-slate-300">Open lessons, complete activities and build steady learning habits.</p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Card className="p-6"><p className="text-sm text-slate-500">Available Lessons</p><h2 className="mt-1 text-3xl font-black">{lessons.length}</h2></Card>
          <Card className="p-6"><p className="text-sm text-slate-500">Stars</p><h2 className="mt-1 text-3xl font-black">12</h2></Card>
          <Card className="p-6"><p className="text-sm text-slate-500">Progress</p><h2 className="mt-1 text-3xl font-black">Starting</h2></Card>
        </div>

        <section className="mt-8">
          <h2 className="text-2xl font-black">Continue Learning</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {lessons.map((lesson) => (
              <Link key={lesson.id} to={`/lessons/${lesson.id}`}>
                <Card className="p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <Star className="mb-4 h-7 w-7" />
                  <p className="text-sm font-semibold text-slate-500">{lesson.subject}</p>
                  <h3 className="mt-2 text-xl font-black">{lesson.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{lesson.time} • {lesson.level}</p>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
