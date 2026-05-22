import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  Home,
  LineChart,
  LockKeyhole,
  Menu,
  PlayCircle,
  Search,
  Sparkles,
  Star,
  UsersRound,
} from "lucide-react";

function Card({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function Button({ children, className = "", variant = "", ...props }) {
  const base = "cursor-pointer font-semibold transition";
  const style =
    variant === "outline"
      ? "bg-white text-slate-900 border border-slate-300"
      : "bg-slate-900 text-white border border-slate-900";

  return (
    <button className={`${base} ${style} ${className}`} {...props}>
      {children}
    </button>
  );
}

const plans = [
  "Watch one short lesson",
  "Complete practice questions",
  "Try the mini quiz",
  "Write one thing you learned",
];

const scottishCurriculum = [
  {
    level: "Early Level",
    stage: "Early Years & Primary 1",
    age: "Ages 3-6",
    description: "For nursery, early learning and childcare, and most children in P1.",
    areas: [
      { name: "Literacy & English", topics: ["Listening and talking", "Stories and rhymes", "Sounds and letters", "Early writing", "Sharing ideas"] },
      { name: "Numeracy & Mathematics", topics: ["Counting", "Patterns", "Sorting", "Shapes", "Time and measure"] },
      { name: "Health & Wellbeing", topics: ["Friendships", "Personal safety", "Healthy habits", "Movement", "Emotions"] },
      { name: "Sciences", topics: ["Living things", "Weather", "Materials", "Senses", "Simple questions"] },
    ],
  },
  {
    level: "First Level",
    stage: "Primary 2 to Primary 4",
    age: "Ages 6-9",
    description: "For most children in P2, P3 and P4.",
    areas: [
      { name: "Literacy & English", topics: ["Reading texts", "Writing sentences", "Spelling", "Talking in groups", "Finding information"] },
      { name: "Numeracy & Mathematics", topics: ["Addition", "Subtraction", "Multiplication basics", "Fractions", "Money and time"] },
      { name: "Sciences", topics: ["Plants and animals", "Forces", "Materials", "Sun and moon", "Investigations"] },
      { name: "Technologies", topics: ["Digital skills", "Simple coding", "Design tasks", "Food technology", "Online safety"] },
    ],
  },
  {
    level: "Second Level",
    stage: "Primary 5 to Primary 7",
    age: "Ages 9-12",
    description: "For most children in P5, P6 and P7.",
    areas: [
      { name: "Literacy & English", topics: ["Comprehension", "Creative writing", "Grammar", "Research", "Presenting"] },
      { name: "Numeracy & Mathematics", topics: ["Fractions", "Decimals", "Percentages", "Angles", "Problem solving"] },
      { name: "Sciences", topics: ["Body systems", "Electricity", "Materials", "Space", "Fair tests"] },
      { name: "Social Studies", topics: ["Scottish history", "Maps", "Democracy", "Sustainability", "Global issues"] },
    ],
  },
  {
    level: "11+ Preparation",
    stage: "Optional Entrance Exam Support",
    age: "Ages 9-11",
    description: "Additional preparation pathway outside CfE.",
    areas: [
      { name: "English", topics: ["Comprehension", "Vocabulary", "Grammar", "Creative writing", "Timed practice"] },
      { name: "Mathematics", topics: ["Arithmetic", "Word problems", "Fractions", "Geometry", "Mixed practice"] },
      { name: "Verbal Reasoning", topics: ["Word meanings", "Codes", "Analogies", "Logic", "Timed sets"] },
      { name: "Non-Verbal Reasoning", topics: ["Patterns", "Shapes", "Rotations", "Matrices", "Spatial reasoning"] },
    ],
  },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("All");
  const [activePortal, setActivePortal] = useState("student");
const [selectedLesson, setSelectedLesson] = useState(null);
  const [lessons, setLessons] = useState([
    { title: "Maths: Fractions Made Easy", age: "Ages 8-11", time: "20 min", level: "Beginner", subject: "Maths", progress: 70 },
    { title: "English: Build Better Sentences", age: "Ages 7-10", time: "15 min", level: "Beginner", subject: "English", progress: 45 },
    { title: "Science: The Water Cycle", age: "Ages 8-12", time: "25 min", level: "Intermediate", subject: "Science", progress: 20 },
  ]);

  const [newLesson, setNewLesson] = useState({
    title: "",
    cfeLevel: "Early Level",
    subject: "",
    topic: "",
    description: "",
    time: "20 min",
  });

  function handleAddLesson() {
    if (!newLesson.title || !newLesson.subject) {
      alert("Please add a lesson title and subject.");
      return;
    }

    const lesson = {
      title: newLesson.title,
      age: "Ages 8-12",
      time: newLesson.time || "20 min",
      level: newLesson.cfeLevel,
      subject: newLesson.subject,
      progress: 0,
    };

    setLessons([lesson, ...lessons]);

    setNewLesson({
      title: "",
      cfeLevel: "Early Level",
      subject: "",
      topic: "",
      description: "",
      time: "20 min",
    });
  }

  const filteredLessons = useMemo(() => {
    return lessons.filter((lesson) => {
      const matchesQuery = lesson.title.toLowerCase().includes(query.toLowerCase());
      const matchesSubject = subject === "All" || lesson.subject === subject;
      return matchesQuery && matchesSubject;
    });
  }, [query, subject, lessons]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-slate-900 p-2 text-white">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Smart Start Books</h1>
              <p className="text-xs text-slate-500">Scottish CfE self-study for kids</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#portals">Portals</a>
            <a href="#lessons">Lessons</a>
            <a href="#plan">Study Plan</a>
            <a href="#progress">Progress</a>
            <a href="#curriculum">CfE Syllabus</a>
          </nav>

          <div className="hidden gap-2 md:flex">
            <Button onClick={() => setActivePortal("student")} className="rounded-2xl px-4 py-2">Student</Button>
            <Button onClick={() => setActivePortal("parent")} variant="outline" className="rounded-2xl px-4 py-2">Parent</Button>
            <Button onClick={() => setActivePortal("admin")} variant="outline" className="rounded-2xl px-4 py-2">Admin</Button>
          </div>

          <Menu className="h-6 w-6 md:hidden" />
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm">
              <Sparkles className="h-4 w-4" /> Learn at your own pace
            </div>
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              A smart Scottish learning portal for kids to study, practise, and grow.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              CfE-aligned lessons, quizzes, routines and progress dashboards for children, parents and admins.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-2xl px-6 py-4 text-base">Start Learning</Button>
              <Button variant="outline" className="rounded-2xl px-6 py-4 text-base">
                <PlayCircle className="mr-2 inline h-5 w-5" /> Watch Demo
              </Button>
            </div>
          </motion.div>

          <Card className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
            <CardContent className="p-0">
              <div className="bg-slate-900 p-6 text-white">
                <p className="text-sm text-slate-300">Today&apos;s dashboard</p>
                <h3 className="mt-2 text-2xl font-bold">Welcome back, Ayaan!</h3>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {["3 Lessons", "82% Score", "5 Stars"].map((item) => (
                    <div key={item} className="rounded-2xl bg-white/10 p-4 text-center text-sm font-semibold">{item}</div>
                  ))}
                </div>
              </div>
              <div className="space-y-4 p-6">
                {lessons.slice(0, 3).map((lesson) => (
                  <div key={lesson.title} className="rounded-2xl border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold">{lesson.subject}</p>
                        <p className="text-sm text-slate-500">{lesson.title}</p>
                      </div>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold">{lesson.progress}%</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-slate-100">
                      <div className="h-2 rounded-full bg-slate-900" style={{ width: `${lesson.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="portals" className="mx-auto max-w-7xl px-5 py-12">
          <p className="font-semibold text-slate-500">Portal access</p>
          <h2 className="text-3xl font-black">Choose your dashboard</h2>

          <div className="my-6 flex flex-wrap gap-3">
            {["student", "parent", "admin"].map((portal) => (
              <Button key={portal} onClick={() => setActivePortal(portal)} variant={activePortal === portal ? "" : "outline"} className="rounded-2xl px-5 py-3 capitalize">
                {portal} Portal
              </Button>
            ))}
          </div>

          {activePortal === "student" && (
            <DashboardCard
              icon={<GraduationCap className="h-9 w-9" />}
              title="Student Dashboard"
              text="Children can open lessons, complete quizzes, collect stars and follow a daily study routine."
              items={lessons.slice(0, 4).map((lesson) => lesson.title)}
            />
          )}

          {activePortal === "parent" && (
            <DashboardCard
              icon={<UsersRound className="h-9 w-9" />}
              title="Parent Dashboard"
              text="Parents can review progress, set weekly goals, download worksheets and support steady study habits."
              items={["View child progress", "Set weekly goals", "Download worksheets", "Review quiz scores"]}
            />
          )}

          {activePortal === "admin" && (
            <AdminPortal
              newLesson={newLesson}
              setNewLesson={setNewLesson}
              handleAddLesson={handleAddLesson}
            />
          )}
        </section>

        <section id="lessons" className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-semibold text-slate-500">Lesson library</p>
              <h2 className="text-3xl font-black">Choose a subject and begin</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex items-center gap-2 rounded-2xl border bg-white px-4 py-3 shadow-sm">
                <Search className="h-4 w-4 text-slate-400" />
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search lessons" className="w-full bg-transparent text-sm outline-none" />
              </div>
              <select value={subject} onChange={(e) => setSubject(e.target.value)} className="rounded-2xl border bg-white px-4 py-3 text-sm shadow-sm outline-none">
                {["All", ...new Set(lessons.map((lesson) => lesson.subject))].map((option) => <option key={option}>{option}</option>)}
              </select>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {filteredLessons.map((lesson) => (
              <Card key={`${lesson.title}-${lesson.subject}`} className="rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">{lesson.subject}</p>
                  <h3 className="text-lg font-black">{lesson.title}</h3>
                  <p className="mt-3 text-sm text-slate-500">{lesson.age} • {lesson.time} • {lesson.level}</p>
                  <Button
  onClick={() => setSelectedLesson(lesson)}
  className="mt-6 w-full rounded-2xl py-3"
>
  Open Lesson
</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="plan" className="mx-auto grid max-w-7xl gap-6 px-5 py-12 md:grid-cols-3">
          <Card className="rounded-3xl bg-slate-900 text-white shadow-lg">
            <CardContent className="p-7">
              <CalendarDays className="mb-5 h-9 w-9" />
              <h2 className="text-2xl font-black">Daily study plan</h2>
              <p className="mt-3 text-slate-300">A calm routine helps children learn independently without feeling overwhelmed.</p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl bg-white shadow-sm md:col-span-2">
            <CardContent className="grid gap-4 p-7 sm:grid-cols-2">
              {plans.map((plan, index) => (
                <div key={plan} className="flex items-center gap-4 rounded-2xl border p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 font-black">{index + 1}</div>
                  <p className="font-semibold">{plan}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section id="progress" className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-5 md:grid-cols-4">
            {[
              { icon: CheckCircle2, title: "Completed", value: "18 lessons" },
              { icon: Star, title: "Rewards", value: "42 stars" },
              { icon: LineChart, title: "Average score", value: "84%" },
              { icon: LockKeyhole, title: "Safe portal", value: "Kid-friendly" },
            ].map((item) => (
              <Card key={item.title} className="rounded-3xl bg-white shadow-sm">
                <CardContent className="p-6">
                  <item.icon className="mb-4 h-7 w-7" />
                  <p className="text-sm font-semibold text-slate-500">{item.title}</p>
                  <p className="mt-1 text-2xl font-black">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="parents" className="mx-auto max-w-7xl px-5 py-12">
          <Card className="rounded-[2rem] bg-white shadow-sm">
            <CardContent className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
              <div>
                <UsersRound className="mb-5 h-9 w-9" />
                <h2 className="text-3xl font-black">Parent and teacher corner</h2>
                <p className="mt-4 leading-7 text-slate-600">
                  Add learning goals, review quiz results, assign weekly topics and celebrate consistent effort.
                </p>
              </div>
              <div className="grid gap-3">
                {["Create child profiles", "Upload worksheets", "Set weekly targets", "Download progress reports"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 font-semibold">
                    <Home className="h-5 w-5" /> {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="curriculum" className="mx-auto max-w-7xl px-5 py-12 pb-20">
          <p className="font-semibold text-slate-500">Scottish Curriculum for Excellence</p>
          <h2 className="text-3xl font-black">CfE-aligned syllabus pathway</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Organised by CfE levels. Early Level covers Early Years to P1, First Level covers P2-P4, and Second Level covers P5-P7.
          </p>

          <div className="mt-8 space-y-8">
            {scottishCurriculum.map((level) => (
              <Card key={level.level} className="rounded-[2rem] bg-white shadow-sm">
                <CardContent className="p-7">
                  <p className="text-sm font-bold uppercase tracking-wide text-slate-500">{level.stage} • {level.age}</p>
                  <h3 className="mt-2 text-2xl font-black">{level.level}</h3>
                  <p className="mt-3 max-w-4xl leading-7 text-slate-600">{level.description}</p>

                  <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {level.areas.map((area) => (
                      <div key={`${level.level}-${area.name}`} className="rounded-3xl border bg-white p-5">
                        <h4 className="mb-4 font-black">{area.name}</h4>
                        <div className="space-y-2">
                          {area.topics.map((topic) => (
                            <div key={topic} className="flex items-start gap-2 rounded-2xl bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function DashboardCard({ icon, title, text, items }) {
  return (
    <Card className="rounded-[2rem] bg-white shadow-sm">
      <CardContent className="grid gap-6 p-8 md:grid-cols-3">
        <div>
          {icon}
          <h3 className="mt-4 text-2xl font-black">{title}</h3>
          <p className="mt-3 text-slate-600">{text}</p>
        </div>
        <div className="grid gap-4 md:col-span-2 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="rounded-2xl bg-slate-50 p-5 font-semibold">
              {item}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function AdminPortal({ newLesson, setNewLesson, handleAddLesson }) {
  const curriculumLevels = [
    { level: "Early Level", stage: "Early Years & Primary 1", subjects: ["Literacy", "Numeracy", "Health & Wellbeing", "Sciences"] },
    { level: "First Level", stage: "Primary 2 to Primary 4", subjects: ["Literacy", "Numeracy", "Sciences", "Technologies"] },
    { level: "Second Level", stage: "Primary 5 to Primary 7", subjects: ["Literacy", "Numeracy", "Sciences", "Social Studies"] },
    { level: "11+ Preparation", stage: "Optional Entrance Exam Support", subjects: ["English", "Maths", "Verbal Reasoning", "Non-Verbal Reasoning"] },
  ];

  return (
    <div className="rounded-[2rem] bg-white p-8 shadow-sm">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold text-slate-500">Smart Start Books</p>
          <h2 className="text-3xl font-black">Admin Dashboard</h2>
          <p className="mt-2 text-slate-600">Manage curriculum, lessons, worksheets and student progress.</p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {["Curriculum Management", "Lesson Builder", "Worksheet Uploads", "Student Reports"].map((item) => (
          <div key={item} className="rounded-3xl bg-slate-50 p-6 shadow-sm">
            <h3 className="text-xl font-black">{item}</h3>
            <p className="mt-3 text-sm text-slate-600">Manage and organise portal content.</p>
            <button className="mt-5 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Open</button>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl bg-slate-50 p-6">
        <h3 className="text-2xl font-black">Curriculum Management</h3>
        <p className="mt-2 text-slate-600">Review and organise your CfE levels before creating lessons.</p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {curriculumLevels.map((item) => (
            <div key={item.level} className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">{item.stage}</p>
              <h4 className="mt-2 text-xl font-black">{item.level}</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.subjects.map((subject) => (
                  <span key={subject} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold">{subject}</span>
                ))}
              </div>
              <button className="mt-5 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Edit Level</button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-3xl bg-slate-50 p-6">
        <h3 className="text-2xl font-black">Add New Lesson</h3>
        <p className="mt-2 text-slate-600">Create a lesson by CfE level, subject and topic.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <input
            className="rounded-2xl border bg-white px-4 py-3 outline-none"
            placeholder="Lesson title"
            value={newLesson.title}
            onChange={(e) => setNewLesson({ ...newLesson, title: e.target.value })}
          />

          <select
            className="rounded-2xl border bg-white px-4 py-3 outline-none"
            value={newLesson.cfeLevel}
            onChange={(e) => setNewLesson({ ...newLesson, cfeLevel: e.target.value })}
          >
            <option>Early Level</option>
            <option>First Level</option>
            <option>Second Level</option>
            <option>11+ Preparation</option>
          </select>

          <input
            className="rounded-2xl border bg-white px-4 py-3 outline-none"
            placeholder="Subject e.g. Maths"
            value={newLesson.subject}
            onChange={(e) => setNewLesson({ ...newLesson, subject: e.target.value })}
          />

          <input
            className="rounded-2xl border bg-white px-4 py-3 outline-none"
            placeholder="Topic e.g. Fractions"
            value={newLesson.topic}
            onChange={(e) => setNewLesson({ ...newLesson, topic: e.target.value })}
          />
        </div>

        <textarea
          className="mt-4 min-h-32 w-full rounded-2xl border bg-white px-4 py-3 outline-none"
          placeholder="Lesson description"
          value={newLesson.description}
          onChange={(e) => setNewLesson({ ...newLesson, description: e.target.value })}
        />

        <input
          className="mt-4 w-full rounded-2xl border bg-white px-4 py-3 outline-none"
          placeholder="Lesson time e.g. 20 min"
          value={newLesson.time}
          onChange={(e) => setNewLesson({ ...newLesson, time: e.target.value })}
        />

        <button onClick={handleAddLesson} className="mt-5 rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">
          Save Lesson
        </button>
      </div>
    </div>
  );
}
