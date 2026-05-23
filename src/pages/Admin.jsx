import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, FileText, LineChart, UsersRound } from "lucide-react";
import Layout from "../components/Layout";
import { Button, Card } from "../components/ui";
import { curriculumLevels } from "../data/curriculum";
import { loadLessons, saveLessons } from "../storage";

export default function Admin() {
  const [lessons, setLessons] = useState(loadLessons);
  const [newLesson, setNewLesson] = useState({
    title: "",
    level: "Early Level",
    subject: "Numeracy & Mathematics",
    topic: "",
    time: "15 min",
    age: "Ages 3-6",
    description: "",
    activitiesText: "",
  });

  useEffect(() => {
    saveLessons(lessons);
  }, [lessons]);

  function handleAddLesson(event) {
    event.preventDefault();
    if (!newLesson.title.trim() || !newLesson.subject.trim()) return;

    const lesson = {
      id: `${Date.now()}-${newLesson.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      title: newLesson.title,
      level: newLesson.level,
      subject: newLesson.subject,
      topic: newLesson.topic,
      time: newLesson.time,
      age: newLesson.age,
      description: newLesson.description,
      progress: 0,
      activities: newLesson.activitiesText
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),
    };

    setLessons([lesson, ...lessons]);
    setNewLesson({
      title: "",
      level: "Early Level",
      subject: "Numeracy & Mathematics",
      topic: "",
      time: "15 min",
      age: "Ages 3-6",
      description: "",
      activitiesText: "",
    });
  }

  function deleteLesson(id) {
    setLessons(lessons.filter((lesson) => lesson.id !== id));
  }

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 py-12">
        <div className="rounded-[2rem] bg-slate-900 p-8 text-white">
          <p className="text-sm text-slate-300">Smart Start Books</p>
          <h1 className="mt-2 text-4xl font-black">Admin Portal</h1>
          <p className="mt-3 max-w-3xl text-slate-300">
            Manage curriculum pages, add lessons, and review saved content. Lessons save in this browser using local storage.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Curriculum", icon: BookOpen, to: "/curriculum" },
            { title: "Lesson Builder", icon: FileText, to: "#lesson-builder" },
            { title: "Students", icon: UsersRound, to: "/student" },
            { title: "Reports", icon: LineChart, to: "/parent" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.title} to={item.to}>
                <Card className="p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <Icon className="mb-4 h-8 w-8" />
                  <h2 className="text-xl font-black">{item.title}</h2>
                  <p className="mt-2 text-sm text-slate-600">Open {item.title.toLowerCase()} tools.</p>
                </Card>
              </Link>
            );
          })}
        </div>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">Curriculum Management</h2>
          <p className="mt-2 text-slate-600">Open each level in a separate page and update curriculum step by step.</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {curriculumLevels.map((level) => (
              <Link key={level.slug} to={`/curriculum/${level.slug}`} className="rounded-3xl bg-slate-50 p-6 transition hover:bg-slate-100">
                <p className="text-sm font-semibold text-slate-500">{level.stage}</p>
                <h3 className="mt-2 text-xl font-black">{level.level}</h3>
                <p className="mt-2 text-sm text-slate-600">{level.subjects.length} subject areas</p>
                <span className="mt-4 inline-block rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Open Level</span>
              </Link>
            ))}
          </div>
        </section>

        <section id="lesson-builder" className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">Add New Lesson</h2>
          <p className="mt-2 text-slate-600">Create a lesson here. It will appear on the Lessons page and Student Portal.</p>

          <form onSubmit={handleAddLesson} className="mt-6 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="Lesson title" value={newLesson.title} onChange={(e) => setNewLesson({ ...newLesson, title: e.target.value })} />
              <select className="rounded-2xl border bg-white px-4 py-3 outline-none" value={newLesson.level} onChange={(e) => setNewLesson({ ...newLesson, level: e.target.value })}>
                {curriculumLevels.map((level) => <option key={level.level}>{level.level}</option>)}
              </select>
              <input className="rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="Subject" value={newLesson.subject} onChange={(e) => setNewLesson({ ...newLesson, subject: e.target.value })} />
              <input className="rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="Topic e.g. Counting" value={newLesson.topic} onChange={(e) => setNewLesson({ ...newLesson, topic: e.target.value })} />
              <input className="rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="Age e.g. Ages 3-6" value={newLesson.age} onChange={(e) => setNewLesson({ ...newLesson, age: e.target.value })} />
              <input className="rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="Lesson time e.g. 15 min" value={newLesson.time} onChange={(e) => setNewLesson({ ...newLesson, time: e.target.value })} />
            </div>
            <textarea className="min-h-28 w-full rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="Lesson description" value={newLesson.description} onChange={(e) => setNewLesson({ ...newLesson, description: e.target.value })} />
            <textarea className="min-h-28 w-full rounded-2xl border bg-white px-4 py-3 outline-none" placeholder={"Activities, one per line\nCount 10 toys\nDraw 10 dots"} value={newLesson.activitiesText} onChange={(e) => setNewLesson({ ...newLesson, activitiesText: e.target.value })} />
            <Button className="rounded-2xl px-5 py-3">Save Lesson</Button>
          </form>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">Saved Lessons</h2>
          <div className="mt-6 space-y-3">
            {lessons.map((lesson) => (
              <div key={lesson.id} className="flex flex-col justify-between gap-3 rounded-2xl bg-slate-50 p-4 md:flex-row md:items-center">
                <div>
                  <p className="font-black">{lesson.title}</p>
                  <p className="text-sm text-slate-500">{lesson.level} • {lesson.subject} • {lesson.time}</p>
                </div>
                <div className="flex gap-2">
                  <Link to={`/lessons/${lesson.id}`} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Open</Link>
                  <button onClick={() => deleteLesson(lesson.id)} className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
