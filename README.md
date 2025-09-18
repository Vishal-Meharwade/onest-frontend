# 🎓 Alumni Job Connect

**Connecting Colleges, Alumni & Local Jobs – Effortlessly!**  

---

![banner](https://user-images.githubusercontent.com/your-banner-image.png)  

Alumni Job Connect is a **full-stack platform** designed for government and small private colleges to **help recent graduates (0–2 years out) find jobs locally** without manual effort. Even colleges with minimal tech staff can onboard alumni, match them to jobs, and track outcomes.  

---

## 🌟 Key Features

### Alumni Onboarding
- Register via **Email, Phone, or WhatsApp**
- Verified automatically using **graduation data**
- CSV upload for bulk alumni verification

### Job Matching
- Employers post jobs with required skills & location
- Alumni receive **automated match alerts**
- One-click **job application**

### Peer-Verified Trust Network (USP)
- Alumni validate each other’s skills
- Refer jobs from their companies
- Earn **Trust Points** & badges
- Builds a **trust-based hiring ecosystem**

### Admin & Employer Controls
- Approve or edit job posts
- Shortlist candidates
- Track hires & alumni placement

### Communication & Tracking
- Job alerts via **WhatsApp** or web
- Alumni can update employment status anytime
- Automatic follow-ups for inactive alumni

---

## 🛠️ Tech Stack

| Layer         | Technology |
| ------------- | ---------- |
| Frontend      | React.js + TailwindCSS |
| Backend       | Node.js + Express |
| Database      | PostgreSQL (`alumni_database`) |
| Authentication| JWT / Token-based |
| API Testing   | Integrated via Frontend |

---

## 💡 Unique Feature
**Peer-Verified Trust Network** – Alumni validate skills, refer peers to jobs, and earn a trust score, creating a **self-sustaining ecosystem** even for colleges with no dedicated staff.  

---

## 📁 Database Schema (PostgreSQL)

**Alumni Table**
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
