import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, CalendarDays, CheckCircle2, GraduationCap, Home, LineChart, LockKeyhole, Menu, PlayCircle, Search, Sparkles, Star, UsersRound } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const lessons = [
  { title: "Maths: Fractions Made Easy", age: "Ages 8-11", time: "20 min", level: "Beginner", subject: "Maths", progress: 70 },
  { title: "English: Build Better Sentences", age: "Ages 7-10", time: "15 min", level: "Beginner", subject: "English", progress: 45 },
  { title: "Science: The Water Cycle", age: "Ages 8-12", time: "25 min", level: "Intermediate", subject: "Science", progress: 20 },
  { title: "Coding: First Steps with Logic", age: "Ages 10-13", time: "30 min", level: "Beginner", subject: "Coding", progress: 10 },
];

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
    description: "For nursery, early learning and childcare, and most children in P1. Learning is play-based, practical, and built around confidence, curiosity, communication and early skills.",
    areas: [
      {
        name: "Literacy & English",
        topics: ["Listening and talking", "Enjoying stories, songs and rhymes", "Recognising sounds and letters", "Early mark-making and writing", "Sharing ideas and feelings"]
      },
      {
        name: "Numeracy & Mathematics",
        topics: ["Counting and ordering numbers", "Recognising patterns", "Sorting and matching", "Shape, position and movement", "Early money, time and measure"]
      },
      {
        name: "Health & Wellbeing",
        topics: ["Friendships and turn-taking", "Personal safety", "Food, health and hygiene", "Movement and coordination", "Emotional wellbeing"]
      },
      {
        name: "Sciences",
        topics: ["Living things", "Weather and seasons", "Water and materials", "Using senses to explore", "Asking simple questions"]
      },
      {
        name: "Social Studies",
        topics: ["People who help us", "Family and community", "Local places", "Past and present", "Caring for the environment"]
      },
      {
        name: "Technologies",
        topics: ["Using simple digital tools", "Building and designing", "Food technology basics", "Problem solving through play", "Safe use of devices"]
      },
      {
        name: "Expressive Arts",
        topics: ["Art and craft", "Music and rhythm", "Drama and role play", "Dance and movement", "Sharing creative work"]
      },
      {
        name: "Religious & Moral Education",
        topics: ["Respect and kindness", "Celebrations and beliefs", "Right and wrong", "Caring for others", "Wonder and questions"]
      }
    ]
  },
  {
    level: "First Level",
    stage: "Primary 2 to Primary 4",
    age: "Ages 6-9",
    description: "For most children in P2, P3 and P4. Learning builds secure foundations in reading, writing, number, enquiry, creativity and independent routines.",
    areas: [
      {
        name: "Literacy & English",
        topics: ["Reading familiar and unfamiliar texts", "Writing sentences and short texts", "Spelling and phonics", "Listening and talking in groups", "Finding information in texts"]
      },
      {
        name: "Numeracy & Mathematics",
        topics: ["Addition and subtraction", "Multiplication and division foundations", "Fractions as sharing", "Money, time and measure", "Data handling and simple graphs"]
      },
      {
        name: "Health & Wellbeing",
        topics: ["Mental and emotional wellbeing", "Relationships and respect", "Physical activity", "Healthy choices", "Personal safety online and offline"]
      },
      {
        name: "Sciences",
        topics: ["Plants and animals", "Forces and movement", "Materials and changes", "Earth, sun and moon", "Simple investigations"]
      },
      {
        name: "Social Studies",
        topics: ["Local area studies", "Maps and journeys", "People in the past", "Needs and wants", "Community and citizenship"]
      },
      {
        name: "Technologies",
        topics: ["Digital literacy", "Simple coding and instructions", "Design challenges", "Food and textiles", "Using technology safely"]
      },
      {
        name: "Expressive Arts",
        topics: ["Drawing, colour and materials", "Singing and rhythm", "Drama stories", "Dance sequences", "Responding to performances"]
      },
      {
        name: "Religious & Moral Education",
        topics: ["World religions and celebrations", "Values and choices", "Respect for beliefs", "Moral stories", "Care for people and nature"]
      }
    ]
  },
  {
    level: "Second Level",
    stage: "Primary 5 to Primary 7",
    age: "Ages 9-12",
    description: "For most children in P5, P6 and P7. Learning prepares children for secondary school through deeper understanding, research, reasoning, problem solving and responsibility.",
    areas: [
      {
        name: "Literacy & English",
        topics: ["Reading comprehension and inference", "Writing for different purposes", "Grammar, punctuation and editing", "Research and note-taking", "Presenting and debating"]
      },
      {
        name: "Numeracy & Mathematics",
        topics: ["Fractions, decimals and percentages", "Multiplication and division strategies", "Shape, angles and symmetry", "Measurement and scale", "Data, chance and problem solving"]
      },
      {
        name: "Health & Wellbeing",
        topics: ["Confidence and resilience", "Friendships and peer pressure", "Physical fitness", "Food, body and health", "Digital wellbeing and safety"]
      },
      {
        name: "Sciences",
        topics: ["Body systems and health", "Energy and electricity", "Chemical changes and materials", "Planet Earth and space", "Planning fair tests"]
      },
      {
        name: "Social Studies",
        topics: ["Scottish, British and world history", "Maps, climate and landscapes", "Enterprise and money", "Democracy and rights", "Sustainability and global issues"]
      },
      {
        name: "Technologies",
        topics: ["Coding and computational thinking", "Digital research and presentation", "Design and engineering tasks", "Food and product design", "Cyber resilience and internet safety"]
      },
      {
        name: "Expressive Arts",
        topics: ["Art techniques and design", "Music composition and performance", "Script and drama work", "Dance and choreography", "Evaluating creative work"]
      },
      {
        name: "Religious & Moral Education",
        topics: ["Beliefs, values and traditions", "Moral dilemmas", "Respect and diversity", "Philosophical questions", "Community responsibility"]
      }
    ]
  },
  {
    level: "11+ Preparation",
    stage: "Optional Entrance Exam Support",
    age: "Ages 9-11",
    description: "Not part of Curriculum for Excellence, but useful as an additional preparation pathway for families seeking grammar or independent school entrance practice.",
    areas: [
      {
        name: "English & Comprehension",
        topics: ["Advanced reading comprehension", "Vocabulary building", "Grammar accuracy", "Creative writing", "Timed written responses"]
      },
      {
        name: "Mathematics",
        topics: ["Arithmetic fluency", "Word problems", "Fractions, decimals and percentages", "Geometry and measure", "Timed mixed practice"]
      },
      {
        name: "Verbal Reasoning",
        topics: ["Word meanings", "Codes and sequences", "Analogies", "Logic questions", "Timed reasoning sets"]
      },
      {
        name: "Non-Verbal Reasoning",
        topics: ["Patterns and shapes", "Rotations and reflections", "Matrices", "Odd-one-out questions", "Spatial reasoning"]
      }
    ]
  }
];

