import {Component, OnInit} from '@angular/core';
import {StudentService} from "../services/student.service";
import {Router} from "@angular/router";
import {FormGroup,FormBuilder,Validators} from "@angular/forms";
import {StudentModel} from "../student.model";
@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  studentForm!: FormGroup;
  private students: StudentModel[] =[];

  constructor(private fb: FormBuilder, private router: Router, private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      phoneNo: ['', Validators.required],
      address: this.fb.group({
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required]
      })
    });
  }

  onSubmit(): void {
      const StudentModel = this.studentForm.getRawValue();
      this.studentService.createStudent(StudentModel).subscribe(
        (response) => {
          console.log('Student created:', response);

            this.studentService.getAllStudents().subscribe(data => {
                this.students = data;
              },
              error => {
                console.error(this.students)
              }
            );
        },
        (error) => {
          console.error('Error creating student:', error);
        }
      );
      this.goToList();
  }

  goToList() {
    this.router.navigate(['/students'])
  }
}

