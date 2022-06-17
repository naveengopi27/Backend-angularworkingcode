import { Component, OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/model/registerModel';
import { Router } from '@angular/router';
import { AuthservicesService } from 'src/app/services/authservices.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData:RegisterModel=new RegisterModel();
  constructor(private _auth:AuthservicesService,private _router:Router) { }
  ngOnInit(): void {
  }
  registerUser(data:any) {
    debugger;
    this._auth.registerUser(this.registerUserData).subscribe(res => {
      // localStorage.setItem('token', res.token)    
      alert("Registerd Successfully")  ;
      this._router.navigate(["/login"])
    },
    err => console.log(err));
  }
//   registerUser()
//   {
//     debugger;
//  var data={
//       UserName:this.registerUserData.UserName,
//       Email:this.registerUserData.Email,
//       Password:this.registerUserData.Password,
//       Gender:this.registerUserData.Gender,
//       ContactNumber:this.registerUserData.ContactNumber
//     }
//     var result;
//     debugger;
//     this._auth.registerUser(data).subscribe(res => {
//       //localStorage.setItem('token', res.token)  
//       result=alert("Register Successfully !! Please login")   
//       this._router.navigate(['\login']);                  
//     },
//       err => alert(err.error.message));
//       var logindata={
//         userName:this.registerUserData.UserName,
//         password:this.registerUserData.Password
//       }
//   }
    // var data={
    //   UserName:this.registerUserData.UserName,
    //   Email:this.registerUserData.Email,
    //   Password:this.registerUserData.Password,
    //   Gender:this.registerUserData.Gender,
    //   ContactNumber:this.registerUserData.ContactNumber
    // }
    // var result;
    // this._auth.registerUser(data).subscribe(res => {
    //   //localStorage.setItem('token', res.token)  
    //   result=alert("Register Successfully !! Please login")   
    //   this._router.navigate(['\login']);                  
    // },
    //   err => alert(err.error.message));
    //   var logindata={
    //     userName:this.registerUserData.UserName,
    //     password:this.registerUserData.Password
    //   }
     // this._auth.loginUser(logindata).subscribe(res => {
       // localStorage.setItem('token', res.token)                    
      

  hasError(typeofvalidator:string,controlname:string):boolean{
    return this.registerUserData.formRegisterGroup.controls[controlname].hasError(typeofvalidator);
  }

  

  

}
