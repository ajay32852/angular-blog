import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 constructor(private authService:UserService,private router:Router){}
  user = {
  email:'',
  password:''
  };
  loginUser(): void {
    this.authService.loginUser(this.user).subscribe(
      (response) => {
        console.log('Login successful:', response);
        // Redirect to dashboard page
        const userData = {
        first_name: response.data.first_name,
        last_name:response.data.last_name,
        id:response.data.id,
        is_admin:response.data.isAdmin,
        email:response.data.email
      };
      localStorage.setItem('user', JSON.stringify(userData));
        this.router.navigate(['/dashboard']);
      },

      (error) => {
        console.error('Login failed:', error);
        if (error.status === 400 && error.error && error.error.errors) {
          error.error.errors.forEach((errorMsg: string) => {
            alert(errorMsg);
          });
        } 
       else if (error.status == false) {
          error.error.errors.forEach((errorMsg: string) => {
            alert(errorMsg);
          });
        } 
        else {
          alert(error.message);
        }
        // Handle login error, e.g., display an error message
      }
    );
  }



}
