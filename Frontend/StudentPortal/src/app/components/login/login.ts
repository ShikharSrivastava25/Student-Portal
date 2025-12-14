import { Component, signal } from '@angular/core';
import { StudentService } from '../../services/StudentService';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = signal('');
  password = signal('');
  error = signal('');

  constructor(private studentService: StudentService, private router: Router) {}

  login() {
    this.studentService.login(this.email(), this.password()).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/students']);
      },
      error: () => {
        this.error.set('Invalid credentials');
      } 
    });
  }
}
