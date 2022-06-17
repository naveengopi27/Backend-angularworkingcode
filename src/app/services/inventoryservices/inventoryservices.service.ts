import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryservicesService {

  headers: any;
  private _inventoryURL = 'http://localhost:5663/api/Inventory/getinventory';
  private _addInventoryUrl = 'http://localhost:5663/api/Inventory/Addinventorydetails';
  private _searchFlightURL = 'http://localhost:5663/api/Inventory/get';
  constructor(private http: HttpClient, private router: Router) {
  }

  getFlightByPlaces(fromplace: any, toplace: any) {
      // let httparms = new httpParms()
      // httparms.set("fromplace", toplace);
      // httparms.set('toplace', fromplace);
      // let options = { params: httparms };
      var link=this._searchFlightURL+"?fromplace="+fromplace+"&toplace="+toplace+"";
      return this.http.get<any>(link);
  }
  getAllInventory() {
    debugger;
         
      return this.http.get<any>(this._inventoryURL);
  }

  addInventory(inventory: any) {
      debugger;
      var data = {
          FlightNo: inventory.flightNo,
          FromPlace: inventory.fromPlace,
          ToPlace: inventory.toPlace,
          StartDateTime: inventory.startDateTime,
          EndDateTime: inventory.endDateTime,
          BusinessClassSeat: inventory.businessClassSeat,
          NonBusinessClassSeat: inventory.nonBusinessClassSeat,
          Price: Number(inventory.price),
          NoOfRows: Number(inventory.noOfRows),
          Meal: Number(inventory.meal)         

      }
      return this.http.post<any>(this._addInventoryUrl, data);
  }
}
