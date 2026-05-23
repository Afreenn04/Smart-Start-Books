import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, LineChart, PlayCircle, Sparkles, UsersRound } from "lucide-react";
import Layout from "../components/Layout";
import { Button, Card } from "../components/ui";
import { curriculumLevels } from "../data/curriculum";
import { loadLessons } from "../storage";

export default function Home() {
  const lessons = loadLessons();

  return (
    <Layout>
      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm">
              <Sparkles className="h-4 w-4" /> Learn at your own pace
            </div>
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              Scottish CfE learning, organised for children, parents and admins.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Build curriculum pathways, add lessons, open lesson pages and grow Smart Start Books step by step.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/student"><Button className="rounded-2xl px-6 py-4 text-base">Student Portal</Button></Link>
              <Link to="/admin"><Button variant="outline" className="rounded-2xl px-6 py-4 text-base"><PlayCircle className="mr-2 inline h-5 w-5" /> Admin Portal</Button></Link>
            </div>
          </motion.div>

          <Card className="overflow-hidden rounded-[2rem]">
            <div className="bg-slate-900 p-6 text-white">
              <p className="text-sm text-slate-300">Today&apos;s portal</p>
              <h3 className="mt-2 text-2xl font-bold">Smart Start Dashboard</h3>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[`${lessons.length} Lessons`, "4 Levels", "CfE Ready"].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/10 p-4 text-center text-sm font-semibold">{item}</div>
                ))}
              </div>
            </div>
            <div className="space-y-4 p-6">
              {lessons.slice(0, 3).map((lesson) => (
                <Link key={lesson.id} to={`/lessons/${lesson.id}`} className="block rounded-2xl border p-4 hover:bg-slate-50">
                  <p className="font-bold">{lesson.subject}</p>
                  <p className="text-sm text-slate-500">{lesson.title}</p>
                </Link>
              ))}
            </div>
          </Card>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12">
          <p className="font-semibold text-slate-500">Choose your area</p>
          <h2 className="text-3xl font-black">Portals</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              { title: "Student Portal", text: "Open lessons and follow study tasks.", icon: GraduationCap, to: "/student" },
              { title: "Parent Portal", text: "Review progress and worksheets.", icon: UsersRound, to: "/parent" },
              { title: "Admin Portal", text: "Add lessons and manage curriculum.", icon: LineChart, to: "/admin" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.title} to={item.to}>
                  <Card className="p-6 transition hover:-translate-y-1 hover:shadow-lg">
                    <Icon className="mb-4 h-8 w-8" />
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-2 text-slate-600">{item.text}</p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12 pb-20">
          <p className="font-semibold text-slate-500">Curriculum</p>
          <h2 className="text-3xl font-black">CfE pathway</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {curriculumLevels.map((level) => (
              <Link key={level.slug} to={`/curriculum/${level.slug}`}>
                <Card className="p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <BookOpen className="mb-4 h-8 w-8" />
                  <p className="text-sm font-semibold text-slate-500">{level.stage}</p>
                  <h3 className="mt-2 text-xl font-black">{level.level}</h3>
                  <p className="mt-2 text-sm text-slate-600">{level.subjects.length} subject areas</p>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
