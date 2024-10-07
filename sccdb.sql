SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `user_details` (
  `user_id` int(10) NOT NULL,
  `first_name` varchar(25) DEFAULT NULL,
  `last_name` varchar(25) DEFAULT NULL,
  `email` varchar(55) DEFAULT NULL,
  `phone_no` int(11) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `specialization` varchar(25) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `password` int(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `user_details` (`user_id`, `first_name`, `last_name`, `email`, `phone_no`, `gender`, `specialization`, `address`, `password`) VALUES
(101, 'Tushar Basak', 'Dipu', 'email@email.com', 1203, 'Male', 'Radiologist', 'Bangladesh', 12345),
(102, 'Kazi Rafat', 'Mclean', 'email@email.com', 1203, 'Male', 'Radiologist', 'Bangladesh', 12345),
(103, 'Israt Jahan', 'Iva', 'email@email.com', 3007, 'Male', 'Radiologist', 'Indonesia', 12345),
(104, 'Dr. Milton ', 'Tushar', 'email@email.com', 1305, 'Male', 'Radiologist', 'Bangladesh', 12345),
(105, 'Ahamed Nahian', 'Depro', 'email@email.com', 4006, 'Male', 'Radiologist', 'Bangladesh', 12345),
(106, 'Taarak Mehta', 'Jethalal', 'email@email.com', 1007, 'Male', 'Radiologist', 'India', 12345),
(107, 'Popatlal', 'Sodhi', 'email@email.com', 1007, 'Male', 'Radiologist', 'India', 12345),
(108, 'Suzuki', 'Nakamura', 'email@email.com', 1367, 'Male', 'Radiologist', 'Japan', 12345);

ALTER TABLE `user_details`
  ADD PRIMARY KEY (`user_id`);