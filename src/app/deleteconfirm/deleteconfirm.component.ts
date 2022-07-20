import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'appdeleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

 @Input() item:string|undefined

 @Output() onCancel=new EventEmitter()

 @Output() onDelete=new EventEmitter()

  constructor() { 
    
    
  }

  ngOnInit(): void {
  }
  cancel(){
    this.onCancel.emit()
  }
  delete(){
    this.onDelete.emit(this.item)
  }


}

