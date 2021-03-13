import {Request, Response} from "express"
import { getRepository, } from 'typeorm';

import { Student, IStudent } from "../model/Student";

export const getAllStudent = async(req: Request, res: Response) : Promise<Response> =>{
    const allStudents = await getRepository(Student).query(`SELECT * FROM Student`)
    return res.json(allStudents)
}


export const getStudentById = async(req: Request, res: Response) : Promise<Response> =>{
    
    const idStudent = req.params.id
    const particularStudent = await getRepository(Student).query(`SELECT * FROM Student WHERE idStudent = @0`, [idStudent])
    return res.json(particularStudent)
}


export const saveStudent = async(req: Request, res: Response)  =>{
    const newStudent : IStudent = {
        nameStudent: req.body.nameStudent,
        ageStudent: req.body.ageStudent
        
    }

    console.log(newStudent)
    const studentSaved = await getRepository(Student).query(`INSERT INTO Student (nameStudent, ageStudent) VALUES( @0, @1);`,
    [newStudent.nameStudent, newStudent.ageStudent])
    return res.json(studentSaved)
}


export const deleteStudentById = async(req: Request, res: Response) : Promise<Response> =>{
    const idStudent = req.params.id
    const studentDeleted = await getRepository(Student).query(`DELETE Student WHERE idStudent = @0`, [idStudent])
    return res.json(studentDeleted)
}


export const updateStudentById = async(req: Request, res: Response)  =>{
    
    const idStudent = req.params.id;

    const newStudent : IStudent = {
        nameStudent: req.body.nameStudent,
        ageStudent: req.body.ageStudent
    }
    //const idStudent = req.params.id

    console.log(newStudent)
    const studentUpdated = await getRepository(Student).query(`UPDATE Student SET nameStudent = @0 , ageStudent = @1 WHERE idStudent = @2;`,
    [   newStudent.nameStudent, 
        newStudent.ageStudent, 
        idStudent])
    return res.json(studentUpdated)
}



//testing ORM 
export const getAllStudentWithTypeORM = async(req: Request, res: Response) : Promise<Response> => {
    const allStudents = await getRepository(Student).find();
    return res.json(allStudents)
}