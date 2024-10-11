SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- Drop existing tables if they exist (for re-running the script)
DROP TABLE IF EXISTS medical_record, treatment_plan, appointment, bill, prescription, insurance, room, doctor_department, nurse, department, doctor, patient, admin, hospital, user;

-- Create the hospital table
CREATE TABLE hospital (
    hos_id INT PRIMARY KEY,
    hos_name VARCHAR(255),
    hos_email VARCHAR(255),
    hos_no INT(11),
    hos_address VARCHAR(255),
    hos_password VARCHAR(255)
);

-- Create the user table
CREATE TABLE user (
    user_id INT PRIMARY KEY,
    hos_id INT,
    name VARCHAR(255),
    email VARCHAR(255),
    phone_no VARCHAR(20),
    address VARCHAR(255),
    gender VARCHAR(10),
    password VARCHAR(255),
    FOREIGN KEY (hos_id) REFERENCES hospital(hos_id) UNIQUE ON DELETE CASCADE
);

-- Create the doctor table
CREATE TABLE doctor (
    doctor_id INT PRIMARY KEY,
    user_id INT,
    specialization VARCHAR(255),
    hos_id INT,
    FOREIGN KEY (user_id) REFERENCES user(user_id) UNIQUE ON DELETE CASCADE,
    FOREIGN KEY (hos_id) REFERENCES hospital(hos_id) UNIQUE ON DELETE CASCADE
);

-- Create the patient table
CREATE TABLE patient (
    patient_id INT PRIMARY KEY,
    user_id INT,
    guardian_name VARCHAR(255),
    guardian_no VARCHAR(20),
    blood_group VARCHAR(5),
    dob DATE,
    height INT,
    weight INT,
    occupation VARCHAR(255),
    hos_id INT,
    FOREIGN KEY (user_id) REFERENCES user(user_id) UNIQUE ON DELETE CASCADE,
    FOREIGN KEY (hos_id) REFERENCES hospital(hos_id) UNIQUE ON DELETE CASCADE
);

-- Create the admin table
CREATE TABLE admin (
    admin_id INT PRIMARY KEY,
    user_id INT,
    hos_id INT,
    FOREIGN KEY (user_id) REFERENCES user(user_id) UNIQUE ON DELETE CASCADE,
    FOREIGN KEY (hos_id) REFERENCES hospital(hos_id) UNIQUE ON DELETE CASCADE
);

-- Create the department table
CREATE TABLE department (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(255),
    hos_id INT,
    head_id INT,
    FOREIGN KEY (hos_id) REFERENCES hospital(hos_id) UNIQUE ON DELETE CASCADE,
    FOREIGN KEY (head_id) REFERENCES doctor(doctor_id) UNIQUE ON DELETE CASCADE
);

-- Create the nurse table
CREATE TABLE nurse (
    nurse_id INT PRIMARY KEY,
    user_id INT,
    dept_id INT,
    hos_id INT,
    FOREIGN KEY (user_id) REFERENCES user(user_id) UNIQUE ON DELETE CASCADE,
    FOREIGN KEY (dept_id) REFERENCES department(dept_id),
    FOREIGN KEY (hos_id) REFERENCES hospital(hos_id) UNIQUE ON DELETE CASCADE
);

-- Create the treatment_plan table
CREATE TABLE treatment_plan (
    treatment_id INT PRIMARY KEY,
    patient_id INT,
    doctor_id INT,
    treatment_desc VARCHAR(255),
    start_date DATE,
    end_date DATE,
    hos_id INT,
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id) ON DELETE CASCADE,
    FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id) ON DELETE CASCADE,
    FOREIGN KEY (hos_id) REFERENCES hospital(hos_id) ON DELETE CASCADE
);

-- Create the appointment table
CREATE TABLE appointment (
    appointment_id INT PRIMARY KEY,
    patient_id INT,
    doctor_id INT,
    appointment_date DATE,
    appointment_time TIME,
    hos_id INT,
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id) UNIQUE ON DELETE CASCADE,
    FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id) UNIQUE ON DELETE CASCADE,
    FOREIGN KEY (hos_id) REFERENCES hospital(hos_id) ON DELETE CASCADE
);

-- Create the medical_record table
CREATE TABLE medical_record (
    record_id INT PRIMARY KEY,
    patient_id INT,
    treatment_id INT,
    test VARCHAR(255),
    prescription VARCHAR(255),
    diagnoses VARCHAR(255),
    hos_id INT,
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id) ON DELETE CASCADE,
    FOREIGN KEY (treatment_id) REFERENCES treatment_plan(treatment_id) ON DELETE CASCADE,
    FOREIGN KEY (hos_id) REFERENCES hospital(hos_id) ON DELETE CASCADE
);

