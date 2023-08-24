import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private authService: AuthService, private router: Router) {}

  // login() {
  //   // Hardcoded values for demonstration
  //   const hardcodedUsername = 'admin@gmail.com';
  //   const hardcodedPassword = 'hammad';

  //   if (this.email === hardcodedUsername && this.password === hardcodedPassword) {
  //     // Successful login logic
  //     alert('Login successful');
  //   } else {
  //     // Failed login logic
  //     alert('Login failed. Please check your credentials.');
  //   }
  // }
  login() {
    // Hardcoded email and password for demonstration purposes
    const hardcodedEmail = 'hammad@gmail.com';
    const hardcodedPassword = 'hammad';

    if (this.email === hardcodedEmail && this.password === hardcodedPassword) {
      // Set the authentication flag in AuthService
      this.authService.setAuthenticated(true);

      // Navigate to the dashboard
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}
