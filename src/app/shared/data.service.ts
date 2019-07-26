import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  images:[];
  phoneNumbers:[];
  harmarutyunner:[];
  otherInfo:[];
  additionalInfo:[];

  constructor(private http: HttpClient) { }

  getBuildingTypes(){
    return this.http.get('http://localhost:3000/buildingTypes');
  }
  getContractTypes(){
    return this.http.get('http://localhost:3000/contractTypes');
  }
  getAllStates(){
    return this.http.get('http://localhost:3000/allStates');
  }
  getAllAragatsotnCityes(){
    return this.http.get('http://localhost:3000/allAragatsotnCities');
  }
  getAllAraratCityes(){
    return this.http.get('http://localhost:3000/allAraratCities');
  }
  getAllArmavirCityes(){
    return this.http.get('http://localhost:3000/allArmavirCities');
  }
  getAllYerevanPart(){
    return this.http.get('http://localhost:3000/allYerevanPart');
  }
  getKentronStreet(){
    return this.http.get('http://localhost:3000/yerevanKentronStreets');
  }
  getAjapnyakStreet(){
    return this.http.get('http://localhost:3000/yerevanAjapnyanStreets');
  }
  getDavitashenStreet(){
    return this.http.get('http://localhost:3000/yerevanDavitashenStreets');
  }
  getBuiltType(){
    return this.http.get('http://localhost:3000/BuiltTypes');
  }
  getRoomsCount(){
    return this.http.get('http://localhost:3000/roomsCount');
  }
  getArea(){
    return this.http.get('http://localhost:3000/areaMeter');
  }
  getPriceStart(){
    return this.http.get('http://localhost:3000/priceStart');
  }
  getPriceEnd(){
    return this.http.get('http://localhost:3000/priceEnd');
  }
  getValue(){
    return this.http.get('http://localhost:3000/value');
  }
  getAllHouse(){
    return this.http.get(' http://localhost:3000/allBnakaraneOptions');
  }
  getAllPlaceFloor(){
    return this.http.get(' http://localhost:3000/palaceFloor');
  }
  getAllSiteArea(){
    return this.http.get(' http://localhost:3000/siteArea');
  }
  getAllArandznatun(){
    return this.http.get('http://localhost:3000/allArandznatunOptions');
  }
  getActualUse(){
    return this.http.get('http://localhost:3000/actualUse');
  }
  getKomercion(){
    return this.http.get('http://localhost:3000/allKomercionOptions');
  }
  getActualUsePlot(){
    return this.http.get('http://localhost:3000/actualUseThePlot');
  }
  getAllHoghamas(){
    return this.http.get('http://localhost:3000/allHoghamasOptions');
  }
  getAllBiznes(){
    return this.http.get('http://localhost:3000/allBiznesOptions');
  }
  getAllNorakaruyc(){
    return this.http.get('http://localhost:3000/allNorakruycOptions');
  }
}
