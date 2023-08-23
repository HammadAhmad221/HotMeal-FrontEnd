import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  login() {
    // Hardcoded values for demonstration
    const hardcodedUsername = 'admin@gmail.com';
    const hardcodedPassword = 'hammad';

    if (this.email === hardcodedUsername && this.password === hardcodedPassword) {
      // Successful login logic
      alert('Login successful');
    } else {
      // Failed login logic
      alert('Login failed. Please check your credentials.');
    }
  }
}
