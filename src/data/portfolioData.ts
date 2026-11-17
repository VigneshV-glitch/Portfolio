import { Project, Capability, ProcessStep, DomainExperience, ToolItem } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'tms',
    slug: 'tms',
    title: 'TMS – Transportation Management System',
    subtitle: 'Trip operations, resource allocation, and real-time operational visibility',
    description:
      'Designed transportation management experiences focused on trip operations, resource allocation and real-time operational visibility.',
    role: 'Enterprise SaaS · Operations Management',
    industry: 'Enterprise SaaS',
    category: 'Operations Management',
    year: '2025',
    tags: ['Trip Lifecycle', 'KPI Dashboards', 'DataTable & Filtering', 'Enterprise SaaS'],
    featured: true,
    visualType: 'tms',
    contributions: [
      'Dashboard and operational KPI design.',
      'Trip lifecycle and assignment workflows.',
      'Cargo, stops and delay management.',
      'Advanced DataTable and conditional filtering.',
      'Dynamic filters, quick filters and saved views.',
      'Complex filtering logic and interaction patterns.',
    ],
    designFocus: 'Data-heavy interfaces, operational efficiency and complex interaction design.',
    caseStudy: {
      overview:
        'Designed transportation management experiences focused on trip operations, resource allocation and real-time operational visibility across high-volume dispatch workflows.',
      challenge:
        'Operations managers struggled with fragmented trip views, uncoordinated delay tracking, and rigid data tables that made multi-condition filtering slow during time-critical dispatch windows.',
      systemApproach: [
        'Dashboard and operational KPI design surfaced key trip health indicators immediately',
        'Trip lifecycle and assignment workflows unified dispatch state transitions',
        'Cargo, stops and delay management structured multi-stop exception tracking',
        'Advanced DataTable with conditional filtering, dynamic filters, quick filters, and saved views',
      ],
      keyFeatures: [
        {
          title: 'Operational KPI & Trip Command Dashboard',
          description:
            'Structured dashboard layout highlighting active trips, delayed stops, and resource utilization at a glance.',
          detail: 'Designed for rapid scanning and immediate drill-down into delayed shipments.',
        },
        {
          title: 'Advanced DataTable & Conditional Filtering',
          description:
            'High-density table architecture supporting multi-criteria filter builders, quick filter chips, and reusable saved views.',
          detail: 'Handles complex AND/OR filtering logic without obscuring table data.',
        },
        {
          title: 'Cargo, Stops & Assignment Workflows',
          description:
            'End-to-end trip lifecycle flows covering carrier assignment, cargo allocation, stop sequencing, and delay resolution.',
          detail: 'Reduces manual context-switching between dispatch modules.',
        },
      ],
      impact: [
        {
          title: 'Faster Operational Triage',
          desc: 'Saved views and quick filters enabled dispatchers to isolate delayed trips and unassigned loads in seconds.',
        },
        {
          title: 'Consistent Data Interaction Patterns',
          desc: 'Established reusable table, filter, and status patterns across core TMS operational modules.',
        },
      ],
    },
  },
  {
    id: 'milestone',
    slug: 'milestone',
    title: 'Milestone – Logistics Operations Platform',
    subtitle: 'Structuring logistics operational experiences into clear, manageable workflows',
    description:
      'Worked on structuring logistics-related operational experiences into clear, manageable workflows.',
    role: 'Enterprise Application · Workflow Design',
    industry: 'Enterprise Application',
    category: 'Workflow Design',
    year: '2025',
    tags: ['Logistics Workflows', 'KPI Layouts', 'Status Systems', 'Interactive Prototypes'],
    featured: true,
    visualType: 'milestone',
    contributions: [
      'Business requirement understanding.',
      'Operational dashboard and KPI layouts.',
      'Workflow and navigation structuring.',
      'Status-based information presentation.',
      'Reusable interface patterns and interactive prototypes.',
    ],
    designFocus: 'Process clarity, operational visibility and consistent user experiences.',
    caseStudy: {
      overview:
        'Worked on structuring logistics-related operational experiences into clear, manageable workflows that give operations teams consistent visibility across milestones.',
      challenge:
        'Complex logistics requirements spanned multiple operational stages and user roles, creating fragmented navigation and inconsistent status interpretation across screens.',
      systemApproach: [
        'Business requirement understanding translated domain rules into structured user flows',
        'Operational dashboard and KPI layouts prioritized actionable shipment milestones',
        'Workflow and navigation structuring aligned modules around real operational sequences',
        'Status-based information presentation and reusable patterns validated via interactive prototypes',
      ],
      keyFeatures: [
        {
          title: 'Operational Dashboard & KPI Layouts',
          description:
            'Balanced overview screens presenting milestone health, exceptions, and active workload metrics.',
          detail: 'Consistent card and summary hierarchy across logistics modules.',
        },
        {
          title: 'Workflow & Navigation Architecture',
          description:
            'Clear module grouping and sequential navigation designed around daily operational responsibilities.',
          detail: 'Eliminated dead-end screens and redundant nested menus.',
        },
        {
          title: 'Status-Based Interface Patterns',
          description:
            'Standardized visual status indicators and interactive prototypes for stakeholder validation.',
          detail: 'Improved cross-team alignment before frontend engineering implementation.',
        },
      ],
      impact: [
        {
          title: 'Process Clarity Across Modules',
          desc: 'Transformed sprawling business requirements into predictable, task-oriented operational workflows.',
        },
        {
          title: 'Reusable UI Foundations',
          desc: 'Delivered standardized interface patterns and interactive prototypes for consistent product scaling.',
        },
      ],
    },
  },
  {
    id: 'wms',
    slug: 'wms',
    title: 'WMS – Warehouse Management System',
    subtitle: 'Organizing complex warehouse information and scalable configurations',
    description:
      'Designed structured warehouse-management experiences with a focus on organizing complex warehouse information and configurations.',
    role: 'Enterprise SaaS · Warehouse Operations',
    industry: 'Enterprise SaaS',
    category: 'Warehouse Operations',
    year: '2024',
    tags: ['Configuration Architecture', 'Hierarchical Data', 'Forms & Tables', 'Mockups'],
    featured: true,
    visualType: 'wms',
    contributions: [
      'Warehouse configuration architecture.',
      'Hierarchical data organization.',
      'Navigation and module structuring.',
      'Forms, tables and data presentation.',
      'Interactive functional mockups.',
    ],
    designFocus: 'Information hierarchy, configuration usability and scalable operational interfaces.',
    caseStudy: {
      overview:
        'Designed structured warehouse-management experiences with a focus on organizing complex warehouse information, physical hierarchies, and operational configurations.',
      challenge:
        'Configuring multi-level warehouse structures, storage zones, and operational rules involved deeply nested data and dense setup forms that were difficult to navigate and maintain.',
      systemApproach: [
        'Warehouse configuration architecture mapped logical setup sequences',
        'Hierarchical data organization structured zones, aisles, racks, and bin attributes',
        'Navigation and module structuring separated setup workflows from daily monitoring',
        'Clean forms, tables, and interactive functional mockups validated usability early',
      ],
      keyFeatures: [
        {
          title: 'Warehouse Configuration Architecture',
          description:
            'Guided setup structure organizing facility parameters, storage hierarchies, and operational rules.',
          detail: 'Reduced cognitive friction when onboarding new warehouse structures.',
        },
        {
          title: 'Hierarchical Data & Module Navigation',
          description:
            'Clear parent-child data presentation making nested warehouse entities easy to inspect and edit.',
          detail: 'Consistent breadcrumbs, tree relationships, and contextual detail views.',
        },
        {
          title: 'Structured Forms, Tables & Mockups',
          description:
            'Scannable data tables paired with validation-ready configuration forms and interactive functional mockups.',
          detail: 'Enabled rapid stakeholder walkthroughs and engineering handoff.',
        },
      ],
      impact: [
        {
          title: 'Simplified Complex Setup',
          desc: 'Made deeply hierarchical warehouse configurations intuitive for operations administrators.',
        },
        {
          title: 'Scalable Module Structure',
          desc: 'Created an extensible navigation and table-form architecture ready for expanding WMS capabilities.',
        },
      ],
    },
  },
  {
    id: 'dms',
    slug: 'dms',
    title: 'DMS – Dock Management System',
    subtitle: 'Simplifying dock scheduling, gate operations, and yard activities',
    description:
      'Designed dock and facility-management workflows to simplify scheduling, gate operations and yard activities.',
    role: 'Enterprise Application · Facility Operations',
    industry: 'Enterprise Application',
    category: 'Facility Operations',
    year: '2025',
    tags: ['Dock Scheduler', 'Gate Management', 'Yard Management', 'Facility Operations'],
    featured: true,
    visualType: 'dms',
    contributions: [
      'Dock Scheduler.',
      'Gate Management.',
      'Yard Management.',
      'Dock Maintenance.',
      'Equipment Handler.',
      'Operational tables, forms and status-based interfaces.',
    ],
    designFocus: 'Operational workflows, resource visibility and efficient facility management.',
    caseStudy: {
      overview:
        'Designed dock and facility-management workflows covering scheduling, gate check-ins, yard movements, dock maintenance, and equipment handling.',
      challenge:
        'Facility teams coordinated dock schedules, gate arrivals, yard trailers, maintenance lockouts, and equipment assignments across disconnected tools, causing bottlenecks and poor resource visibility.',
      systemApproach: [
        'Unified Dock Scheduler for visual bay allocation and time-slot coordination',
        'Dedicated Gate Management and Yard Management flows for seamless inbound/outbound handoffs',
        'Integrated Dock Maintenance and Equipment Handler tracking for operational safety and readiness',
        'Status-based interfaces, operational tables, and streamlined forms across every facility touchpoint',
      ],
      keyFeatures: [
        {
          title: 'Dock Scheduler & Yard Management',
          description:
            'Coordinated dock bay timelines alongside live yard trailer positioning and movement queues.',
          detail: 'Provides real-time visibility across bays, slots, and staged trailers.',
        },
        {
          title: 'Gate Management Workflows',
          description:
            'Structured check-in and check-out forms capturing carrier details, documentation, and bay routing.',
          detail: 'Minimizes gate turnaround friction with clear status transitions.',
        },
        {
          title: 'Dock Maintenance & Equipment Handler',
          description:
            'Operational controls to track bay maintenance holds and assign facility handling equipment.',
          detail: 'Keeps facility teams aligned on bay availability and active resources.',
        },
      ],
      impact: [
        {
          title: 'End-to-End Facility Coordination',
          desc: 'Connected gate, yard, dock, maintenance, and equipment operations in one cohesive workflow.',
        },
        {
          title: 'Clear Resource Visibility',
          desc: 'Status-driven interfaces made bay availability and equipment allocation immediately scannable.',
        },
      ],
    },
  },
  {
    id: 'fms',
    slug: 'fms',
    title: 'FMS – Fleet Management System',
    subtitle: 'Organizing vehicle, driver, and operational resource information',
    description:
      'Worked on fleet-management experiences designed to organize vehicle, driver and operational resource information.',
    role: 'Enterprise SaaS · Fleet Operations',
    industry: 'Enterprise SaaS',
    category: 'Fleet Operations',
    year: '2025',
    tags: ['Fleet Dashboard', 'Vehicle Management', 'Driver Management', 'Interactive Prototypes'],
    featured: true,
    visualType: 'fms',
    contributions: [
      'Fleet dashboard and operational visibility.',
      'Vehicle management workflows.',
      'Driver management workflows.',
      'Resource allocation interfaces.',
      'Status-based data presentation.',
      'Interactive UI prototypes.',
    ],
    designFocus: 'Fleet visibility, resource management and simplified operations.',
    caseStudy: {
      overview:
        'Worked on fleet-management experiences designed to organize vehicle health, driver records, and operational resource allocation into streamlined SaaS workflows.',
      challenge:
        'Fleet coordinators needed to balance vehicle availability, driver profiles, compliance statuses, and active assignments without getting lost in cluttered spreadsheets.',
      systemApproach: [
        'Fleet dashboard designed for immediate operational visibility across vehicles and drivers',
        'Structured vehicle management and driver management workflows for clean record keeping',
        'Resource allocation interfaces pairing availability status with assignment actions',
        'Status-based data presentation validated through interactive UI prototypes',
      ],
      keyFeatures: [
        {
          title: 'Fleet Visibility Dashboard',
          description:
            'High-clarity summary of active, idle, and maintenance-bound fleet assets.',
          detail: 'Status-coded metrics highlight operational readiness immediately.',
        },
        {
          title: 'Vehicle & Driver Management Flows',
          description:
            'Structured profile views, assignment histories, and operational status tables for vehicles and drivers.',
          detail: 'Simplifies daily fleet administration and compliance tracking.',
        },
        {
          title: 'Resource Allocation & Prototypes',
          description:
            'Interactive UI prototypes demonstrating driver-to-vehicle pairing and resource scheduling.',
          detail: 'Validated edge cases and interaction clarity with product stakeholders.',
        },
      ],
      impact: [
        {
          title: 'Simplified Resource Management',
          desc: 'Unified vehicle and driver workflows reduced friction in daily fleet allocation tasks.',
        },
        {
          title: 'Scannable Fleet Status',
          desc: 'Clear status-based data presentation improved visibility across operational fleets.',
        },
      ],
    },
  },
  {
    id: 'starsin',
    slug: 'starsin',
    title: 'StarsIn – Sports & Creative Experiences',
    subtitle: 'Sports-oriented digital experiences, talent discovery, and visual storytelling',
    description:
      'Contributed to sports-oriented digital experiences and creative communication through product design and visual storytelling.',
    role: 'Sports Platform · Creative Design',
    industry: 'Sports Platform',
    category: 'Creative Design',
    year: '2024',
    tags: ['Talent & Scouting', 'After Effects', 'Motion Graphics', 'Visual Storytelling'],
    featured: true,
    visualType: 'starsin',
    contributions: [
      'Sports talent and scouting profile experiences.',
      'Information presentation and discovery concepts.',
      'After Effects video production.',
      'Logo reveal and scene-based animation.',
      'LinkedIn carousel and promotional creatives.',
      'Feedback-driven creative refinements.',
    ],
    designFocus: 'Visual storytelling, sports discovery and engaging digital communication.',
    caseStudy: {
      overview:
        'Contributed to sports-oriented digital experiences and creative communication for StarsIn, combining product UI exploration with After Effects motion production and brand storytelling.',
      challenge:
        'Presenting athlete profiles and scouting information in an engaging format while building cohesive motion graphics and promotional visuals for external audiences.',
      systemApproach: [
        'Designed sports talent and scouting profile experiences focused on clear athlete highlights',
        'Explored information presentation and discovery concepts tailored for scouts and fans',
        'Produced After Effects logo reveals, scene-based animations, and promotional videos',
        'Crafted LinkedIn carousels and creative assets refined through iterative stakeholder feedback',
      ],
      keyFeatures: [
        {
          title: 'Sports Talent & Scouting Profiles',
          description:
            'Structured athlete profile layouts highlighting stats, media reels, and scouting credentials.',
          detail: 'Balanced visual energy with scannable performance details.',
        },
        {
          title: 'After Effects Motion & Logo Reveals',
          description:
            'Scene-based video animations and custom logo reveal sequences reinforcing brand identity.',
          detail: 'Built for product launches, social showcases, and brand storytelling.',
        },
        {
          title: 'Promotional & Social Creatives',
          description:
            'Cohesive LinkedIn carousel series and visual campaigns refined through feedback loops.',
          detail: 'Elevated audience engagement and communication clarity.',
        },
      ],
      impact: [
        {
          title: 'Cohesive Visual Storytelling',
          desc: 'Bridged product UI concepts with dynamic motion graphics and brand communication.',
        },
        {
          title: 'Engaging Discovery Experience',
          desc: 'Made sports talent discovery and promotional storytelling sharper and more memorable.',
        },
      ],
    },
  },
  {
    id: 'logistikguru',
    slug: 'logistikguru',
    title: 'LogistikGuru – Logistics Ecosystem Platform',
    subtitle: 'Connecting individuals, businesses, service providers, and job seekers in one ecosystem',
    description:
      'Designed a multi-vertical logistics ecosystem connecting individuals, businesses, service providers and job seekers through a unified digital platform.',
    role: 'Digital Marketplace · End-to-End Product Design',
    industry: 'Digital Marketplace',
    category: 'End-to-End Product Design',
    year: '2025',
    tags: ['Marketplace UX', 'Universal Search', 'Figma Design System', 'Responsive Web'],
    featured: true,
    visualType: 'logistikguru',
    contributions: [
      'BRD/FRD analysis and requirement clarification.',
      'Information architecture and user journeys.',
      'Comprehensive Figma design system.',
      'Homepage and vertical portal experiences.',
      'Universal Search and Global Filters.',
      'Grouped and vertical-specific search results.',
      'Business listings and detailed company profiles.',
      'Get Listed onboarding and user profiles.',
      'Responsive mobile experiences.',
      'Interactive prototypes and frontend design handoff.',
    ],
    designFocus: 'Marketplace UX, discovery journeys, scalable architecture and reusable design systems.',
    caseStudy: {
      overview:
        'Designed a multi-vertical logistics ecosystem connecting individuals, businesses, service providers and job seekers through a unified digital platform—from BRD/FRD discovery through frontend handoff.',
      challenge:
        'Serving vastly different user groups and logistics verticals within a single platform risked fragmented navigation, confusing search behavior, and inconsistent UI components.',
      systemApproach: [
        'Conducted BRD/FRD analysis and mapped multi-persona user journeys and information architecture',
        'Built a comprehensive Figma design system powering homepage and vertical portal experiences',
        'Architected Universal Search, Global Filters, and grouped vs. vertical-specific search results',
        'Designed Get Listed onboarding, detailed company profiles, responsive mobile views, and frontend handoff specs',
      ],
      keyFeatures: [
        {
          title: 'Universal Search & Global Filters',
          description:
            'Unified discovery engine supporting grouped cross-vertical results and vertical-specific filtering.',
          detail: 'Helps users locate logistics services, companies, or jobs effortlessly.',
        },
        {
          title: 'Business Listings & Get Listed Onboarding',
          description:
            'Detailed company profile pages paired with a structured self-serve onboarding flow for providers.',
          detail: 'Streamlines directory growth while maintaining high data quality.',
        },
        {
          title: 'Comprehensive Figma Design System',
          description:
            'Tokenized component library ensuring visual consistency across desktop portals and responsive mobile screens.',
          detail: 'Delivered with interactive prototypes and detailed frontend handoff documentation.',
        },
      ],
      impact: [
        {
          title: 'Unified Multi-Vertical Discovery',
          desc: 'Connected diverse logistics audiences under one coherent information architecture and search system.',
        },
        {
          title: 'End-to-End Scalable Foundation',
          desc: 'Delivered a reusable Figma design system and responsive templates ready for engineering scale.',
        },
      ],
    },
  },
];

