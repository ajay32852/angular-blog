import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent  implements OnInit{
  userId: string = ''; // Use string | null type
  
  post = {
    title: '',
    description: '',
    category_id: '',
    file: null,
    user_id:''
  };
 

  constructor(private postService:UserService,private router:Router){}

  ngOnInit(): void {
    // Retrieve user data from localStorage
    const userData = localStorage.getItem('user');
    // Extract user ID if userData is not null
    if (userData !== null) {
      const user = JSON.parse(userData);
      this.userId = user.id;
      
    } 
  }



  onFileSelected(event: any): void {
    this.post.file = event.target.files[0];
  }
  createPost(): void {
    const formData = new FormData();
    formData.append('title', this.post.title);
    formData.append('description', this.post.description);
    formData.append('category_id', this.post.category_id);
    formData.append('user_id', this.userId);
    if (this.post.file) {
      formData.append('file',this.post.file); // Append the File object
    }

    this.postService.createPost(formData).subscribe(
      (response) => {
        
        alert("Post created successfully:");
        this.router.navigate(['/dashboard']);
        console.log('Post created successfully:', response);
        // Handle successful response, e.g., show a success message
      },
      (error) => {
        console.error('Post creation failed:', error);
        // Handle error, e.g., show an error message
      }
    );



    
  }

}
