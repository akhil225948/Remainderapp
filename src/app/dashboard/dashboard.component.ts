import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

eventForm=this.fb.group({
  date: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9/]*')]],
  message: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],

 
})

user: any
lDate: any
uid = ""

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) {
    this.lDate = new Date()
   }

  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      alert("Please login")
      this.router.navigateByUrl("")
    }
  }

  addevent(){
    var date = this.eventForm.value.date
    var message = this.eventForm.value.message
    if (this.eventForm.valid) {
    this.ds.addEvent(date,message)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.router.navigateByUrl('eventform')
        
      }
    },
    result=>{
      alert(result.error.message)
    }
    )
  }
    else {
      alert("Invalid Form")
    }
  }

  veiwevent(){
    alert("Veiwing Events...")
    this.router.navigateByUrl('eventform')
  }

  
  
  signOut(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentUid")
    localStorage.removeItem("token")
    this.router.navigateByUrl("")
  }


  deleteAccount() {
    this.uid = JSON.parse(localStorage.getItem("currentUid") || '')
  }
  cancel() {
    this.uid = ""
  }
  onDelete(event: any) {
    this.ds.deleteAcc(event)
      .subscribe((result: any) => {
        if (result) {
          alert(result.message)
          localStorage.removeItem("currentUser")
          localStorage.removeItem("currentUId")
          localStorage.removeItem("token")
          this.router.navigateByUrl("")
        }
      },
        result => {
          alert(result.error.message)
        }

      )
  }





}
