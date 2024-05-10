import {Router, Request, Response, response} from "express"
import StudentController from "./controller/student.list.controller"
import mongoose from "mongoose"

const router = Router ()
const studentController = new StudentController()

router.post('/createStudent', async (req: Request, res: Response) => {
    try{
        const response = await studentController.createStudent(req.body)
        res.status(response.code).json(response
        )
    }catch(err){
        res.status(500).json({
            ok: false,
            message: "Internal server error",
            err
        })
    }
}) 

router.get("/getStudent/:id", async(req:Request, res:Response) => {
    const studentId = new mongoose.Types.ObjectId(req.params.id)
    try{

        const response = await studentController.getStudentById(studentId)
        res.status(response.code).json(response)
    }catch(err){
        res.status(500).json({
            ok: false,
            message: "Internal server error",
            err,
        })
    }
})

router.put('/updateStudent/:id', async (req: Request, res: Response) => {
    const studentId = new mongoose.Types.ObjectId(req.params.id)    
    try{
        const response = await studentController.updateStudent(studentId, req.body)
        res.status(response.code).json(response)
    }catch(err){
        res.status(500).json({
            ok: false,
            message: "Internal server error",
            err
        })
    }
}) 

router.delete('/leaveStudent/:id', async (req: Request, res: Response) => {
   const studentId = req.params.id
    try{
        const response = await studentController.leaveSutdent(String(studentId))
        res.status(response.code).json(response
        )
    }catch(err){
        res.status(500).json({
            ok: false,
            message: "Internal server error",
            err
        })
    }
}) 

export default router