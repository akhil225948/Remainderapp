import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../service/data.service';

@Component({
  selector: 'app-eventform',
  templateUrl: './eventform.component.html',
  styleUrls: ['./eventform.component.css']
})
export class EventformComponent implements OnInit {

  transactions:any=[];
  uid=JSON.parse(localStorage.getItem("currentUid")||'')

  constructor(private ds:DataService,private router :Router) {
    this.ds.veiwEvent (this.uid)
    .subscribe((result:any)=>{
      this.transactions = result.transaction
    },
    (result)=>{
      alert(result.error.message)
    }
    )
    
   }

  ngOnInit(): void {
  }

}

