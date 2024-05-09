import { pool } from "../database/connection.js";

const findAll = async () => {
    const { rows } = await pool.query('SELECT * FROM STUDENTS')
    return rows
}

const create = async ({ nombre, rut, curso, nivel }) => {
    const query = {
        text: "INSERT INTO STUDENTS (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING * ",
        values: [nombre, rut, curso, nivel]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const findOneByRut = async (rut) => {
    const query = {
        text: "SELECT * FROM STUDENTS WHERE rut = $1",
        values: [rut]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const remove = async (id) => {
    const query = {
        text: "DELETE FROM STUDENTS WHERE id = $1 RETURNING *",
        values: [id]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const update = async (student) => {
    const query = {
        text: "UPDATE STUDENTS SET nombre= $1, rut= $2, curso= $3, nivel= $4 WHERE id= $5 RETURNING *",
        values: [student.nombre, student.rut, student.curso, student.nivel, student.id]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

export const modelStudent = {
    findAll,
    create,
    findOneByRut,
    remove,
    update
}

