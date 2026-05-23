import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Layout from "../components/Layout";
import { Card } from "../components/ui";
import { curriculumLevels } from "../data/curriculum";

export default function CurriculumLevel() {
  const { slug } = useParams();
  const level = curriculumLevels.find((item) => item.slug === slug);

  if (!level) {
    return (
      <Layout>
        <main className="mx-auto max-w-5xl px-5 py-12">
          <h1 className="text-3xl font-black">Curriculum level not found</h1>
          <Link to="/curriculum" className="mt-4 inline-block font-semibold underline">Back to curriculum</Link>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 py-12">
        <Link to="/curriculum" className="mb-6 inline-flex items-center gap-2 font-semibold text-slate-600 hover:text-slate-950">
          <ArrowLeft className="h-4 w-4" /> Back to curriculum
        </Link>
        <Card className="p-8">
          <p className="text-sm font-semibold text-slate-500">{level.stage} • {level.age}</p>
          <h1 className="mt-2 text-4xl font-black">{level.level}</h1>
          <p className="mt-3 max-w-4xl leading-7 text-slate-600">{level.description}</p>
        </Card>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {level.subjects.map((subject) => (
            <Card key={subject.name} className="p-6">
              <h2 className="text-2xl font-black">{subject.name}</h2>
              <div className="mt-5 space-y-3">
                {subject.topics.map((topic) => (
                  <div key={topic} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 font-semibold">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </main>
    </Layout>
  );
}
