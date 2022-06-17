import { Component, OnInit } from '@angular/core';
import { InventoryData } from 'src/app/model/inventorymodel';
import { InventoryservicesService } from 'src/app/services/inventoryservices/inventoryservices.service';
import { AddairlineService } from 'src/app/services/addairline.service';
import { Router } from '@angular/router';
import { AirlineData } from 'src/app/model/airline.model';

@Component({
  selector: 'app-addinventory',
  templateUrl: './addinventory.component.html',
  styleUrls: ['./addinventory.component.css']
})
export class AddinventoryComponent implements OnInit {

  inventoryData:InventoryData=new InventoryData();
  constructor(private _service:InventoryservicesService,private _airlineService:AddairlineService,private _route:Router) { }
  airlineModellist:Array<AirlineData>=new Array<AirlineData>();  
  ngOnInit(): void {
    // this._airlineService.getAllAirline().subscribe(res=>{this.airlineModellist=res},err=>console.log(err));
  }
  ProductDetails: object = []; 
  selected:any;
  update(e:any){
   
    this.selected = e.target.value
  }
  SearchAirline(data:any)
  {    
//     let obj = this.airlineModellist.filter(m => m.airlineNo == data);  
// this.ProductDetails = obj;  
// return this.ProductDetails; 
  }
  Success()
  {
    alert("Add Successfully");
    this._route.navigate(["\inventory"]);
  }
  Error(res:any)
  {
    alert("Failed to add Inventory");
    console.log(res);
  }
  submitInventory()
  {
    debugger;
    if(this.inventoryData.flightNo==""||this.inventoryData.startDateTime===""||this.inventoryData.businessClassSeat===""
    ||this.inventoryData.endDateTime===""||this.inventoryData.nonBusinessClassSeat===""
    ||this.inventoryData.fromPlace==""||this.inventoryData.price===0
    ||this.inventoryData.toPlace==""||this.inventoryData.noOfRows===0
    ||this.inventoryData.meal===0)
    {
      alert("Please enter details");
      return;
    }
    
    return this._service.addInventory(this.inventoryData).subscribe(res=>this.Success(),err=>this.Error(err))
  }

}