export const CAPABILITIES: Capability[] = [
  {
    id: 'product-discovery',
    index: '01',
    title: 'Product Discovery & Analysis',
    description:
      'Aligning product direction with business goals through requirement analysis and collaborative stakeholder discovery.',
    deliverables: [
      'BRD/FRD Analysis',
      'Requirement Gathering',
      'Stakeholder Collaboration',
      'Business Understanding',
    ],
    iconName: 'Search',
  },
  {
    id: 'ux-strategy',
    index: '02',
    title: 'UX Strategy & Architecture',
    description:
      'Structuring complex systems into intuitive journeys, clean navigation hierarchies, and logical workflows.',
    deliverables: [
      'User Journeys',
      'User Flows',
      'Information Architecture',
      'Navigation Design',
      'Workflow Mapping',
    ],
    iconName: 'GitMerge',
  },
  {
    id: 'ui-interaction',
    index: '03',
    title: 'UI & Interaction Design',
    description:
      'Crafting practical, responsive, and high-clarity interfaces tailored for data-heavy operational products.',
    deliverables: [
      'Wireframing',
      'High-Fidelity UI',
      'Responsive Design',
      'Interaction Patterns',
      'Dashboard Design',
    ],
    iconName: 'Layout',
  },
  {
    id: 'design-systems',
    index: '04',
    title: 'Design Systems',
    description:
      'Establishing scalable design tokens, Figma variants, and reusable component libraries for lasting consistency.',
    deliverables: [
      'Design Tokens',
      'Component Libraries',
      'Figma Variants',
      'Reusable Components',
      'UI Consistency',
    ],
    iconName: 'Layers',
  },
  {
    id: 'prototyping-validation',
    index: '05',
    title: 'Prototyping & Validation',
    description:
      'Bringing concepts to life with interactive prototypes and functional mockups to validate workflows early.',
    deliverables: [
      'Interactive Prototypes',
      'Functional Mockups',
      'Usability Improvements',
      'Design Reviews',
    ],
    iconName: 'PlaySquare',
  },
  {
    id: 'handoff-collaboration',
    index: '06',
    title: 'Design Handoff & Collaboration',
    description:
      'Bridging design and engineering with clear specifications, documentation, and hands-on implementation support.',
    deliverables: [
      'Design Documentation',
      'Developer Handoff',
      'Frontend Collaboration',
      'Implementation Support',
    ],
    iconName: 'Code2',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Discover & Understand',
    subtitle: 'Business context & system requirements',
    description:
      'Business requirements, BRD/FRD analysis, stakeholder discussions and product understanding.',
    keyActivities: [
      'Business Requirements',
      'BRD/FRD Analysis',
      'Stakeholder Discussions',
      'Product Understanding',
    ],
  },
  {
    stepNumber: '02',
    title: 'Research & Define',
    subtitle: 'Users, friction & problem clarity',
    description:
      'User roles, user journeys, pain points, requirements clarification and problem definition.',
    keyActivities: [
      'User Roles',
      'User Journeys',
      'Pain Points',
      'Requirements Clarification & Problem Definition',
    ],
  },
  {
    stepNumber: '03',
    title: 'Structure & Architect',
    subtitle: 'Information & interaction foundation',
    description:
      'Information architecture, navigation, module hierarchy, user flows and interaction logic.',
    keyActivities: [
      'Information Architecture',
      'Navigation & Module Hierarchy',
      'User Flows',
      'Interaction Logic',
    ],
  },
  {
    stepNumber: '04',
    title: 'Design & Systemize',
    subtitle: 'Scalable UI & component tokens',
    description:
      'Wireframes, high-fidelity UI, responsive layouts, design tokens and reusable components.',
    keyActivities: [
      'Wireframes & High-Fidelity UI',
      'Responsive Layouts',
      'Design Tokens',
      'Reusable Components',
    ],
  },
  {
    stepNumber: '05',
    title: 'Prototype & Validate',
    subtitle: 'Interactive testing & alignment',
    description:
      'Interactive prototypes, functional flows, usability improvements and stakeholder reviews.',
    keyActivities: [
      'Interactive Prototypes',
      'Functional Flows',
      'Usability Improvements',
      'Stakeholder Reviews',
    ],
  },
  {
    stepNumber: '06',
    title: 'Handoff & Collaborate',
    subtitle: 'Engineering delivery & support',
    description:
      'Design specifications, component documentation, developer handoff and implementation support.',
    keyActivities: [
      'Design Specifications',
      'Component Documentation',
      'Developer Handoff',
      'Implementation Support',
    ],
  },
];

