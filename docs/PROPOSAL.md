# UPWORK PROPOSAL & COVER LETTER

EF PLATFORM

hi Adam, i built a working architectural prototype of your private men's marriage-prep membership and progress-tracking platform so you can test live: https://ef-platform.vercel.app
code: https://github.com/exelentshakil/ef-platform | portfolio: https://shakilhq.com

it demonstrates role-based interface switching, a mock administrative client tracking grid, placeholder curriculum ingestion, and simulated developer access-masking logs. the underlying codebase is inside the github link above.

i have over 12 years of professional systems engineering experience, including 5 years as lead systems architect at Legiit, a digital platform with over 400,000 active users and $1M in ARR. i own feature design and technical delivery end to end with zero handholding.

i wrote detailed, production-grade answers to your 9 architecture and security questions below. 

best,
Shak

---

# UPWORK SCREENING QUESTIONS

## 1. What similar membership, LMS, client portal, or workflow platforms have you built?
at Legiit, i built and maintained their core client workspace and order delivery pipeline. this involved tracking multi-step completion states, document uploading, automated coach-to-client notifications, feedback loops, and timeline milestone checks. i also built custom SaaS dashboards showing real-time client activity metrics, pending review statuses, and admin audit trails.

## 2. What technology stack would you recommend for a platform like this and why?
i recommend Next.js 15 (React, TypeScript) for the frontend combined with Supabase (PostgreSQL) for the database. 
- Next.js gives you rapid development, server-side security, and a beautiful responsive interface. 
- Supabase provides instant, secure authentication out of the box and powerful Row-Level Security (RLS) rules at the database engine level, which is a non-negotiable requirement for protecting sensitive client information.

## 3. How would you structure the platform so that the developer can build it using dummy content while the company retains control of its proprietary curriculum?
we decouple the database curriculum schema from the content. the developer creates a standard JSON-based "Module", "Lesson", and "Assessment" structure using fake metadata (e.g. Module 1, Lesson A, Question 1) to build and test the entire engine. 
once the code is deployed to production, we hand over a secure, no-code administrative CMS panel where you can input and publish your actual proprietary manuscripts, videos, and questions. the developer never sees or touches the real content.

## 4. How would you prevent developers or ordinary administrators from automatically having unrestricted access to production client data?
we enforce the principle of least privilege using Supabase Row-Level Security (RLS) policies. database queries do not run as a master admin; instead, they are bound to the specific logged-in user session. 
for developers, we completely strip and redact PII fields (like names and emails) in the database using automated views, or force development to run against an isolated staging environment with 100% synthetic mock profiles. production access keys are rotated monthly and restricted strictly to you.

## 5. How would you implement role-based permissions?
we build a Postgres roles table linked to user profiles. on every API call and database request, the backend validates the user's JWT claims. 
- members can only READ their own record and curriculum progress. 
- coaches can only READ or EDIT clients explicitly assigned to them in a joint mapping table. 
- admins and owners get broader reporting, content editing, and user management capabilities. 
this prevents horizontal privilege escalation where an ordinary user or contractor could sneakily read another client's answers.

## 6. How would you track genuine user progress rather than simply allowing users to mark lessons complete?
we avoid passive checkboxes. instead, progress is statefully computed based on active milestone events:
- verifying the client spent active time on the page or video before enabling the next section.
- requiring them to type a workbook text reflection of a minimum character length.
- requiring a 100% submission score or direct coach approval on a module's core assessment before the system unlocks the next module.

## 7. How would you design the content-management system so our team can add and change curriculum without developer assistance?
we construct an administrative CMS dashboard featuring a drag-and-drop hierarchy builder. you can create a module, insert lessons, drag to reorder them, add rich text blocks, upload videos or audios, and visually construct questionnaires. 
each curriculum item is represented as a structured row in our relational database, so the system instantly updates and renders the new layout to members without needing a single line of code or developer intervention.

## 8. How would you separate the staging/development environment from production?
we run two completely isolated Supabase projects and Vercel environments:
- `staging-ef-platform` (where the developer builds features, tests integrations, and runs tests against fake data).
- `production-ef-platform` (your live operational site where real clients and real curriculum live).
staging has zero network connectivity or access keys to production. we deploy code changes using git branches (feature branches merge to dev for staging testing, then main for production releases), ensuring zero manual mistakes on live data.

## 9. What steps would you take so another qualified developer could maintain the system in the future?
i write code for readability, not cleverness. i will provide:
- a comprehensive `CLAUDE.md` in the repository detailing commands, schemas, and security boundaries.
- 100% typed variables, props, and schemas using TypeScript and Zod validators.
- full automated unit and integration tests covering permissions, progress tracking, and forms.
- a detailed handover runbook and screen recordings walking through the database architecture and CMS.
this ensures any senior engineer can step in and understand the system in 10 minutes without guessing.

## 10. Please provide examples of relevant work and explain specifically what portions you personally built.
at Legiit, i designed and built the entire core order processing workflow and client-coach messaging workspace. i personally engineered the transactional database schemas, role permission validations, file upload queues with S3, and real-time active status triggers. you can review the pristine full-stack architecture of the prototype i built for you today on the GitHub link at the top of this proposal.
