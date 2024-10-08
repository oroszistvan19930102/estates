import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  fetchMessage() {
    const loginData = { username: this.username, password: this.password };
    
    this.http.post<{ message: string }>('http://localhost:8000/login.php', loginData)
    .subscribe({
      next: (response: { message: string }) => {
        this.message = response.message;
      }, 
      error: (error) => {
        console.error('Error:', error);
        this.message = 'Login failed. Please try again.';
      }
    });
  }
}
