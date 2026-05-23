export const curriculumLevels = [
  {
    slug: "early-level",
    level: "Early Level",
    stage: "Early Years & Primary 1",
    age: "Ages 3-6",
    description:
      "For nursery, early learning and childcare, and most children in P1. Learning is play-based, practical, and focused on confidence, communication, early literacy and early numeracy.",
    subjects: [
      {
        name: "Literacy & English",
        topics: ["Listening and talking", "Stories and rhymes", "Letter sounds", "Early writing", "Sharing ideas"],
      },
      {
        name: "Numeracy & Mathematics",
        topics: ["Counting 1 to 10", "Number recognition", "Shapes around us", "Simple patterns", "Sorting objects"],
      },
      {
        name: "Health & Wellbeing",
        topics: ["Friendships", "Personal safety", "Healthy habits", "Movement", "Emotions"],
      },
      {
        name: "Sciences",
        topics: ["Living things", "Weather", "Materials", "Using senses", "Asking simple questions"],
      },
    ],
  },
  {
    slug: "first-level",
    level: "First Level",
    stage: "Primary 2 to Primary 4",
    age: "Ages 6-9",
    description:
      "For most children in P2, P3 and P4. Learning builds secure foundations in reading, writing, number, enquiry, creativity and independent routines.",
    subjects: [
      {
        name: "Literacy & English",
        topics: ["Reading texts", "Sentence building", "Spelling", "Talking in groups", "Finding information"],
      },
      {
        name: "Numeracy & Mathematics",
        topics: ["Addition", "Subtraction", "Multiplication basics", "Fractions", "Money and time"],
      },
      {
        name: "Sciences",
        topics: ["Plants and animals", "Forces", "Materials", "Sun and moon", "Investigations"],
      },
      {
        name: "Technologies",
        topics: ["Digital skills", "Simple coding", "Design tasks", "Food technology", "Online safety"],
      },
    ],
  },
  {
    slug: "second-level",
    level: "Second Level",
    stage: "Primary 5 to Primary 7",
    age: "Ages 9-12",
    description:
      "For most children in P5, P6 and P7. Learning prepares children for secondary school through deeper understanding, research, reasoning and responsibility.",
    subjects: [
      {
        name: "Literacy & English",
        topics: ["Comprehension", "Creative writing", "Grammar", "Research", "Presenting"],
      },
      {
        name: "Numeracy & Mathematics",
        topics: ["Fractions", "Decimals", "Percentages", "Angles", "Problem solving"],
      },
      {
        name: "Sciences",
        topics: ["Body systems", "Electricity", "Materials", "Space", "Fair tests"],
      },
      {
        name: "Social Studies",
        topics: ["Scottish history", "Maps", "Democracy", "Sustainability", "Global issues"],
      },
    ],
  },
  {
    slug: "eleven-plus",
    level: "11+ Preparation",
    stage: "Optional Entrance Exam Support",
    age: "Ages 9-11",
    description:
      "An optional preparation pathway for families who want entrance exam practice. This is separate from Curriculum for Excellence.",
    subjects: [
      {
        name: "English",
        topics: ["Comprehension", "Vocabulary", "Grammar", "Creative writing", "Timed practice"],
      },
      {
        name: "Mathematics",
        topics: ["Arithmetic", "Word problems", "Fractions", "Geometry", "Mixed practice"],
      },
      {
        name: "Verbal Reasoning",
        topics: ["Word meanings", "Codes", "Analogies", "Logic", "Timed sets"],
      },
      {
        name: "Non-Verbal Reasoning",
        topics: ["Patterns", "Shapes", "Rotations", "Matrices", "Spatial reasoning"],
      },
    ],
  },
];

export const defaultLessons = [
  {
    id: "lesson-counting-1-10",
    title: "Counting 1 to 10",
    level: "Early Level",
    subject: "Numeracy & Mathematics",
    topic: "Counting",
    time: "15 min",
    age: "Ages 3-6",
    progress: 0,
    description:
      "Children practise counting objects from 1 to 10 using toys, pictures and number songs. They say each number clearly and match numbers to groups of objects.",
    activities: ["Count toys aloud", "Match number cards to objects", "Sing a number song", "Draw 10 dots"],
  },
  {
    id: "lesson-shapes-around-us",
    title: "Shapes Around Us",
    level: "Early Level",
    subject: "Numeracy & Mathematics",
    topic: "Shapes",
    time: "15 min",
    age: "Ages 3-6",
    progress: 0,
    description:
      "Children identify circles, squares, triangles and rectangles in everyday objects around the home or classroom.",
    activities: ["Find 3 circles", "Sort shape cards", "Draw a square house", "Name shapes in a picture"],
  },
  {
    id: "lesson-letter-sounds",
    title: "Letter Sounds",
    level: "Early Level",
    subject: "Literacy & English",
    topic: "Phonics",
    time: "15 min",
    age: "Ages 3-6",
    progress: 0,
    description:
      "Children listen to beginning sounds, say simple letter sounds clearly and match sounds to familiar objects.",
    activities: ["Say beginning sounds", "Match object to sound", "Sing alphabet song", "Trace letters"],
  },
];
