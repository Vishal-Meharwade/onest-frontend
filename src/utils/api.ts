// src/api/api.ts
import axios from "axios";

// ======================
// Base URLs (microservices)
// ======================
const API_AUTH = "http://localhost:8081"; // auth-user-service
const API_JOBS = "http://localhost:8082"; // job-service
const API_SKILLS = "http://localhost:8083"; // skill-service

// ======================
// Axios instance with auth
// ======================
const api = axios.create();

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// ======================
// AUTH FUNCTIONS
// ======================

/**
 * Login user and return JWT + role
 */
export async function login(email: string, password: string) {
  const response = await fetch(`${API_AUTH}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  const token = await response.text(); // plain string
  const payload = parseJwt(token);

  localStorage.setItem("token", token);
  if (payload.sub) {
    localStorage.setItem("userId", payload.sub);
  }

  return { token, role: payload.role, userId: payload.sub };
}

/**
 * Decode JWT payload safely
 */
function parseJwt(token: string): any {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error("JWT parse error", e);
    return {};
  }
}

// ======================
// JOBS FUNCTIONS
// ======================

/**
 * Fetch all jobs
 */
export async function getJobs() {
  const res = await api.get(`${API_JOBS}/api/jobs`);
  return res.data;
}

/**
 * Post a new job (employer only)
 */
export async function postJob(job: {
  title: string;
  description: string;
  location: string;
  requiredSkills: string[];
}) {
  const res = await api.post(`${API_JOBS}/api/jobs`, job);
  return res.data;
}

/**
 * Apply to a job as an alumni
 */
export async function applyJob(jobId: number, alumniId: number) {
  const res = await api.post(
    `${API_JOBS}/api/jobs/${jobId}/apply?alumniId=${alumniId}`
  );
  return res.data;
}

/**
 * Fetch jobs posted by a specific employer
 */
export async function getJobsByEmployer(employerId: number) {
  const res = await api.get(`${API_JOBS}/api/jobs/employer/${employerId}`);
  return res.data;
}

/**
 * Fetch applications made by an alumni
 */
export async function getApplicationsByAlumni(alumniId: number) {
  const res = await api.get(
    `${API_JOBS}/api/jobs/applications/alumni/${alumniId}`
  );
  return res.data;
}

// ======================
// SKILLS FUNCTIONS
// ======================

/**
 * Fetch all skills
 */
export async function getSkills() {
  const res = await api.get(`${API_SKILLS}/api/skills`);
  return res.data;
}

// ======================
// PROFILE FUNCTIONS (optional / placeholder)
// ======================

/**
 * Fetch alumni profile
 */
export async function getAlumniProfile(alumniId: string) {
  const res = await api.get(`${API_AUTH}/api/alumni/${alumniId}`);
  return res.data;
}

/**
 * Update alumni profile
 */
export async function updateAlumniProfile(alumniId: string, data: any) {
  const res = await api.put(`${API_AUTH}/api/alumni/${alumniId}`, data);
  return res.data;
}

/**
 * Fetch employer profile
 */
export async function getEmployerProfile(employerId: string) {
  const res = await api.get(`${API_AUTH}/api/employer/${employerId}`);
  return res.data;
}

/**
 * Update employer profile
 */
export async function updateEmployerProfile(employerId: string, data: any) {
  const res = await api.put(`${API_AUTH}/api/employer/${employerId}`, data);
  return res.data;
}

// ======================
// REGISTRATION FUNCTIONS
// ======================

export async function registerAlumni(data: {
  name: string;
  email: string;
  password: string;
  collegeId?: number;
}) {
  const res = await api.post(`${API_AUTH}/api/auth/register/alumni`, data);
  return res.data;
}

export async function registerEmployer(data: {
  companyName: string;
  email: string;
  password: string;
}) {
  const res = await api.post(`${API_AUTH}/api/auth/register/employer`, data);
  return res.data;
}

// ======================
// APPLICATIONS FOR DASHBOARDS
// ======================

export async function getMyApplications(alumniId: number) {
  const res = await api.get(`${API_JOBS}/api/jobs/applications/alumni/${alumniId}`);
  return res.data;
}

export async function getApplicationsForEmployer(employerId: number) {
  const res = await api.get(`${API_JOBS}/api/jobs/applications/employer/${employerId}`);
  return res.data;
}