-- Create the bill table
CREATE TABLE bill (
    bill_id INT PRIMARY KEY,
    patient_id INT,
    total_amount DECIMAL(10, 2),
    payment_method VARCHAR(50),
    payment_status VARCHAR(50),
    hos_id INT,
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id) ON DELETE CASCADE,
    FOREIGN KEY (hos_id) REFERENCES hospital(hos_id) ON DELETE CASCADE
);

-- Create the prescription table
CREATE TABLE prescription (
    prescription_id INT PRIMARY KEY,
    patient_id INT,
    doctor_id INT,
    hos_id INT,
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id) ON DELETE CASCADE,
    FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id) ON DELETE CASCADE,
    FOREIGN KEY (hos_id) REFERENCES hospital(hos_id) ON DELETE CASCADE
);

-- Create the room table
CREATE TABLE room (
    room_id INT PRIMARY KEY,
    cost DECIMAL(10, 2),
    hos_id INT,
    FOREIGN KEY (hos_id) REFERENCES hospital(hos_id) ON DELETE CASCADE
);

-- Create the insurance table
CREATE TABLE insurance (
    insurance_id INT PRIMARY KEY,
    patient_id INT,
    provider_name VARCHAR(255),
    hos_id INT,
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id) ON DELETE CASCADE,
    FOREIGN KEY (hos_id) REFERENCES hospital(hos_id) ON DELETE CASCADE
);

-- Insert sample data into the hospital table
INSERT INTO hospital (hos_id, hos_name, hos_email, hos_no, hos_address, hos_password) VALUES
(1, 'General Hospital', 'contact@genhospital.com', 123, '987 General St', 'hos_pass1'),
(2, 'City Hospital', 'contact@cityhospital.com', 124, '123 City Blvd', 'hos_pass2'),
(3, 'Metro Hospital', 'contact@metrohospital.com', 125, '456 Metro Ave', 'hos_pass3'),
(4, 'Sunrise Hospital', 'contact@sunrisehospital.com', 126, '789 Sunrise Rd', 'hos_pass4'),
(5, 'Oceanview Hospital', 'contact@oceanview.com', 127, '321 Ocean Dr', 'hos_pass5');

-- Insert sample data into the user table
INSERT INTO user (user_id, hos_id, name, email, phone_no, address, gender, password) VALUES
(1, 1, 'Dr. John Smith', 'john.smith@hospital.com', '555-1234', '123 Doctor St', 'Male', 'pass123'),
(2, 2, 'Nurse Mary Johnson', 'mary.johnson@hospital.com', '555-5678', '456 Nurse Ln', 'Female', 'pass456'),
(3, 3, 'Patient Alice Brown', 'alice.brown@gmail.com', '555-9101', '789 Patient Ave', 'Female', 'pass789'),
(4, 4, 'Admin Robert Miller', 'robert.miller@hospital.com', '555-1213', '101 Admin Blvd', 'Male', 'passadmin'),
(5, 5, 'Dr. Emily Davis', 'emily.davis@hospital.com', '555-1415', '202 Doctor Rd', 'Female', 'passemily');

-- Insert data into the doctor table
INSERT INTO doctor (doctor_id, user_id, specialization, hos_id) VALUES
(1, 1, 'Cardiology', 1),
(2, 5, 'Neurology', 5);

-- Insert data into the patient table
INSERT INTO patient (patient_id, user_id, guardian_name, guardian_no, blood_group, dob, height, weight, occupation, hos_id) VALUES
(1, 3, 'Peter Brown', '555-2323', 'O+', '1990-05-10', 165, 70, 'Engineer', 3),
(2, 3, 'George Johnson', '555-2324', 'A+', '1985-07-15', 170, 75, 'Teacher', 3);

-- Insert data into the admin table
INSERT INTO admin (admin_id, user_id, hos_id) VALUES
(1, 4, 4);

-- Insert data into the department table
INSERT INTO department (dept_id, dept_name, hos_id, head_id) VALUES
(1, 'Cardiology', 1, 1),
(2, 'Neurology', 5, 2);

-- Insert data into the nurse table
INSERT INTO nurse (nurse_id, user_id, dept_id, hos_id) VALUES
(1, 2, 1, 2);

-- Insert data into the treatment_plan table
INSERT INTO treatment_plan (treatment_id, patient_id, doctor_id, treatment_desc, start_date, end_date, hos_id) VALUES
(1, 2, 1, 'Heart Surgery', '2023-01-01', '2023-01-15', 1),
(2, 1, 2, 'Brain Surgery', '2023-02-01', '2023-02-15', 5);