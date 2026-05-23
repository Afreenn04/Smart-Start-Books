import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import Layout from "../components/Layout";
import { Card } from "../components/ui";
import { loadLessons } from "../storage";

export default function Lessons() {
  const lessons = loadLessons();

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 py-12">
        <p className="font-semibold text-slate-500">Lesson Library</p>
        <h1 className="text-4xl font-black">Open a lesson</h1>
        <p className="mt-3 max-w-3xl text-slate-600">Lessons added in Admin appear here. Click a lesson to open its own page.</p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => (
            <Link key={lesson.id} to={`/lessons/${lesson.id}`}>
              <Card className="p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <BookOpen className="mb-4 h-8 w-8" />
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{lesson.subject}</p>
                <h2 className="mt-2 text-xl font-black">{lesson.title}</h2>
                <p className="mt-3 text-sm text-slate-500">{lesson.age} • {lesson.time} • {lesson.level}</p>
                <span className="mt-5 inline-block rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Open Lesson</span>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
