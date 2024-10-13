SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- Drop existing tables if they exist (for re-running the script)
DROP TABLE IF EXISTS user_details, admin_details, doctor_details, patient_details;

-- Create user_details table
CREATE TABLE user_details(
    user_id INT AUTO_INCREMENT,
    name VARCHAR(55) NOT NULL,
    email VARCHAR(95) NOT NULL UNIQUE,
    phone_no VARCHAR(11),
    address VARCHAR(155),
    gender VARCHAR(10),
    role VARCHAR(10) NOT NULL,
    password VARCHAR(155),
    PRIMARY KEY(user_id)
);

-- Create admin table
CREATE TABLE admin_details(
    id INT AUTO_INCREMENT,
    name varchar(50),
    email varchar(80),
    password varchar(150),
    PRIMARY KEY(id)
);

-- Insert into user_details
INSERT INTO admin_details
(name, email, password)
VALUES
('Md Abu Bokar', 'abu@gmail.com', 'testpass1'),
('Natsha Monir Shawon', 'nat@gmail.com', 'testpass2');

-- Create doctor table
CREATE TABLE doctor_details(
    user_id INT UNIQUE,
    speciality VARCHAR(55) NOT NULL,
    PRIMARY KEY(user_id),
    FOREIGN KEY(user_id) REFERENCES user_details(user_id) ON DELETE CASCADE
);

-- Insert into doctor
INSERT INTO doctor_details
(user_id, speciality)
VALUES
(2, 'Ophthalmologist');

--Create patient table
CREATE TABLE patient_details(
	id INT AUTO_INCREMENT,
    name varchar(50),
    email varchar(80) UNIQUE,
    phone_no INT(11) UNIQUE,
    address varchar(150),
    password varchar(150),
    blood_group varchar(5),
    dob varchar(10),
    height double(3,2),
    wight double(3,2),
    occupation varchar(50),
    guadian_name varchar(50),
    guardian_phone INT(11),
    PRIMARY KEY(id)
);

--Insert into patient
INSERT INTO patient_details 
(name, email, phone_no, address, password, blood_group, dob, height, wight, occupation, guadian_name, guardian_phone) 
VALUES
('Emily Parker', 'emily.parker@example.com', 91234567890, '123 Maple St, Springfield', 'p@ssw0rd123', 'O+', '1990-05-12', 1.65, 55.50, 'Teacher', 'John Parker', 12345678901),
('Sophia Johnson', 'sophia.j@example.com', 92345678901, '456 Oak St, Springfield', 'abc123DEF!', 'A+', '1985-08-20', 1.70, 60.00, 'Software Engineer', 'Maria Johnson', 12345678902),
('Olivia Williams', 'olivia.williams@example.com', 93456789012, '789 Pine St, Springfield', 'mySecurePass456', 'B-', '1992-02-14', 1.60, 50.75, 'Nurse', 'Ethan Williams', 12345678903),
('Ava Brown', 'ava.brown@example.com', 94567890123, '101 Birch St, Springfield', 'pass@Brown987', 'AB+', '1988-11-25', 1.55, 58.20, 'Artist', 'Henry Brown', 12345678904),
('Isabella Davis', 'isabella.davis@example.com', 95678901234, '234 Cedar St, Springfield', 'dav!sSecure890', 'O-', '1995-03-07', 1.68, 62.35, 'Architect', 'Laura Davis', 12345678905);


COMMIT;