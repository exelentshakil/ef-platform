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
    { id: 'cockpit', label: 'Security & Role Cockpit' },
    { id: 'pipeline', label: 'Progress Analytics' },
    { id: 'records', label: 'Member Records Grid' },
  ],
  metrics: [
    {
      id: 'rb_isolation',
      title: 'Role-Based Isolation',
      value: 'Strict Least Privilege',
      change: '100% Cryptographic',
      trend: 'up',
      subtext: 'Encrypted fields and scoped database views active',
      badge: 'Zero-Leak Security',
    },
    {
      id: 'progress_fidelity',
      title: 'Progress Verification',
      value: 'Stateful Logging',
      change: 'Zero Self-Checkboxes',
      trend: 'up',
      subtext: 'Monitors real interactive milestones & assessment times',
      badge: 'Genuine Progress',
    },
    {
      id: 'ip_protection',
      title: 'IP Curriculum Protection',
      value: 'Synthetic Core',
      change: 'Curriculum Decoupled',
      trend: 'neutral',
      subtext: '100% test coverage run on decoupled sample curriculum schema',
      badge: 'Decoupled CMS',
    },
  ],
  workflow: {
    badge: 'Step 1: Test Live Role-Based Navigation & Access Isolation',
    title: 'Simulate Member vs Coach vs Admin Dashboard View Routing',
    description: 'Select an operations query or simulated user role, and watch the platform isolate menu configurations, redact sensitive client fields, and verify audit-log serialization.',
    inputLabel: 'Simulated Security Payload & User Context',
    inputPlaceholder: 'Configure simulated user session...',
    defaultInput: 'User ID: u_9012 (Role: Coach, Assigned Clients: [m_8801, m_8802]). Action: Request workbook reflections for client John Doe (m_9004) who is not assigned to this Coach.',
    buttonLabel: 'Verify Permissions & Log Action',
    sampleResponse: {
      status: 'PERMISSION_DENIED_AND_AUDITED',
      requested_operation: 'READ_CLIENT_WORKBOOK_REPLY',
      actor_context: {
        user_id: 'u_9012',
        role: 'coach',
        assigned_clients: ['m_8801', 'm_8802'],
        target_client: 'm_9004',
      },
      security_assertion: {
        access_granted: false,
        reason: 'Client m_9004 is outside the assigned scope for Coach u_9012 (Least Privilege Violation)',
        action_taken: 'Response body redacted. Retained baseline navigation and metadata only.',
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
          lesson: 'Sample Lesson A: Core Personal Values (Dummy Text)',
          video_element: 'https://placeholder.vimeo.com/video/sample-id',
          workbook_questions: ['List 3 personal goals (test question)', 'Describe your vision for family (test question)'],
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
        entityName: 'J. D. (Synthetic Data)',
        category: 'Module 1: Foundations',
        status: 'verified',
        latency: '85%',
        provider: 'Coach Sarah (Assigned)',
        updatedAt: '2 mins ago',
        payload: {
          client_initials: 'J. D.',
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
        entityName: 'M. S. (Synthetic Data)',
        category: 'Onboarding Phase',
        status: 'active',
        latency: '15%',
        provider: 'System Automations',
        updatedAt: '12 mins ago',
        payload: {
          client_initials: 'M. S.',
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
        entityName: 'R. K. (Synthetic Data)',
        category: 'Module 3: Communication',
        status: 'queued',
        latency: '60%',
        provider: 'Coach Robert (Assigned)',
        updatedAt: '1 hour ago',
        payload: {
          client_initials: 'R. K.',
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
        entityName: 'T. L. (Synthetic Data)',
        category: 'Module 6: Handoff Phase',
        status: 'verified',
        latency: '98%',
        provider: 'Admin (Escalated)',
        updatedAt: '1 day ago',
        payload: {
          client_initials: 'T. L.',
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
        entityName: 'B. H. (Synthetic Data)',
        category: 'Module 2: Alignment',
        status: 'flagged',
        latency: '40%',
        provider: 'Coach Sarah (Assigned)',
        updatedAt: '2 days ago',
        payload: {
          client_initials: 'B. H.',
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
