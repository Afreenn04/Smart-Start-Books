import { defaultLessons } from "./data/curriculum";

const LESSON_KEY = "smartStartLessons";

export function loadLessons() {
  try {
    const saved = localStorage.getItem(LESSON_KEY);
    return saved ? JSON.parse(saved) : defaultLessons;
  } catch {
    return defaultLessons;
  }
}

export function saveLessons(lessons) {
  localStorage.setItem(LESSON_KEY, JSON.stringify(lessons));
}
