import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/StudentService';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  email = signal('');
  password = signal('');
  error = signal('');

  constructor(private studentService: StudentService, private router: Router) {}

  register() {
    this.studentService.register(this.email(), this.password()).subscribe({
      next: () => {
        this.router.navigate(['/login']);
        alert("Registration Successful! Please login.")
      },
      error: (err) => {
        console.error('Registration error:', err);
        console.error('Error body:', err.error);
        this.error.set("Registration failed");
      }
    });
  }
}