export const TOOLS_AND_TECH: ToolItem[] = [
  {
    id: 'figma',
    name: 'Figma',
    category: 'UI/UX & Prototyping',
    iconName: 'PenTool',
  },
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    category: 'Visual Design',
    iconName: 'Image',
  },
  {
    id: 'after-effects',
    name: 'Adobe After Effects',
    category: 'Motion Graphics',
    iconName: 'Film',
  },
  {
    id: 'google-ai-studio',
    name: 'Google AI Studio',
    category: 'AI-assisted Development',
    iconName: 'Cpu',
  },
  {
    id: 'wordpress-elementor',
    name: 'WordPress & Elementor',
    category: 'Website Implementation',
    iconName: 'Globe',
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    category: 'AI-assisted Workflows',
    iconName: 'Terminal',
  },
  {
    id: 'stitch-uxpilot',
    name: 'Google Stitch & UXPilot',
    category: 'AI Design Exploration',
    iconName: 'Sparkles',
  },
];

export const DOMAIN_EXPERIENCES: DomainExperience[] = [
  {
    id: 'transportation',
    name: 'Transportation',
    description:
      'Trip lifecycle management, operational KPI dashboards, cargo and delay handling, and complex conditional filtering.',
    complexityFactors: ['High-density trip tables', 'Dynamic & saved filter views', 'Delay exception workflows'],
    keyChallengesSolved:
      'Designed TMS workflows balancing complex filtering logic with rapid operational visibility.',
  },
  {
    id: 'logistics',
    name: 'Logistics & Marketplaces',
    description:
      'Multi-vertical logistics ecosystems, universal search, global filters, and end-to-end provider onboarding.',
    complexityFactors: ['Multi-persona journeys', 'Cross-vertical search', 'Scalable design systems'],
    keyChallengesSolved:
      'Built unified discovery and onboarding flows for LogistikGuru across web and mobile.',
  },
  {
    id: 'warehouse-operations',
    name: 'Warehouse & Facility Ops',
    description:
      'Warehouse configuration architecture, dock scheduling, gate check-ins, yard queues, and equipment handling.',
    complexityFactors: ['Hierarchical storage setup', 'Dock & yard coordination', 'Status-driven operations'],
    keyChallengesSolved:
      'Structured WMS and DMS modules into clear, predictable workflows for facility teams.',
  },
  {
    id: 'fleet-operations',
    name: 'Fleet Operations',
    description:
      'Fleet dashboards, vehicle and driver management workflows, and operational resource allocation.',
    complexityFactors: ['Multi-resource status tracking', 'Vehicle-driver pairing', 'Operational visibility'],
    keyChallengesSolved:
      'Simplified FMS resource allocation and status presentation through interactive UI prototypes.',
  },
  {
    id: 'sports-creative',
    name: 'Sports & Visual Storytelling',
    description:
      'Sports talent scouting profiles, discovery experiences, motion graphics, and promotional storytelling.',
    complexityFactors: ['Motion & scene animation', 'Discovery UX', 'Brand communication'],
    keyChallengesSolved:
      'Combined UI product concepts with After Effects production and social creatives for StarsIn.',
  },
  {
    id: 'healthcare',
    name: 'Healthcare Systems',
    description:
      'Hospital management product design experience supporting clinical and administrative workflows.',
    complexityFactors: ['Role-sensitive workflows', 'Structured patient & operational views', 'Scope alignment'],
    keyChallengesSolved:
      'Applied structured UX architecture and practical interface design to hospital management workflows.',
  },
];
