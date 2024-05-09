import { modelStudent } from "../models/student.model.js";

// Listar todos los estudiantes
const getAllStudents = async (req, res) => {
    try {
        const students = await modelStudent.findAll()
        //console.log(students)
        return res.json(students)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

// Agregar un estudiante
const createStudent = async (req, res) => {
    try {
        const { nombre, rut, curso, nivel } = req.body
        const newStudent = await modelStudent.create({ nombre, rut, curso, nivel })
        return res.json(newStudent)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

// Listar un único estudiante mediante su rut
const getOneStudent = async (req, res) => {
    try {
        const { rut } = req.params
        const student = await modelStudent.findOneByRut(rut)
        console.log(student)
        return res.json(student)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

// Eliminar un estudiante por su id
const removeStudent = async (req, res) => {
    try {
        const { id } = req.params
        const student = await modelStudent.remove(id)
        console.log(student)
        return res.json(student)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}


// Editar un estudiante por su id
const updateStudent = async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, rut, curso, nivel } = req.body
        const studentUpdate = {
            id,
            nombre,
            rut,
            curso,
            nivel
        }
        const student = await modelStudent.update(studentUpdate)
        console.log(student)
        return res.json(student)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

export const controllerStudent = {
    getAllStudents,
    getOneStudent,
    createStudent,
    removeStudent,
    updateStudent
}