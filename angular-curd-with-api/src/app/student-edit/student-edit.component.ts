import { Component, OnInit } from '@angular/core';
import { StudentService } from "../services/student.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { StudentModel } from "../student.model";

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  studentEditForm!: FormGroup;
  studentId: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {
    this.studentId = +this.route.snapshot.params['id'];
    console.log(this.studentId);
  }

  ngOnInit(): void {
    this.initEditForm();
    this.fetchStudentData();
  }

  initEditForm(): void {
    this.studentEditForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      phoneNo: ['', Validators.required],
      address: this.formBuilder.group({
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required]
      })
    });
  }

  fetchStudentData(): void {
    this.studentService.getStudentById(this.studentId).subscribe(
      (student) => {
        this.studentEditForm.patchValue(student);
      },
      (error) => {
        console.error('Error fetching student data:', error);
      }
    );
  }

  onSubmit(): void {
    const updatedStudent: StudentModel = this.studentEditForm.getRawValue();
    this.studentService.updateStudent(this.studentId, updatedStudent).subscribe(
      (response) => {
        console.log('Student updated:', response);
      },
      (error) => {
        console.error('Error updating student:', error);
      }
    );
    this.router.navigate(['']);
  }

  goToList():void {
    this.router.navigate(['']);
  }
}
