DROP TABLE IF EXISTS STUDENTS;

CREATE TABLE STUDENTS (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(50),
	rut VARCHAR(12),
	curso VARCHAR(50),
	nivel VARCHAR(2)
);

INSERT INTO STUDENTS (nombre, rut, curso, nivel)
VALUES 
('Jose Silva', '15.279.443-6', 'Piano', '3'),
('Florencia Duarte', '9.715.866-4', 'Trompeta', '5'),
('Antonia Pardo', '18.122.754-5', 'Guitarra', '4');

SELECT * FROM STUDENTS;