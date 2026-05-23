import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import Layout from "../components/Layout";
import { Card } from "../components/ui";
import { curriculumLevels } from "../data/curriculum";

export default function Curriculum() {
  return (
    <Layout>
      <main className="mx-auto max-w-7xl px-5 py-12">
        <p className="font-semibold text-slate-500">Curriculum Management</p>
        <h1 className="text-4xl font-black">Curriculum levels</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Open each level to review subjects and topics. We will add curriculum content here first, then connect lessons to each topic.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {curriculumLevels.map((level) => (
            <Link key={level.slug} to={`/curriculum/${level.slug}`}>
              <Card className="p-7 transition hover:-translate-y-1 hover:shadow-lg">
                <BookOpen className="mb-4 h-8 w-8" />
                <p className="text-sm font-semibold text-slate-500">{level.stage} • {level.age}</p>
                <h2 className="mt-2 text-2xl font-black">{level.level}</h2>
                <p className="mt-3 leading-7 text-slate-600">{level.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
