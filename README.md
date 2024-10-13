CSE311L Project
Sec – 2, Summer 2024

Patient and treatment management in a Hospital: A system for managing patient information and treatment records in a hospital.
Patient Registration: Manage patient details, including personal information and medical history.
Treatment plans: Assign and update treatment plans for each patient.
Doctor Appointments: Schedule and manage doctor appointments.
Medical Records: Maintain detailed patient medical records, including prescriptions, test, and diagnoses.
Billing System: generate bills based on treatments, tests and services provided.

Project Guidelines

Entities: strong entities, weak entities
Relationships: 
One-to-one
One-to-Many/Many-to-One
Many-to-Many
Generalization/Specialization
Role
Ternary Relationship
Composite, multivalued and derived attributes
Weak entities
primary key, foreign key and constraints(NOT NULL, UNIQUE)
CRUD (create, read, update, delete) operations

Entities and attributes :
admin (id, name, email, password )

patient_details ( id, name, email, phone_no, address, password, gender, blood_group, dob, height, weight, occupation, guardian_name, guardian_no )

doctor_details ( id, name, email, phone_no, address, password, gender, speciality)

treatment ( treatment_id, patient_id, treatment_name, treatment_cost )

appointment ( appointment_id, patient_id, doctor_id, appointment_date, appointment_time )

medical_record ( record_id, patient_id, treatment_id, test, prescription, diagnoses )

bill ( bill_id, patient_id, amount, status )

department ( dept_id, dept_name )

prescription( presc_id, patient_id, doctor_id )

room ( room_id, cost )

disease (disease_id, disease_name )

service (service_id, service_name, service_cost )

test (test_id, test_name, test_cost )

insurance ( insurance_id, patient_id, provider_name )

Relationships :
	One to one
patient_details and medical_record : Each patient has one medical record and each record has one patient.
	
One to many / Many to one
patient_details and appointment : Each patient can have multiple appointments but each appointment must have only one patient.
doctor_details and appointment : Each doctor can have multiple appointments but each appointment must have only one doctor.
	
Many to many
patient_details and doctor_details : Each patient can have multiple doctors and each doctor can have multiple patients.

Generalization/Specialization :
We can put doctors, nurses in an entity called staff.


Role : 
Doctors and patients have different roles when it comes to accessing and managing the system. Doctors can manage their appointments but patients can't. Patients can view their bills but doctors can’t.

Ternary Relationship :
Bills are generated based on treatment plans and medical records. We can see here the association among three entities.

Composite, multivalued and derived attributes :
Composite : Address can be composite like thana, street, block, road, postal_code.
Multivalued : Patients or doctors can have multiple phone numbers.
Derived : Age can be derived.

primary key, foreign key and constraints(NOT NULL, UNIQUE) :
Primary key : patient_id, doctor_id, treatment_id, appointment_id, record_id, bill_id.
Foreign key : patient_id and doctor_id in appointment, treatment_plan. treatment_id and patient_id in medical_record.
Constraints : patient_id, doctor_id, treatment_id, appointment_id, record_id, bill_id must not be NULL. Email , phone_no must be UNIQUE.

CRUD (create, read, update, delete) operations :
Create : Add new patients, doctors, appointments, treatment plans, medical records.
Read : View patient details, bills, medical records, appointments.
Update : Update patient and doctor details, treatment plans, records.
Delete : Delete a patient, treatment plans, appointments.