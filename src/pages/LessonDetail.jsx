import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Layout from "../components/Layout";
import { Button, Card } from "../components/ui";
import { loadLessons } from "../storage";

export default function LessonDetail() {
  const { id } = useParams();
  const lessons = loadLessons();
  const lesson = lessons.find((item) => item.id === id);

  if (!lesson) {
    return (
      <Layout>
        <main className="mx-auto max-w-5xl px-5 py-12">
          <h1 className="text-3xl font-black">Lesson not found</h1>
          <Link to="/lessons" className="mt-4 inline-block font-semibold underline">Back to lessons</Link>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="mx-auto max-w-5xl px-5 py-12">
        <Link to="/lessons" className="mb-6 inline-flex items-center gap-2 font-semibold text-slate-600 hover:text-slate-950">
          <ArrowLeft className="h-4 w-4" /> Back to lessons
        </Link>

        <Card className="p-8">
          <p className="text-sm font-semibold text-slate-500">{lesson.level} • {lesson.subject}</p>
          <h1 className="mt-2 text-4xl font-black">{lesson.title}</h1>
          <p className="mt-3 text-slate-600">{lesson.age} • {lesson.time}</p>
        </Card>

        <Card className="mt-8 p-8">
          <h2 className="text-2xl font-black">Lesson Overview</h2>
          <p className="mt-4 leading-7 text-slate-700">
            {lesson.description || "Add a lesson description from the Admin Portal."}
          </p>
        </Card>

        <Card className="mt-8 p-8">
          <h2 className="text-2xl font-black">Activities</h2>
          <div className="mt-5 space-y-3">
            {(lesson.activities?.length ? lesson.activities : ["Watch lesson video", "Complete worksheet", "Try mini quiz", "Mark as completed"]).map((activity) => (
              <div key={activity} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 font-semibold">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                <span>{activity}</span>
              </div>
            ))}
          </div>
          <Button className="mt-6 rounded-2xl px-5 py-3">Mark as Completed</Button>
        </Card>
      </main>
    </Layout>
  );
}
