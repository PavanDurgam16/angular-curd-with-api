import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StudentModel} from "../student.model";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl: string = "http://localhost:8084/api";

  constructor(private http:HttpClient) { }

  getAllStudents():Observable<StudentModel[]>{
    return this.http.get<StudentModel[]>(`${this.baseUrl}/students`);
  }

  deleteStudentByd(studentId: number):Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/students/${studentId}`)
  }

  createStudent(student: StudentModel): Observable<StudentModel> {
    return this.http.post<StudentModel>(`${this.baseUrl}/students`, student);
  }

  getStudentById(studentId: number):Observable<StudentModel> {
    return this.http.get<StudentModel>(`${this.baseUrl}/students/${studentId}`)
  }

  updateStudent(studentId: number, updatedStudent: StudentModel):Observable<StudentModel> {
    return this.http.put<StudentModel>(`${this.baseUrl}/students/${studentId}`,updatedStudent);
  }
}
