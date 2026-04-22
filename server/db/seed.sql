-- Sample data + default admin (username: admin, password: admin123)
-- Hash below is bcrypt for "admin@123"
INSERT INTO users (username, password, role) VALUES
('admin', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'admin');

INSERT INTO achievements (student_name, title, description, image_url) VALUES
('Aarav Singh', 'National Math Olympiad — Gold', 'Top score among 12,000 students nationwide.', 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800'),
('Meera Patel', 'State Science Fair Winner', 'Built a low-cost water purifier prototype.', 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800'),
('Rohan Das', 'Under-16 Cricket Captain', 'Led the team to district championship.', 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800');

INSERT INTO results (student_name, roll_number, subject, marks) VALUES
('Aarav Singh', 'R001', 'Mathematics', 98),
('Aarav Singh', 'R001', 'Science', 94),
('Aarav Singh', 'R001', 'English', 88),
('Meera Patel', 'R002', 'Mathematics', 91),
('Meera Patel', 'R002', 'Science', 96),
('Meera Patel', 'R002', 'English', 90);

INSERT INTO alumni (name, company, role, story) VALUES
('Priya Sharma', 'Google', 'Software Engineer', 'School gave me the curiosity that fuels my career today.'),
('Karan Mehta', 'ISRO', 'Aerospace Engineer', 'My love for physics started in the school lab.'),
('Anika Roy', 'Tata Memorial', 'Oncologist', 'Mentors here pushed me to dream bigger.');

INSERT INTO events (title, description, date) VALUES
('Annual Sports Day', 'Track & field, team sports and prize distribution.', CURRENT_DATE + INTERVAL '14 days'),
('Science Exhibition', 'Student-led demos open to parents and guests.', CURRENT_DATE + INTERVAL '30 days'),
('Parent–Teacher Meeting', 'Quarterly progress discussion.', CURRENT_DATE + INTERVAL '7 days');
