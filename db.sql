SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- Drop existing tables if they exist (for re-running the script)
DROP TABLE IF EXISTS user_details, admin, doctor;

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

-- Insert into user_details
INSERT INTO user_details(user_id, name, email, phone_no, address, gender, role, password)
VALUES
    (1, 'Md Abu Bokar', 'abu@gmail.com', '12345678901', 'Narsingdi', 'Male', 'Admin', 'testpass1'),
    (2, 'Natsha Monir Shawon', 'nat@gmail.com', '12345678902', 'Kishoreganj', 'Female', 'Doctor', 'testpass2');

-- Create doctor table
CREATE TABLE doctor(
    user_id INT UNIQUE,
    speciality VARCHAR(55) NOT NULL,
    PRIMARY KEY(user_id),
    FOREIGN KEY(user_id) REFERENCES user_details(user_id) ON DELETE CASCADE
);

-- Insert into doctor
INSERT INTO doctor(user_id, speciality)
VALUES
    (2, 'Ophthalmologist');

COMMIT;