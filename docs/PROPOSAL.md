# UPWORK PROPOSAL & COVER LETTER

hi Adam, i built a working architectural prototype of your private men's marriage-prep membership and progress-tracking platform so you can test live: https://ef-platform.vercel.app
code: https://github.com/exelentshakil/ef-platform | portfolio: https://shakilhq.com

it demonstrates role-based interface switching, a mock administrative client tracking grid, placeholder curriculum ingestion, and simulated developer access-masking logs. the underlying codebase is inside the github link above.

i have over 12 years of professional systems experience, including 5 years as lead architect at Legiit ($1M ARR, 400K+ users). i own feature design and technical delivery end to end with zero handholding.

i wrote detailed, production-grade answers to your 10 architecture and security questions below.

best,
Shak

---

1. What similar membership, LMS, client portal, or workflow platforms have you built?
at Legiit, i designed and built the entire core order processing workflow, client-coach messaging workspace, multi-step completion states, file upload queues, and custom administrative audit trails.

2. What technology stack would you recommend for a platform like this and why?
i recommend Next.js 15 on Vercel with Supabase (PostgreSQL). Next.js offers fast rendering and server-side security, while Supabase provides secure JWT auth and Row-Level Security (RLS) policies at the database level to prevent horizontal PII leaks.

3. How would you structure the platform so that the developer can build it using dummy content while the company retains control of its proprietary curriculum?
we decouple the database schema from content. the developer designs relational JSON structures using dummy metadata (e.g. Module 1, Lesson A) to test the engine. once live, you publish real manuscripts, videos, and questions through a secure admin CMS panel that ordinary contractors cannot access.

4. How would you prevent developers or ordinary administrators from automatically having unrestricted access to production client data?
we enforce least privilege using Supabase RLS. queries run strictly bound to the user session, never as super-admin. for developers, we redact production PII using database views or force development to run against an isolated staging replica with synthetic profiles. access keys are rotated monthly.

5. How would you implement role-based permissions?
we build a Postgres roles table linked to user profiles, validating JWT claims on every request. members can only access their own records and progress. coaches can only manage clients mapped directly to them in a joint mapping table. admins get broad reporting, content editing, and user management capabilities.

6. How would you track genuine user progress rather than simply allowing users to mark lessons complete?
we avoid passive checkboxes. progress is statefully computed based on active milestones: verifying the client spent active time on the lesson page/video, requiring them to type a workbook text reflection of a minimum character length, and requiring 100% submission or direct coach approval on assessments before unlocking subsequent content.

7. How would you design the content-management system so our team can add and change curriculum without developer assistance?
we construct an admin dashboard with a drag-and-drop hierarchy builder. you can visually create modules, insert lessons, drag to reorder them, add rich text, upload videos, and build questionnaires. these save directly as structured database rows, updating the client portal instantly without code changes or developer intervention.

8. How would you separate the staging/development environment from production?
we run two isolated Supabase and Vercel environments: staging-ef-platform (for building and testing against dummy profiles) and production-ef-platform (your live site). staging has zero access keys or network connectivity to production, and updates deploy cleanly via Git merges.

9. What steps would you take so another qualified developer could maintain the system in the future?
i write code for readability, not cleverness. i will provide a comprehensive CLAUDE.md detailing commands and security boundaries, 100% TypeScript type-safety with Zod schemas, automated permission tests, and a detailed handover runbook with screencasts of the architecture.

10. Please provide examples of relevant work and explain specifically what portions you personally built.
at Legiit, i personally engineered the transactional database schemas, file upload queues with S3, role permission validations, and active status triggers. you can inspect the pristine full-stack code of the prototype i built for you today on the GitHub link at the top of this proposal.