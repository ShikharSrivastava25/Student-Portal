import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { StudentService } from '../../services/StudentService';
import { FormsModule } from '@angular/forms';
import { Student } from '../../models/Student';

@Component({
  selector: 'app-students',
  imports: [CommonModule, FormsModule],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
  students = signal<any[]>([]);

  selectedStudent = signal<Student>({
    id: 0,
    name: '',
    class: '',
    section: ''
  });

  constructor(private studentService: StudentService) {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getStudents().subscribe(data => {
      this.students.set(data);
    });
  }

  saveStudent() {
    const student = this.selectedStudent();

    if (student.id === 0) {
      this.studentService.addStudent(student).subscribe(() => this.loadStudents());
    } else {
      this.studentService.updateStudent(student)
        .subscribe(() => this.loadStudents());
    }

    this.resetForm();
  }

  editStudent(s: Student) {
    this.selectedStudent.set({ ...s });
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id).subscribe(() => this.loadStudents());
  }

  resetForm() {
    this.selectedStudent.set({
      id: 0,
      name: '',
      class: '',
      section: ''
    });
  }
}
