// Edit this file to update the CV page.
// `period` is optional; entries without one are shown without dates.

export type CvEntry = {
  title: string;
  org: string;
  period?: string;
  location?: string;
  points?: string[];
};

export const experience: CvEntry[] = [
  {
    title: 'Full Stack Software Engineer',
    org: 'Exairon',
    location: 'Istanbul',
    // TODO: add start date, e.g. 'Jun 2024 – Present'
    points: [
      // TODO: add 2–4 bullet points about what you build there
    ],
  },
];

export const education: CvEntry[] = [
  {
    title: 'B.Sc. Computer Engineering',
    org: 'Marmara University',
    location: 'Istanbul',
    // TODO: add years, e.g. '2021 – 2026'
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['C#', 'Python', 'C', 'JavaScript', 'SQL'] },
  { group: 'Backend', items: ['.NET', 'Entity Framework Core', 'REST APIs', 'PostgreSQL'] },
  { group: 'Game development', items: ['Unity', '2D physics', 'UI systems'] },
  { group: 'Tools', items: ['Git', 'Docker', 'Swagger / OpenAPI'] },
];

export const interests = ['Dancing (Marmara University Dance Society)', 'Hiking', 'Skiing', 'Kitesurfing'];

// Put a PDF at public/cv.pdf and set this to '/cv.pdf' to show a download button.
export const cvPdf: string | null = null;
