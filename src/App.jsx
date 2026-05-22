function AdminPortal() {
  const curriculumLevels = [
    {
      level: "Early Level",
      stage: "Early Years & Primary 1",
      subjects: ["Literacy", "Numeracy", "Health & Wellbeing", "Sciences"],
    },
    {
      level: "First Level",
      stage: "Primary 2 to Primary 4",
      subjects: ["Literacy", "Numeracy", "Sciences", "Technologies"],
    },
    {
      level: "Second Level",
      stage: "Primary 5 to Primary 7",
      subjects: ["Literacy", "Numeracy", "Sciences", "Social Studies"],
    },
    {
      level: "11+ Preparation",
      stage: "Optional Entrance Exam Support",
      subjects: ["English", "Maths", "Verbal Reasoning", "Non-Verbal Reasoning"],
    },
  ];

  return (
    <div className="rounded-[2rem] bg-white p-8 shadow-sm">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold text-slate-500">Smart Start Books</p>
          <h2 className="text-3xl font-black">Admin Dashboard</h2>
          <p className="mt-2 text-slate-600">
            Manage curriculum, lessons, worksheets and student progress.
          </p>
        </div>

        <button className="rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">
          Add Lesson
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {["Curriculum Management", "Lesson Builder", "Worksheet Uploads", "Student Reports"].map((item) => (
          <div key={item} className="rounded-3xl bg-slate-50 p-6 shadow-sm">
            <h3 className="text-xl font-black">{item}</h3>
            <p className="mt-3 text-sm text-slate-600">Manage and organise portal content.</p>
            <button className="mt-5 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
              Open
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl bg-slate-50 p-6">
        <h3 className="text-2xl font-black">Curriculum Management</h3>
        <p className="mt-2 text-slate-600">
          Review and organise your CfE levels before creating lessons.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {curriculumLevels.map((item) => (
            <div key={item.level} className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-500">{item.stage}</p>
              <h4 className="mt-2 text-xl font-black">{item.level}</h4>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold"
                  >
                    {subject}
                  </span>
                ))}
              </div>

              <button className="mt-5 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
                Edit Level
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-3xl bg-slate-50 p-6">
        <h3 className="text-2xl font-black">Add New Lesson</h3>
        <p className="mt-2 text-slate-600">
          Create a lesson by CfE level, subject and topic.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <input className="rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="Lesson title" />
          <select className="rounded-2xl border bg-white px-4 py-3 outline-none">
            <option>Early Level</option>
            <option>First Level</option>
            <option>Second Level</option>
            <option>11+ Preparation</option>
          </select>
          <select className="rounded-2xl border bg-white px-4 py-3 outline-none">
            <option>Literacy & English</option>
            <option>Numeracy & Mathematics</option>
            <option>Sciences</option>
            <option>Health & Wellbeing</option>
            <option>Technologies</option>
          </select>
          <input className="rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="Topic e.g. Fractions" />
        </div>

        <textarea className="mt-4 min-h-32 w-full rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="Lesson description" />

        <button className="mt-5 rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">
          Save Lesson
        </button>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-black">Upload Worksheet</h3>
          <p className="mt-2 text-slate-600">
            Add a worksheet name, level, subject and file link.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="Worksheet title" />

            <select className="rounded-2xl border bg-white px-4 py-3 outline-none">
              <option>Early Level</option>
              <option>First Level</option>
              <option>Second Level</option>
              <option>11+ Preparation</option>
            </select>

            <input className="rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="Subject e.g. Numeracy" />

            <input className="rounded-2xl border bg-white px-4 py-3 outline-none" placeholder="PDF / worksheet link" />
          </div>

          <button className="mt-5 rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white">
            Save Worksheet
          </button>
        </div>
      </div>
    </div>
  );
}
