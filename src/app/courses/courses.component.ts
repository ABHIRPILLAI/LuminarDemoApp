import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataservicesService } from '../Services/dataservices.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  user="";
  constructor(private ds:DataservicesService , private fb:FormBuilder , private router:Router) {
    this.user=this.ds.currentUser

   }

   ngOnInit(): void {
    if(!localStorage.getItem('CurrentPhno'))
    {
      alert('Please Login')
      this.router.navigateByUrl("register");
    }

  }
  logout(){
    //remove username and acno
  
    localStorage.removeItem('CurrentPhno')
    this.router.navigateByUrl('register')
  }


}
