import express, { Request, Response } from 'express'
import cors from 'cors'
import { courses, student } from './database'
import { COURSE_STACK, TCourse, TStudent } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})

app.get("/courses", (req: Request, res:Response ) => {
    res.status(200).send(courses)
})

app.get("/courses/search", (req: Request, res:Response ) => {
    const q = req.query.q as string    
    const result = q ? courses.filter(item => item.name.toLowerCase().includes(q.toLowerCase())) : courses;
    res.status(200).send(result);
})

app.post("/courses", (req: Request, res: Response ) => {
    const id: string = req.body.id
    const name: string = req.body.name
    const lessons: number = req.body.lessons
    const stack: COURSE_STACK = req.body.stack

    const newCourse: TCourse = {
        id, // = req.body.id
        name, lessons, stack
    }

    courses.push(newCourse)
    console.log("Cursos:", courses)
    res.status(201).send("Curso criado com sucesso.")
})

app.get("/student", (req: Request, res: Response) => {
    res.status(200).send(student)
})

app.get("/student/search", (req: Request, res: Response) => {
    const q = req.query.q as string
    const result = q ? student.filter(item => item.name.toLowerCase().includes(q.toLowerCase())) : student;
    res.status(200).send(result)
})

app.post("/student", (req: Request, res: Response ) => {
    const id: string = req.body.id
    const name: string = req.body.name
    const age: number = req.body.age
   
    const newStudent: TStudent = {
        id, name, age
    }

    student.push(newStudent)
    console.log("Estudantes:", student)
    res.status(201).send("Aluno criado com sucesso.")
})