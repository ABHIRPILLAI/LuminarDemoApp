import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataservicesService {

  constructor() { }
  currentUser="";///for display current username name in dashboard
  currentphno="";

  userDetail:any=
  {
   909090900:{username:'Abhi',phno:909090900,password:1000},
   9090909000:{username:'Abhilash',phno:9090909000,password:1001},
   909090900000:{username:'Abhilash Radhakarishna Pillai',phno:909090900000,password:1002}
  }

  saveDetails(){
    if(this.userDetail){
      localStorage.setItem('database',JSON.stringify(this.userDetail))
    }
    if(this.currentphno){
      localStorage.setItem('CurrentPhno',JSON.stringify(this.currentphno))
    }
    if(this.currentUser){
      localStorage.setItem('CurrentUser',JSON.stringify(this.currentUser))
    }
 
    
  }
  getDetails(){
    if(this.userDetail){
      this.userDetail=JSON.parse(localStorage.getItem('database')||'')
    }
    if(this.currentphno){
      this.currentphno=JSON.parse(localStorage.getItem('CurrentPhno')||'')
    }
    if(this.currentUser){
      this.currentUser=JSON.parse(localStorage.getItem('CurrentUser')||'')
    }
  }
  register(uname:any,phno:any,password:any,){

    let userDetails=this.userDetail

    if(phno in userDetails){
      return false;
    }
    else{
      userDetails[phno]={
        username:uname,
        // username:username,
        phno:phno,
        password:password
  
        // transaction:[]//also here
      }
      console.log(userDetails);
      this.saveDetails();
      
      return true;
    }

   }

  login(phno:any,pswdd:any){

    let userDetails=this.userDetail

    if (phno in userDetails) {

      if(pswdd==userDetails[phno]['password'] ){
        this.currentUser=userDetails[phno]['username']//assign username to the variable
        this.currentphno=userDetails[phno]['phno']

        this.saveDetails();
        return true;

      }
      
     else {
      return false;
      
    }
  }
    else{
      return false;
    }

   }
}
