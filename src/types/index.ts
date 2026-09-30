export type PageId = 
  | 'home'
  | 'services'
  | 'case-studies'
  | 'audits'
  | 'resources'
  | 'about'
  | 'contact'
  | 'faq';

export interface CaseStudy {
  id: string;
  repoName: string;
  owner: string;
  tagline: string;
  category: 'CLI & Systems' | 'Developer Tools' | 'Fullstack & Web' | 'AI & Data';
  language: string;
  languageColor: string;
  beforeStars: number;
  afterStars: number;
  durationMonths: number;
  featuredStat: string;
  featuredStatLabel: string;
  quote: {
    text: string;
    author: string;
    role: string;
    avatarInitials: string;
  };
  keyWins: string[];
  launchChannels: string[];
  readmeChanges: {
    beforeHighlight: string;
    afterHighlight: string;
  };
}

export interface ServiceTier {
  id: string;
  title: string;
  headline: string;
  description: string;
  turnaroundTime: string;
  bestFor: string;
  deliverables: string[];
  recommended?: boolean;
  sampleArtifact: string;
}

export interface AuditCheckItem {
  id: string;
  category: 'first-fold' | 'og-image' | 'seo-topics' | 'community' | 'releases' | 'dx';
  categoryLabel: string;
  label: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
  passed: boolean;
  recommendation: string;
}

export interface AuditReport {
  repoUrl: string;
  owner: string;
  repo: string;
  stars: number;
  forks: number;
  overallScore: number;
  grade: 'A+' | 'A' | 'B+' | 'B' | 'C' | 'D';
  summary: string;
  categories: {
    firstFoldScore: number;
    ogImageScore: number;
    seoTopicsScore: number;
    communityScore: number;
    releasesScore: number;
    dxScore: number;
  };
  checks: AuditCheckItem[];
}

export interface FaqItem {
  id: string;
  category: 'Audits & Strategy' | 'Ethics & Policy' | 'Trending & Distribution' | 'Pricing & Process';
  question: string;
  answer: string;
}

export interface ReadmeTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  starsRecommended: string;
  markdownContent: string;
}
