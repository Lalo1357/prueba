import mongoose from "mongoose"
import StudentModel from "../models/student.list.model"
import { IStudents } from "../interfaces/student.list.interface"
import IResponse from "../interfaces/response.interface" 
import { response } from "express"
import Server from "../class/server.class"

export default class StudentController {

    private server: Server
    private connection = null

    constructor() {
        this.server = Server.instance
    }

    async createStudent (studentData: IStudents): Promise<IResponse> {
        try{
           
            this.connection = this.server.getApp().locals.dbConnection
           
            const existingStudent = await StudentModel.findOne({id:studentData.id})
            if (existingStudent){
                return {
                    ok: false, message: "Student whith the same Id already exists", response: null, code: 400
                }
            }
            
            
            const createStudent = await StudentModel.create(studentData)

            return{
                ok: true, message: "Student Created", response: createStudent, code: 200,
            }
        }catch(err){
            return{
                ok: false, message: "An error has occurred with the server", response: err, code: 500
            }
        }finally{
            if(this.connection){
                await this.server.getApp().locals.dbConnection.release(this.connection)
            }
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async getStudentById (studentId: mongoose.Types.ObjectId): Promise<IResponse> {
        try{
            this.connection = this.server.getApp().locals.dbConnection
           
            const studentFound = await StudentModel.findById(studentId)

            if(!studentFound){
                return ({
                    ok: false, message: "Student not Found", response: null, code: 404
                 })
            }return({
                ok: true, message: "Student Found", response: studentFound, code: 200
                })
            }catch(Err){
                return({
                    ok: false, message: "An error has occurred with the server", response: null, code: 500,
                })
        }finally{
            if(this.connection){
                await this.server.getApp().locals.dbConnection.release(this.connection)
            }
        }
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async updateStudent (studentId: mongoose.Types.ObjectId, studentData: IStudents): Promise<IResponse>{
    try{
        this.connection = this.server.getApp().locals.dbConnection
        const studentFound = await StudentModel.findById(studentId)
        
        if(studentFound){
          
            const updateStudent = await StudentModel.findByIdAndUpdate(studentFound._id, studentData)
            return {
                ok: true, message: "Update Correct", response: updateStudent, code: 200
            }        
                                 
        }    
        return({
            ok: false, message: "Student not found", response: null, code: 400
        })
    }catch (err){
        return{
            ok: false, message: "An error has occurred with the server", response: null, code: 500
        }
    }finally{
        if(this.connection){
            await this.server.getApp().locals.dbConnection.release(this.connection)
        }
   }
}

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  async leaveSutdent (studentId: string): Promise<IResponse> {
    try{
        this.connection = this.server.getApp().locals.dbConnection

        const deleteStudent = await StudentModel.findByIdAndDelete(studentId)
       
        if(!deleteStudent)
             return{
                ok: false,
                message: "Student not found",
                response: null,
                code: 400
            }
         return{
            ok: true,
            message: "Student withdrawn",
            response: deleteStudent,
            code: 200
         }
    }catch (err){
        return{
            ok: false,
            message: "An error has occurred with the server",
            response: null,
            code: 500
        }
    }finally{
        if(this.connection){
            await this.server.getApp().locals.dbConnection.release(this.connection)
        }
   }
  }
}