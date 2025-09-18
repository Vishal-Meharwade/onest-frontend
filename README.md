# 🎓 Alumni Job Connect – Full-Stack Platform

**Connecting Colleges, Alumni & Local Jobs Effortlessly**  

This project is a **full-stack Alumni Job Connect platform** built to help government and small private colleges connect recent alumni (0–2 years out) with local employers. Even institutions with minimal tech staff can onboard alumni, verify skills, and manage job matching automatically.

---

## 🌟 Highlights & Achievements

This project showcases:

- **End-to-end Full-Stack Development**
  - Frontend in **React.js** with **TailwindCSS**, fully responsive and modern UI
  - Backend in **Node.js + Express** with JWT-based authentication
  - PostgreSQL database with normalized schema for alumni, employers, jobs, applications, referrals, and peer verifications

- **Advanced Features Implemented**
  - Alumni onboarding via **web & WhatsApp**
  - Skill verification & readiness scoring
  - Job matching engine filtering alumni by skills & location
  - Peer-Verified Trust Network (USP)
  - Alumni referral system & trust scoring
  - College and employer dashboards with CRUD operations

- **Technical Depth**
  - **REST API architecture** with Axios integration
  - JWT-based **auth and role management**
  - Dynamic dashboard rendering based on user role (Alumni, Employer, College Admin)
  - File upload support for resumes, certificates, and CSV verification
  - Skill auto-tagging and profile completeness scoring
  - Real-time peer validation workflow

- **Modern & Aesthetic UI**
  - Custom TailwindCSS components
  - Interactive dashboards for alumni/job tracking
  - Elegant forms, modals, and notifications
  - Unique design unlike standard admin panels

---

## 🧱 Database (PostgreSQL – `alumni_database`)

Tables implemented:

- **alumni** – tracks alumni info, skills, resume, verification, and trust scores
- **employers** – employer credentials and company info
- **jobs** – job postings with skills, type, location
- **job_applications** – alumni job applications with status
- **referrals** – tracks alumni job referrals
- **peer_verifications** – peer skill validation for trust scores

**Example Table: Alumni**
```sql
CREATE TABLE alumni (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  email VARCHAR UNIQUE,
  phone VARCHAR,
  whatsapp_connected BOOLEAN,
  graduation_year INT,
  degree VARCHAR,
  is_verified BOOLEAN DEFAULT FALSE,
  readiness_score INT,
  trust_score INT DEFAULT 0,
  resume_link TEXT,
  certifications TEXT[],
  skills TEXT[],
  current_employer TEXT
);
