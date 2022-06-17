import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserData } from '../model/UserData';
import { RegisterModel } from '../model/registerModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {

  private _loginUrl='http://localhost:46990/api/Login';
  private _registerUrl='http://localhost:46990/api/Login/Addnewuser';
  constructor(private http:HttpClient,private router:Router) {
             
  }

  loginUser(user:any) : Observable<any>
  {
      debugger;
     var data={
          UserName:user.UserName,
          Password:user.Password
      }
      return this.http.get(this._loginUrl + "?UserName=" + user.UserName + "&Password=" + user.Password);
  }

//   registerUser(user:any)
//   {
//       debugger;
//       return this.http.post<any>(this._registerUrl,user);
//   }
  registerUser(registerUserData:RegisterModel ) : Observable<any> {
    var params = {
        "UserName": registerUserData.UserName,
        "Password": registerUserData.Password,
        "Gender": registerUserData.Gender,
        "Email":registerUserData.Email,
        "ContactNumber":registerUserData.ContactNumber
        };
    return this.http.post(this._registerUrl, params);
  }
  logoutUser()
  {
      localStorage.removeItem('token');
      localStorage.removeItem('isAdmin');
      localStorage.removeItem('user');
      this.router.navigate(['/home']).then(()=>{window.location.reload()})  ;
  }

  getToken()
  {
      return localStorage.getItem('token');
  }

  adminDetail()
  {               
      return localStorage.getItem('isAdmin');
  }
  loggedIn()
  {
      return !!localStorage.getItem('token');
  }
}
