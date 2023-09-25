import {Component, OnInit} from '@angular/core';
import {StudentModel} from "../student.model";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../services/student.service";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements  OnInit{

  studentId: number;
  student!: StudentModel;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {
    this.studentId = +this.route.snapshot.params['id'];
    console.log(this.studentId);
  }

  ngOnInit(): void {
      this.fetchStudentData();
  }

  fetchStudentData(): void {
      this.studentService.getStudentById(this.studentId).subscribe(
      (student) => {
        this.student = student;
        console.log(` student data with id , ${this.studentId}  is : `, student );
      },
      (error) => {
        console.error(`Error fetching student data  with id , ${this.studentId}  is:`, error);
      }
    );
  }
}
