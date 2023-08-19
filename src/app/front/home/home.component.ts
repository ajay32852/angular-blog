import { Component ,OnInit} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor(private api:ApiService){}
  posts:any;
  ngOnInit(): void {
  
    this.api.getPost().subscribe(
      (data)=>{
        console.log('Received data:', data);
        this.posts=data.data;
      },
      (error)=>{
        console.error('An error occurred:', error);
      }
    );

  }


}
