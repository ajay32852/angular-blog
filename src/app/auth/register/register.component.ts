import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
  };
  constructor(private userService: UserService) { }

  registerUser(): void {
    this.userService.registerUser(this.user).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        alert(response.message);
        //this.toastr.success('Registration successful!', 'Success');
        // Reset the form fields
        this.user = {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          confirm_password: ''
        };
      },
      (error) => {
        console.error('Registration failed:', error);
        if (error.status === 400 && error.error && error.error.errors) {
          error.error.errors.forEach((errorMsg: string) => {
            alert(errorMsg);
          });
        } else {
          alert('Registration failed. Please try again later.');
        }
       
      }
    );
  }



}