export default function KidsSelfStudyPortal() {
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("All");

  const filteredLessons = useMemo(() => {
    return lessons.filter((lesson) => {
      const matchesQuery = lesson.title.toLowerCase().includes(query.toLowerCase());
      const matchesSubject = subject === "All" || lesson.subject === subject;
      return matchesQuery && matchesSubject;
    });
  }, [query, subject]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-slate-900 p-2 text-white">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">SmartStart</h1>
              <p className="text-xs text-slate-500">Scottish CfE self-study for kids</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#lessons">Lessons</a>
            <a href="#plan">Study Plan</a>
            <a href="#progress">Progress</a>
            <a href="#parents">Parents</a>
            <a href="#curriculum">CfE Syllabus</a>
          </nav>
          <Button className="hidden rounded-2xl md:inline-flex">Student Login</Button>
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
              Create CfE-aligned lessons, simple quizzes, daily routines, and progress dashboards so children can build confidence one topic at a time.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-2xl px-6 py-6 text-base">Start Learning</Button>
              <Button variant="outline" className="rounded-2xl px-6 py-6 text-base">
                <PlayCircle className="mr-2 h-5 w-5" /> Watch Demo
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <Card className="overflow-hidden rounded-[2rem] border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="bg-slate-900 p-6 text-white">
                  <p className="text-sm text-slate-300">Today&apos;s dashboard</p>
                  <h3 className="mt-2 text-2xl font-bold">Welcome back, Ayaan!</h3>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {["3 Lessons", "82% Score", "5 Stars"].map((item) => (
                      <div key={item} className="rounded-2xl bg-white/10 p-4 text-center text-sm font-semibold">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 bg-white p-6">
                  {lessons.slice(0, 3).map((lesson) => (
                    <div key={lesson.title} className="rounded-2xl border p-4">
                      <div className="flex items-center justify-between gap-3">
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
          </motion.div>
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
                {['All', 'Maths', 'English', 'Science', 'Coding'].map((option) => <option key={option}>{option}</option>)}
              </select>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {filteredLessons.map((lesson) => (
              <Card key={lesson.title} className="rounded-3xl border-0 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">{lesson.subject}</p>
                  <h3 className="text-lg font-black leading-snug">{lesson.title}</h3>
                  <p className="mt-3 text-sm text-slate-500">{lesson.age} • {lesson.time} • {lesson.level}</p>
                  <Button className="mt-6 w-full rounded-2xl">Open Lesson</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="plan" className="mx-auto grid max-w-7xl gap-6 px-5 py-12 md:grid-cols-3">
          <Card className="rounded-3xl border-0 bg-slate-900 text-white shadow-lg md:col-span-1">
            <CardContent className="p-7">
              <CalendarDays className="mb-5 h-9 w-9" />
              <h2 className="text-2xl font-black">Daily study plan</h2>
              <p className="mt-3 text-slate-300">A calm routine helps children learn independently without feeling overwhelmed.</p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-0 shadow-sm md:col-span-2">
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
              <Card key={item.title} className="rounded-3xl border-0 shadow-sm">
                <CardContent className="p-6">
                  <item.icon className="mb-4 h-7 w-7" />
                  <p className="text-sm font-semibold text-slate-500">{item.title}</p>
                  <p className="mt-1 text-2xl font-black">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="parents" className="mx-auto max-w-7xl px-5 py-12 pb-20">
          <Card className="rounded-[2rem] border-0 bg-white shadow-sm">
            <CardContent className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
              <div>
                <UsersRound className="mb-5 h-9 w-9" />
                <h2 className="text-3xl font-black">Parent and teacher corner</h2>
                <p className="mt-4 leading-7 text-slate-600">
                  Add learning goals, review quiz results, assign weekly topics, and celebrate consistent effort. Keep the structure simple and familiar so children know exactly what to do each day.
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

        <section id="curriculum" className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-8">
            <p className="font-semibold text-slate-500">Scottish Curriculum for Excellence</p>
            <h2 className="text-3xl font-black">CfE-aligned syllabus pathway</h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Organised by CfE levels and the eight curriculum areas used in Scottish education. Early Level usually covers Early Years to P1, First Level covers P2-P4, and Second Level covers P5-P7. The 11+ section is included separately because it is not part of CfE.
            </p>
          </div>

          <div className="space-y-8">
            {scottishCurriculum.map((level) => (
              <Card key={level.level} className="rounded-[2rem] border-0 shadow-sm">
                <CardContent className="p-7">
                  <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wide text-slate-500">{level.stage} • {level.age}</p>
                      <h3 className="mt-2 text-2xl font-black">{level.level}</h3>
                      <p className="mt-3 max-w-4xl leading-7 text-slate-600">{level.description}</p>
                    </div>
                    <Button className="rounded-2xl">Build Lessons</Button>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {level.areas.map((area) => (
                      <div key={`${level.level}-${area.name}`} className="rounded-3xl border bg-white p-5">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="rounded-2xl bg-slate-100 p-2">
                            <GraduationCap className="h-5 w-5" />
                          </div>
                          <h4 className="font-black leading-tight">{area.name}</h4>
                        </div>

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
