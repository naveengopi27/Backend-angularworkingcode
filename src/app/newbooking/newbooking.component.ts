import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BookingData } from '../model/bookingModel';
import { RegisterModel } from '../model/registerModel';
@Component({
  selector: 'app-newbooking',
  templateUrl: './newbooking.component.html',
  styleUrls: ['./newbooking.component.css']
})
export class NewbookingComponent implements OnInit {

  
  
  bookingdetail: BookingData = new BookingData();
  bookingModellist:Array<BookingData>=new Array<BookingData>();
  IsError:boolean=false;  
  errorRes:string='';
  
  // inventoryData: any
  
  constructor( private _service: BookingService, private http: HttpClient,private _router:Router) {
   
    // this._service.getloginUserDetail(localStorage.getItem('user')).subscribe(Res => { this.data = Res }, err => console.log(err));
  }
  
  ngOnInit(): void {

    // this._data.book.subscribe(res => { this.inventoryData = res });
  }
  
  
  // data: RegisterModel = new RegisterModel();
  // userbook: any = {};
  // userbookarr: any = [];

  getAllBooking()
  {
    this._service.getAllBooking().subscribe(res => {
      this.bookingModellist=res   
     },
       err => {this.IsError=true;
         this.errorRes="No Booking exists";
         console.log(err)});   
  }

  Success()
  {
    alert("Add Successfully");
    this._router.navigate(["\newbooking"]);
  }
  Error(res:any)
  {
    alert("Failed to add Booking");
  }
  //user: any;
  submit() {
    debugger;
    
    if(this.bookingdetail.name==""||this.bookingdetail.emailId==""||this.bookingdetail.meal==""
    ||this.bookingdetail.flightNumber==""||this.bookingdetail.pnr==""
    ||this.bookingdetail.peopleid==0||this.bookingdetail.id==0)
    {
      alert("Please enter details");
      return;
    }
    
    return this._service.booking(this.bookingdetail).subscribe(res=>this.Success(),err=>this.Error(err))
    
    // this.userbook={Name:this.bookingdetail.Name,EmailId:this.bookingdetail.EmailId,
    //   Meal:this.bookingdetail.Meal,FlightNumber:this.bookingdetail.FlightNumber,
    //   Pnr:this.bookingdetail.Pnr,Peopleid:this.bookingdetail.Peopleid
      
    //    }
    // //this.userbook
    // var result:any;
    // this.http.post("http://localhost:61116/api/Booking/add", this.userbook).subscribe((res:any) => {
    // result=alert("Successfully Booked Ticked\n "+res.message)    
    // this._router.navigate(["/home"]);
    // }, err => console.log(err));
    //this._service.bookFlightForUser(this.userbookarr).subscribe(res=>alert(res),err=>console.log(err));
  }
  
  }



