Sage Care Center : Patient and treatment management in a Hospital.

Project Scopes :

Entities and attributes :
patient_details ( patient_id, first_name, last_name, email, phone_no, patient_guardian_name, patient_guardian_no, address, blood_group, dob, height, weight, gender, occupation )

doctor_details ( doctor_id, first_name, last_name, email, phone_no, address, password, specialization )

treatment_plan ( treatment_id, patient_id, doctor_id, treatment_desc, start_date, end_date )

appointment ( appointment_id, patient_id, doctor_id, appointment_date, appointment_time )

medical_record ( record_id, patient_id, treatment_id, test, prescription, diagnoses )

bill ( bill_id, patient_id, total_amount, payment_method, payment_status )

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