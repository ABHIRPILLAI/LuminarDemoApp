import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  btnVal="Submit";
  btnVal1="Submit";
  btnVal2="Submit";
  btnVal3="Submit";
  constructor() { }

  ngOnInit(): void {
  }

  submit()
  {
    alert("Assignment Submitted");
    this.btnVal = "Submitted"
    
  }
  submit1()
  {
    alert("Assignment Submitted");
    this.btnVal1 = "Submitted"
    
  }
  submit2()
  {
    alert("Assignment Submitted");
    this.btnVal2 = "Submitted"
    
  }
  submit3()
  {
    alert("Assignment Submitted");
    this.btnVal3 = "Submitted"
    
  }
}
