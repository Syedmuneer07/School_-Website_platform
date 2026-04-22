-- PostgreSQL schema for the school platform.
DROP TABLE IF EXISTS achievements, results, alumni, events, users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,           -- bcrypt hash
  role VARCHAR(20) NOT NULL DEFAULT 'admin'
);

CREATE TABLE achievements (
  id SERIAL PRIMARY KEY,
  student_name VARCHAR(120) NOT NULL,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE results (
  id SERIAL PRIMARY KEY,
  student_name VARCHAR(120) NOT NULL,
  roll_number VARCHAR(50) NOT NULL,
  subject VARCHAR(100) NOT NULL,
  marks INTEGER NOT NULL CHECK (marks >= 0 AND marks <= 100)
);
CREATE INDEX idx_results_roll ON results(roll_number);

CREATE TABLE alumni (
  id SERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  company VARCHAR(120),
  role VARCHAR(120),
  story TEXT
);

CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  date DATE NOT NULL
);
