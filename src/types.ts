export type ProjectVisualType =
  | 'tms'
  | 'milestone'
  | 'wms'
  | 'dms'
  | 'fms'
  | 'starsin'
  | 'logistikguru'
  | 'hms';

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  industry: string;
  category: string;
  year: string;
  tags: string[];
  featured: boolean;
  visualType: ProjectVisualType;
  contributions: string[];
  contributionNote?: string;
  designFocus: string;
  metrics?: { label: string; value: string }[];
  caseStudy: {
    overview: string;
    challenge: string;
    systemApproach: string[];
    keyFeatures: { title: string; description: string; detail: string }[];
    impact: { title: string; desc: string }[];
  };
}

export interface Capability {
  id: string;
  index: string;
  title: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  keyActivities: string[];
}

export interface DomainExperience {
  id: string;
  name: string;
  description: string;
  complexityFactors: string[];
  keyChallengesSolved: string;
}

export interface ToolItem {
  id: string;
  name: string;
  category: string;
  iconName: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  timeline: string;
  budget: string;
  message: string;
}
