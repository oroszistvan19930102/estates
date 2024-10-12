import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // TODO: HttpClientModule is deprecated use provideHttpClient(withInterceptorsFromDi()) as providers instead


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule, 
    RouterOutlet,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {} 

  fetchMessage(form: NgForm){
    if (form.valid) {
      // Prepare the request payload
      const payload = {
        username: this.username,
        password: this.password
      };

      // Send a POST request to the PHP backend
      this.http.post<any>('http://localhost:8000/login.php', payload)
      .subscribe({
        next: (response) => {
          if(response.status === 'success'){
            console.log(response.message); // Handle successful login
            this.router.navigate(['/home']);
          }else {
            console.error(response.message); // Handle login error
          }
        },
        error: (error) => {
          console.error('An error occurred:', error); // Handle HTTP error
        }
      });
    }else {
      console.log('Form is invalid');
    }
  }
}
