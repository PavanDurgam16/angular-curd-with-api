import {Component, OnInit} from '@angular/core';
import {StudentModel} from '../student.model';
import {StudentService} from '../services/student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students!: StudentModel[];
  private selectedStudentId!: number;

  constructor(private studentService: StudentService, private router: Router) {
  }

  ngOnInit(): void {
    this.DataLoad();
  }

  DataLoad() {
    this.studentService.getAllStudents().subscribe(data => {
      this.students = data;
    });
  }


  editStudent(id: number) {
    this.router.navigate(['students/edit', id]).then(value => {
      console.log(`successful ${value}`)
    });
  }

  //for delete student
  setSelectedStudentId(studentId: number): void {
    this.selectedStudentId = studentId;
  }

  deleteSelectedStudent() {
    this.studentService.deleteStudentByd(this.selectedStudentId).subscribe(
      (value) => {
        console.log("student deleted successfully" + value);
        this.DataLoad();
      },
      (error) => {
        console.error("Error deleting student:", error);
      },
      () => {
        console.log("Observable completed.");
      }
    );
  }
}
