import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataservicesService } from '../Services/dataservices.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {
  user="";

  constructor(private ds:DataservicesService , private fb:FormBuilder , private router:Router) {
    this.user=this.ds.currentUser

   }

  ngOnInit(): void {
  }

}
