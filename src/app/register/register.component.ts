import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataservicesService } from '../Services/dataservices.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router , private ds:DataservicesService , private fb:FormBuilder ) { }

  ngOnInit(): void {
    
  }
  uname="";
  pswd="";
  phno="";

  loginForm=this.fb.group({//group
    // uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],//array
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    phno:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]]

  })
  register()
  {
    // alert('Login Clicked');//event binding
    var uname=this.loginForm.value.uname;//1000
    var pswd=this.loginForm.value.pswd;
    var phno=this.loginForm.value.phno;
    var userDetails=this.ds.userDetail//also a depedency injection coz this file is in servies and dataservice class under it comes

    if(this.loginForm.valid)
    {
    const result=this.ds.login(phno,pswd)
    if(result){
      alert('Login Successful');
      this.router.navigateByUrl('courses')
    }
    else{
      alert("login failed");
    }
  }else{
    alert('invalid form')
  }
  }
}
