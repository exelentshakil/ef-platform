/**
 * Million-Dollar Demo Cockpit Configuration Hub
 * Central Schema & Data Provider for Light-Speed Customization.
 *
 * Tailored for Everything Foreign ("EF PLATFORM") Custom Membership & Curriculum System.
 */

export interface NavItem {
  id: string;
  label: string;
}

export interface MetricItem {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'neutral' | 'down';
  subtext: string;
  badge: string;
}

export interface TableRow {
  id: string;
  entityName: string;
  category: string;
  status: 'active' | 'verified' | 'queued' | 'flagged';
  latency: string;
  provider: string;
  updatedAt: string;
  payload: Record<string, unknown>;
}

export interface SiteConfig {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  archetype: 'stripe' | 'linear' | 'notion' | 'lovable' | 'bloomberg' | 'apple';
  primaryNav: NavItem[];
  metrics: MetricItem[];
  workflow: {
    badge: string;
    title: string;
    description: string;
    inputLabel: string;
    inputPlaceholder: string;
    defaultInput: string;
    buttonLabel: string;
    sampleResponse: Record<string, unknown>;
  };
  table: {
    badge: string;
    title: string;
    description: string;
    columns: { key: string; label: string }[];
    rows: TableRow[];
  };
}

export const siteConfig: SiteConfig = {
  slug: 'ef-platform',
  name: 'EF Platform',
  badge: 'v1.0 Architecture Blueprint',
  tagline: 'Proprietary Men’s Marriage-Prep Membership & Progress-Tracking Engine',
  description: 'Production-hardened, role-isolated learning management and progress analytics suite built to secure intellectual property, enforce strict role-based access controls, and log high-integrity audit trails.',
  archetype: 'stripe',
  primaryNav: [
    { id: 'cockpit', label: 'Student Portal' },
    { id: 'pipeline', label: 'Counselor Dashboard' },
    { id: 'records', label: 'Curriculum & Pricing' },
  ],
  metrics: [
    {
      id: 'marital_alignment',
      title: 'Marital Alignment Trend',
      value: '92.8% Average',
      change: '+10.4% Sync',
      trend: 'up',
      subtext: 'Tracks communication & commitment readiness values',
      badge: 'Student Outcomes',
    },
    {
      id: 'workbook_completion',
      title: 'Stateful Workbook Progress',
      value: '15.2 Chapters',
      change: 'Zero Checkboxes',
      trend: 'up',
      subtext: 'Computed statefully based on active reflection length',
      badge: 'Genuine Writing',
    },
    {
      id: 'coach_sla',
      title: 'Coach Evaluation SLA',
      value: '99.4% Completed',
      change: 'Sub-24h Audit',
      trend: 'up',
      subtext: 'Certified lead counselors audit and unlock milestones',
      badge: '1-on-1 Guidance',
    },
  ],
  workflow: {
    badge: 'Simulation Stage 1',
    title: 'Simulate Counselor & Student Record Access Audits',
    description: 'Verify how the platform strictly isolates counselor-student records, automatically redacting sensitive files if an unauthorized role requests them.',
    inputLabel: 'Configure Simulated Counselor Query Context',
    inputPlaceholder: 'Configure simulated counselor query...',
    defaultInput: 'Coach Profile: Robert (Assigned Students: [CL-8801, CL-8803]). Action: Request workbook answer sheet for Client (CL-8804) who is assigned to Coach Sarah.',
    buttonLabel: 'Run Security Access Simulation & Check Rules',
    sampleResponse: {
      status: 'ACCESS_DENIED_AND_AUDITED',
      requested_operation: 'READ_STUDENT_WORKBOOK_REPLY',
      actor_context: {
        coach_id: 'coach_robert',
        role: 'assigned_coach',
        assigned_students: ['CL-8801', 'CL-8803'],
        target_student: 'CL-8804',
      },
      security_assertion: {
        access_granted: false,
        reason: 'Student CL-8804 is outside the assigned scope for Coach Robert (Least Privilege Violation)',
        action_taken: 'Response body redacted. Retained baseline student info and metadata only.',
      },
      audit_log_serialized: {
        event_id: 'AUD-88201',
        timestamp: '2026-09-26T08:44:12Z',
        actor_ip: '192.168.1.104',
        event_type: 'UNAUTHORIZED_ACCESS_ATTEMPT',
        threat_level: 'LOW (Standard rule blocking)',
        database_action: 'Blocked before querying PostgreSQL schema',
      },
      developer_content_masking: {
        curriculum_data: 'SYNTHETIC_DATA_ACTIVE',
        curriculum_loaded: {
          module: 'Module 1: Foundations of Commitment',
          lesson: 'Lesson 1: Clarifying Core Personal Marriage Prep Values',
          video_element: 'https://placeholder.vimeo.com/video/sample-id',
          workbook_questions: [
            'Identify three foundational values you bring into this marriage.',
            'Describe your shared long-term vision for family structure and financial rules.'
          ],
        },
      },
    },
  },
  table: {
    badge: 'Completed System Blueprints',
    title: 'Client Records & Progress Matrix',
    description: 'High-density inspection ledger simulating an authorized administrative view of client progress, completed assessments, and pending coach evaluations.',
    columns: [
      { key: 'id', label: 'Client ID' },
      { key: 'entityName', label: 'Client Initials' },
      { key: 'category', label: 'Current Module Stage' },
      { key: 'status', label: 'Review Status' },
      { key: 'latency', label: 'Overall Completion' },
      { key: 'action', label: 'Actions' },
    ],
    rows: [
      {
        id: 'CL-8801',
        entityName: 'John D.',
        category: 'Module 1: Foundations',
        status: 'verified',
        latency: '85%',
        provider: 'Coach Sarah (Assigned)',
        updatedAt: '2 mins ago',
        payload: {
          client_initials: 'John D.',
          intake_status: 'Complete',
          current_stage: 'Module 1, Lesson 4',
          workbook_status: 'All Questions Answered',
          last_activity_time: '15 mins ago',
          assessments_completed: ['Intake Assessment', 'Values Questionnaire'],
          staff_notes: 'Highly engaged in foundations phase. Moving to next module after tomorrow’s coaching call.',
        },
      },
      {
        id: 'CL-8802',
        entityName: 'Michael S.',
        category: 'Onboarding Phase',
        status: 'active',
        latency: '15%',
        provider: 'System Automations',
        updatedAt: '12 mins ago',
        payload: {
          client_initials: 'Michael S.',
          intake_status: 'Pending Document Upload',
          current_stage: 'Intake and Orientation',
          workbook_status: '0 Questions Answered',
          last_activity_time: '2 hours ago',
          assessments_completed: [],
          staff_notes: 'Sent automated sms reminder for requested intake uploads.',
        },
      },
      {
        id: 'CL-8803',
        entityName: 'Robert K.',
        category: 'Module 3: Communication',
        status: 'queued',
        latency: '60%',
        provider: 'Coach Robert (Assigned)',
        updatedAt: '1 hour ago',
        payload: {
          client_initials: 'Robert K.',
          intake_status: 'Complete',
          current_stage: 'Module 3, Lesson 2 (Active)',
          workbook_status: 'Pending Coach Evaluation',
          last_activity_time: '1 hour ago',
          assessments_completed: ['Intake Assessment', 'Conflict Resolution Guide'],
          staff_notes: 'Submitted workbook reflection. Awaiting Coach review to unlock next module.',
        },
      },
      {
        id: 'CL-8804',
        entityName: 'Thomas L.',
        category: 'Module 6: Handoff Phase',
        status: 'verified',
        latency: '98%',
        provider: 'Admin (Escalated)',
        updatedAt: '1 day ago',
        payload: {
          client_initials: 'Thomas L.',
          intake_status: 'Complete',
          current_stage: 'Program Completion Review',
          workbook_status: '100% Approved',
          last_activity_time: '1 day ago',
          assessments_completed: ['All 6 Module Appraisals', 'Final Marriage Charter'],
          staff_notes: 'Completed full curriculum. Graduating program on next active cycle.',
        },
      },
      {
        id: 'CL-8805',
        entityName: 'Benjamin H.',
        category: 'Module 2: Alignment',
        status: 'flagged',
        latency: '40%',
        provider: 'Coach Sarah (Assigned)',
        updatedAt: '2 days ago',
        payload: {
          client_initials: 'Benjamin H.',
          intake_status: 'Complete',
          current_stage: 'Module 2, Lesson 1',
          workbook_status: 'Inactive Over 14 Days',
          last_activity_time: '16 days ago',
          assessments_completed: ['Intake Assessment'],
          staff_notes: 'Marked flagged due to zero progression events. Sent coach check-in email.',
        },
      },
    ],
  },
};
