import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const options={
  headers: new HttpHeaders
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {
    
  }






//login

  login(uid: any, password: any) {

    const data = {
      uid,
      password
    }
    return this.http.post('http://localhost:3000/login',data)

  }

  //register

  register(username: any, uid: any, password: any) {
    const data={
      username,
      uid,
      password

    }
   return this.http.post('http://localhost:3000/register',data)
  }

  //addevent

  addEvent(date:any,message:any) {
    const data = {
      date,
      message
    }

    return this.http.post('http://localhost:3000/addEvent',data,this.getOptions())

  }

getOptions(){
  const token = localStorage.getItem('token')
  let headers = new HttpHeaders()
  if (token){
    headers=headers.append('x-access-token',token)
    options.headers=headers
  }
  return options
}

  
  
//event form

  veiwEvent(uid:any){
    const data = {
      uid
    }
    return this.http.post('http://localhost:3000/veiwEvent',data,this.getOptions())

  }

//delete

  deleteAcc(uid:any){
   
   return this.http.delete('http://localhost:3000/deleteAcc/'+uid,this.getOptions())
  }

}