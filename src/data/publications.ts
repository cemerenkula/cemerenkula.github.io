// Edit this file to update the Publications page, the home page and the CV.
// Newest first. The Publications menu link only appears when this list is not empty.

export type Publication = {
  id: string;
  type: 'conference' | 'workshop' | 'journal';
  title: string;
  authors: string[]; // exact order from the paper
  venue: string;
  venueShort: string;
  year: number;
  pages?: string;
  doi?: string;
  // Set to true once the DOI resolves (i.e. the paper is on IEEE Xplore).
  doiLive: boolean;
  // 'accepted-presented' until the paper appears in the digital library, then 'published'.
  status: 'accepted' | 'accepted-presented' | 'published';
  summary: string;
  abstract: string;
  keywords: string[];
  bibtex: string;
  // Optional extra links (slides, publisher page, ...). Never link the IEEE PDF.
  links?: { label: string; href: string }[];
};

export const me = 'Cem Eren Kula';

export const statusLabel: Record<Publication['status'], string> = {
  accepted: 'Accepted',
  'accepted-presented': 'Accepted & presented',
  published: 'Published',
};

export const publications: Publication[] = [
  {
    id: 'kg-verify',
    type: 'conference',
    title:
      'KG-Verify: Detecting Contextual Hallucinations in Clinical LLM Answers with Dynamic Knowledge Graphs',
    authors: ['Ardacan Özener', 'Cem Eren Kula', 'Murat Can Ganiz'],
    venue: '2026 Third IEEE International Conference on AI x Medicine, Health, and Care',
    venueShort: 'IEEE AIxMHC 2026',
    year: 2026,
    pages: '7–10',
    doi: '10.1109/AIxMHC70116.2026.00008',
    doiLive: false,
    status: 'accepted-presented',
    summary:
      "KG-Verify converts a patient record and an LLM's answer into knowledge graphs and flags any claim the record doesn't support. It caught 90% of hallucinated answers, compared with at most 22% for LLM-as-a-judge baselines using the same model.",
    abstract:
      'Large language models (LLMs) can summarize electronic health records and answer patient-specific questions, yet they may produce input-conflicting hallucinations: clinically plausible claims that are unsupported by the source patient record. We present KG-Verify, an auditable framework for detecting these patient-specific faithfulness errors by converting the source discharge summary and the generated answer into typed, record-specific clinical knowledge graphs. Nodes represent normalized clinical concepts, attributes encode details such as dose, route, duration, and laboratory values, and the answer graph is checked against the record graph under one-directional subset semantics. Each mismatch is returned with the offending claim and available source evidence. KG-Verify uses a locally served MedGemma-27B extraction backbone and UMLS concept normalization. We evaluate it on 64 MIMIC-IV discharge summaries comprising 434 question–answer instances, including 259 answers with one injected evidence or mechanism error. KG-Verify detects 232 of the 259 altered answers (recall 0.896, precision 0.663, F1 0.762), whereas direct MedGemma judges at 4B and 27B scales achieve recall no higher than 0.220. The high sensitivity is accompanied by 118 false positive flags, showing that reference-graph completeness and normalization remain the principal bottlenecks. These results support structural verification as a promising, interpretable safety layer, while also indicating that larger clinician-validated cohorts, stronger non-LLM baselines, temporal modeling, and extraction ablations are required before clinical deployment.',
    keywords: [
      'hallucination detection',
      'large language models',
      'knowledge graphs',
      'clinical AI',
      'patient safety',
      'UMLS',
      'faithfulness',
    ],
    bibtex: `@inproceedings{ozener2026kgverify,
  title     = {KG-Verify: Detecting Contextual Hallucinations in Clinical LLM Answers with Dynamic Knowledge Graphs},
  author    = {{\\"O}zener, Ardacan and Kula, Cem Eren and Ganiz, Murat Can},
  booktitle = {2026 IEEE International Conference on AI x Medicine, Health, and Care (AIxMHC)},
  pages     = {7--10},
  year      = {2026},
  publisher = {IEEE},
  doi       = {10.1109/AIxMHC70116.2026.00008}
}`,
  },
];
