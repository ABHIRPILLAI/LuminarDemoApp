import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataservicesService } from '../Services/dataservices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  uname="";
  pswd="";
  phno="";
  registerForm=this.fb.group({//group
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],//array
    phno:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],

    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  })
  constructor(private router:Router, private ds:DataservicesService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register()
  {
    console.log(this.registerForm);
    

    // alert('')

    var username=this.registerForm.value.uname;
    var phno=this.registerForm.value.phno;

    var password=this.registerForm.value.pswd;

    if(this.registerForm.valid)
    {
      console.log(this.registerForm.get('uname')?.errors);
      
    const result=this.ds.register(username,phno,password);
    if(result)
    {
    alert('Register Successful');
    this.router.navigateByUrl('')
    }
    else{
      alert('Register Failed');
      this.router.navigateByUrl('register')
    }
    }else{
      alert('invalid form')
    }









  }
}
