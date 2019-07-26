import {AfterContentInit, Component, DoCheck, OnInit} from '@angular/core';
import {ImagesService} from '../shared/images.service';
import {DataService} from '../shared/data.service';
import {SelectItem} from 'primeng/api';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit, DoCheck{

  id;
  foundID;
  allStatesCityes;
  allBnakaran;
  foundData;
  foundArray;

  allFoundBnakaran;
  allTop;

  allFoundArandznatun;
  allArandznatun;

  allKomercion;
  allFoundKomercion;

  allHoghamas;
  allFoundHoghamas;

  allBiznes;
  allFoundBiznes;

  allNorakaruyc;
  allFoundNorakaruyc;

  allFoundData;
  foundDataID;

  aragtsotnCityes;
  araratCityes;
  armavirCityes;
  gegarkunikCityes;
  loryCityes;
  kotaykCityes;
  shirakCityes;
  syunikCityes;
  vayotsDzorCityes;
  tavushCityes;

  images;
  visibleImageNumber = 0;
  visibleTabNumber = 0;
  visibleMapNumber = 0;

  buildingTypes = [];

  newBoolean: boolean;

  contractTypes;
  selectedContractType;

  allStates;
  selectedStates;

  allChangeCityes;
  selectedCity;

  allYerevanParts;
  selectedYerevanPart;

  yerevanKentronStreet;
  yerevanDavitashenStreet;
  yerevanAjapnyakStreet;

  allStreets;
  selectedAllStreets;

  placeFloor;
  selectedPlaceFloor;

  siteArea;
  selectedSiteArea;

  builtTypes;
  selectedBuiltType;

  roomsCount;
  selectedRoomsCount;

  areaMeters;
  selectedAreaMeters;

  priceStart;
  selectedPriceStart;

  priceEnd;
  selectedPriceEnd;

  actualUse;
  selectedActualUse;

  actualUsePlot;
  selectedActualUsePlot;

  value;
  selectedValue;

  constructor(private imagesService: ImagesService, private dataService: DataService) {}

  ngOnInit() {

    this.images = this.imagesService.images;

    this.dataService.getBuildingTypes().subscribe((buildingTypes: any[]) => {
      this.buildingTypes = buildingTypes;
    });
    this.dataService.getContractTypes().subscribe((contractTypes: any[]) => {
      this.contractTypes = contractTypes;
    });
    this.dataService.getAllStates().subscribe((allStates: any[]) => {
      this.allStates = allStates;
    });
    this.dataService.getKentronStreet().subscribe((streets) => {
      this.yerevanKentronStreet = streets;
    });
    this.dataService.getDavitashenStreet().subscribe((streets) => {
      this.yerevanDavitashenStreet = streets;
    });
    this.dataService.getAjapnyakStreet().subscribe((streets) => {
      this.yerevanAjapnyakStreet = streets;
    });
    this.dataService.getBuiltType().subscribe((builtTypes: any[]) => {
      this.builtTypes = builtTypes;
    });
    this.dataService.getRoomsCount().subscribe((roomsCount: any[]) => {
      this.roomsCount = roomsCount;
    });
    this.dataService.getArea().subscribe((areaMeters: any[]) => {
      this.areaMeters = areaMeters;
    });
    this.dataService.getPriceStart().subscribe((priceStart) => {
      this.priceStart = priceStart;
    });
    this.dataService.getPriceEnd().subscribe((priceEnd) => {
      this.priceEnd = priceEnd;
    });
    this.dataService.getValue().subscribe((value) => {
      this.value = value;
    });
    this.dataService.getAllHouse().subscribe((allBnakaran) =>{
      this.allBnakaran = allBnakaran;
    });
    this.dataService.getAllAragatsotnCityes().subscribe((cityes) => {
      this.aragtsotnCityes = cityes;
    });
    this.dataService.getAllAraratCityes().subscribe((cityes) => {
      this.araratCityes = cityes;
    });
    this.dataService.getAllArmavirCityes().subscribe((cityes) => {
      this.armavirCityes = cityes;
    });
    this.dataService.getAllPlaceFloor().subscribe((placeFloor) => {
      this.placeFloor = placeFloor;
    });
    this.dataService.getAllSiteArea().subscribe((siteArea) => {
      this.siteArea = siteArea;
    });
    this.dataService.getAllArandznatun().subscribe((arandznatun) => {
      this.allArandznatun = arandznatun;
    });
    this.dataService.getActualUse().subscribe((data) => {
      this.actualUse = data;
    });
    this.dataService.getKomercion().subscribe((data) => {
      this.allKomercion = data;
    });
    this.dataService.getActualUsePlot().subscribe((data) => {
      this.actualUsePlot = data;
    });
    this.dataService.getAllHoghamas().subscribe((data) => {
      this.allHoghamas = data;
    });
    this.dataService.getAllBiznes().subscribe((data) => {
      this.allBiznes = data;
    });
    this.dataService.getAllNorakaruyc().subscribe((data) => {
      this.allNorakaruyc = data;
    });
  }

  ngDoCheck(){
    this.allTop = this.allBnakaran.filter((home) => {
      return home.top === true;
    });

  }

  searchID(){
    this.foundDataID = undefined;
    this.allFoundBnakaran = undefined;
    this.allFoundArandznatun = undefined;
    this.allFoundKomercion = undefined;
    this.allFoundBiznes = undefined;
    this.allFoundNorakaruyc = undefined;
    this.allFoundHoghamas = undefined;
    this.foundDataID = [];

    for(let i = 0; i < this.allBnakaran.length; i++){
      if(this.allBnakaran[i].id == this.id){
        this.foundDataID.push(this.allBnakaran[i]);
      }
    }
    for(let i = 0; i < this.allArandznatun.length; i++){
      if(this.allArandznatun[i].id == this.id){
        this.foundDataID.push(this.allArandznatun[i]);
      }
    }
    for(let i = 0; i < this.allNorakaruyc.length; i++){
      if(this.allNorakaruyc[i].id == this.id){
        this.foundDataID.push(this.allNorakaruyc[i]);
      }
    }
    for(let i = 0; i < this.allBiznes.length; i++){
      if(this.allBiznes[i].id == this.id){
        this.foundDataID.push(this.allBiznes[i]);
      }
    }
    for(let i = 0; i < this.allHoghamas.length; i++){
      if(this.allHoghamas[i].id == this.id){
        this.foundDataID.push(this.allHoghamas[i]);
      }
    }
    for(let i = 0; i < this.allKomercion.length; i++){
      if(this.allKomercion[i].id == this.id){
        this.foundDataID.push(this.allKomercion[i]);
      }
    }
  }

  next(){
    if(this.visibleImageNumber < this.images.length - 1){
      ++this.visibleImageNumber;
    }
    console.log(this.buildingTypes);
  }

  prev(){
    if(this.visibleImageNumber > 0){
      --this.visibleImageNumber;
    }
  }

  show(index){
    this.selectedPlaceFloor = undefined;
    this.selectedSiteArea = undefined;
    this.selectedCity = undefined;
    this.selectedYerevanPart = undefined;
    this.selectedValue = undefined;
    this.selectedPriceEnd = undefined;
    this.selectedPriceStart = undefined;
    this.selectedRoomsCount = undefined;
    this.selectedBuiltType = undefined;
    this.selectedStates = undefined;
    this.selectedAllStreets = undefined;
    this.selectedAreaMeters = undefined;
    this.selectedContractType = undefined;
    this.selectedActualUse = undefined;

    this.visibleTabNumber = index;
  }

  changeMap(index){
    console.log(this.visibleMapNumber, "visibleMapCount");
    console.log(index, "data");

    this.visibleMapNumber = index;
  }

  changeServiceHomeData(phoneNumber, harmarutyunner, otherInfo, img, additionalInfo){
    this.dataService.phoneNumbers = phoneNumber;
    this.dataService.harmarutyunner = harmarutyunner;
    this.dataService.otherInfo = otherInfo;
    this.dataService.images = img;
    this.dataService.additionalInfo = additionalInfo;
  }

  changeState(){

    this.allChangeCityes = [];
    this.allYerevanParts = [];
    this.foundData = [];
    this.foundArray = [];

    for(let i = 0; i < this.selectedStates.length; i++){

      if(this.selectedStates[i].code === "Aragatsotn"){
        this.aragtsotnCityes.forEach((item, i, arr) =>{
          this.allChangeCityes.push(arr[i]);
        });
      }else if(this.selectedStates[i].code === "Ararat"){
        this.araratCityes.forEach((item, i, arr) =>{
          this.allChangeCityes.push(arr[i]);
        });
      }else if(this.selectedStates[i].code === "Armavir"){
        this.armavirCityes.forEach((item, i, arr) =>{
          this.allChangeCityes.push(arr[i]);
        });
      }

      if(this.selectedStates[i].code === "Yerevan"){
        this.dataService.getAllYerevanPart().subscribe((part) => {
          this.allYerevanParts = part;
        });
      }

    }
  }

  changeStreets(){

    this.allStreets = [];
    this.allYerevanParts = [];
    this.foundData = [];
    this.foundArray = [];

    for(let i = 0; i < this.selectedCity.length; i++){

      if(this.selectedCity[i].code === "Ashtarak"){
        this.yerevanKentronStreet.forEach((item, i, arr) =>{
          this.allStreets.push(arr[i]);
        });
      }
    }
  }

  yeravanPartsChange(){
    this.allStreets = [];
    this.foundData = [];
    this.foundArray = [];

    for(let i = 0; i < this.selectedYerevanPart.length; i++){
      if(this.selectedYerevanPart[i].code === "Kentron"){
        this.allStreets = this.allStreets.concat(this.yerevanKentronStreet);
      }else if(this.selectedYerevanPart[i].code === "Davitashen"){
        this.allStreets = this.allStreets.concat(this.yerevanDavitashenStreet);
      }else if(this.selectedYerevanPart[i].code === "Ajapnyak"){
        this.allStreets = this.allStreets.concat(this.yerevanAjapnyakStreet);
      }
    }
  }

  searchBnakaran(){
    this.foundDataID = undefined;
    this.allFoundBnakaran = undefined;
    this.allFoundArandznatun = undefined;
    this.allFoundKomercion = undefined;
    this.allFoundBiznes = undefined;
    this.allFoundNorakaruyc = undefined;
    this.allFoundHoghamas = undefined;

    this.foundData = [];
    this.allFoundBnakaran = this.allBnakaran;

    if(this.selectedContractType){
      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedContractType.length; i++){
        this.foundData = this.allFoundBnakaran.filter((home) => {
          return home.contractType === this.selectedContractType[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundBnakaran = this.foundArray;
    }

    if(this.selectedStates){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedStates.length; i++){
        this.foundData = this.allFoundBnakaran.filter((home) => {
          return home.state === this.selectedStates[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundBnakaran = this.foundArray;
    }

    if(this.selectedCity){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedCity.length; i++){
        this.foundData = this.allFoundBnakaran.filter((home) => {
          return home.city === this.selectedCity[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundBnakaran = this.foundArray;
    }

    if(this.selectedYerevanPart){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedYerevanPart.length; i++){
        this.foundData = this.allFoundBnakaran.filter((home) => {
          return home.part === this.selectedYerevanPart[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundBnakaran = this.foundArray;
    }

    if(this.selectedAllStreets){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedAllStreets.length; i++){
        this.foundData = this.allFoundBnakaran.filter((home) => {
          return home.street === this.selectedAllStreets[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundBnakaran = this.foundArray;
    }

    if(this.selectedBuiltType){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedBuiltType.length; i++){
        this.foundData = this.allFoundBnakaran.filter((home) => {
          return home.builtType === this.selectedBuiltType[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundBnakaran = this.foundArray;
    }

    if(this.selectedRoomsCount){
      this.foundData = [];
      this.foundArray = [];
      for(let i = 0; i < this.selectedRoomsCount.length; i++){
        if(this.selectedRoomsCount[i].name === "4+"){
          this.foundData = this.allFoundBnakaran.filter((home) => {
            return +home.roomsCount > 3;
          });
        }else{
          this.foundData = this.allFoundBnakaran.filter((home) => {
            return home.roomsCount === this.selectedRoomsCount[i].name;
          });
        }
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundBnakaran = this.foundArray;
    }

    if(this.selectedAreaMeters){
      this.foundData = [];
      this.foundArray = [];
      for(let i = 0; i < this.selectedAreaMeters.length; i++){
        if(this.selectedAreaMeters[i].name === "Մինչև 50"){
          this.foundData = this.allFoundBnakaran.filter((home) => {
            return +home.area < 50;
          });
        }else if(this.selectedAreaMeters[i].name === "50-80"){
          this.foundData = this.allFoundBnakaran.filter((home) => {
            return home.area < 81 && home.area > 49;
          });
        }else if(this.selectedAreaMeters[i].name === "80-120"){
          this.foundData = this.allFoundBnakaran.filter((home) => {
            return home.area < 121 && home.area > 79;
          });
        }else if(this.selectedAreaMeters[i].name === "120+"){
          this.foundData = this.allFoundBnakaran.filter((home) => {
            return home.area > 120;
          });
        }

        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundBnakaran = this.foundArray;
    }

    if(this.selectedPriceStart){
      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedPriceStart.length; i++){
        if(this.selectedPriceStart[i].name === "100000 +"){
          this.foundData = this.allFoundBnakaran.filter((home) => {
            return +home.price > 99999;
          });
        }else{
          this.foundData = this.allFoundBnakaran.filter((home) => {
            return home.price > this.selectedPriceStart[i].name;
          });
        }
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundBnakaran = this.foundArray;
    }

    if(this.selectedPriceEnd){
      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedPriceEnd.length; i++){
        if(this.selectedPriceEnd[i].name === "100000 +"){
          this.foundData = this.allFoundBnakaran.filter((home) => {
            return +home.price > 99999;
          });
        }else{
          this.foundData = this.allFoundBnakaran.filter((home) => {
            return home.price < this.selectedPriceEnd[i].name;
          });
        }
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundBnakaran = this.foundArray;
    }

    if(this.selectedValue){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedValue.length; i++){
        this.foundData = this.allFoundBnakaran.filter((home) => {
          return home.value === this.selectedValue[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundBnakaran = this.foundArray;
    }

    if(this.newBoolean){
        this.allFoundBnakaran = this.allFoundBnakaran.filter((home) => {
          return home.new === true;
        });
    }

  }

  searchArandznatun(){

    this.foundDataID = undefined;
    this.allFoundBnakaran = undefined;
    this.allFoundArandznatun = undefined;
    this.allFoundKomercion = undefined;
    this.allFoundBiznes = undefined;
    this.allFoundNorakaruyc = undefined;
    this.allFoundHoghamas = undefined;

    this.foundData = [];
    this.allFoundArandznatun = this.allArandznatun;

    if(this.selectedContractType){
      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedContractType.length; i++){
        this.foundData = this.allFoundArandznatun.filter((home) => {
          return home.contractType === this.selectedContractType[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundArandznatun = this.foundArray;
    }

    if(this.selectedStates){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedStates.length; i++){
        this.foundData = this.allFoundArandznatun.filter((home) => {
          return home.state === this.selectedStates[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundArandznatun = this.foundArray;
    }

    if(this.selectedCity){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedCity.length; i++){
        this.foundData = this.allFoundArandznatun.filter((home) => {
          return home.city === this.selectedCity[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundArandznatun = this.foundArray;
    }

    if(this.selectedYerevanPart){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedYerevanPart.length; i++){
        this.foundData = this.allFoundArandznatun.filter((home) => {
          return home.part === this.selectedYerevanPart[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundArandznatun = this.foundArray;
    }

    if(this.selectedAllStreets){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedAllStreets.length; i++){
        this.foundData = this.allFoundArandznatun.filter((home) => {
          return home.street === this.selectedAllStreets[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundArandznatun = this.foundArray;
    }

    if(this.selectedRoomsCount){
      this.foundData = [];
      this.foundArray = [];
      for(let i = 0; i < this.selectedRoomsCount.length; i++){
        if(this.selectedRoomsCount[i].name === "4+"){
          this.foundData = this.allFoundArandznatun.filter((home) => {
            return +home.roomsCount > 3;
          });
        }else{
          this.foundData = this.allFoundArandznatun.filter((home) => {
            return home.roomsCount === this.selectedRoomsCount[i].name;
          });
        }
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundArandznatun = this.foundArray;
    }

    if(this.selectedSiteArea){
      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedSiteArea.length; i++){
        if(this.selectedSiteArea[i].name === "Մինչև 300"){
          this.foundData = this.allFoundArandznatun.filter((home) => {
            return +home.placeArea < 300;
          });
        }else if(this.selectedSiteArea[i].name === "300-500"){
          this.foundData = this.allFoundArandznatun.filter((home) => {
            return home.placeArea < 501 && home.area > 300;
          });
        }else if(this.selectedSiteArea[i].name === "500-1000"){
          this.foundData = this.allFoundArandznatun.filter((home) => {
            return home.placeArea < 1001 && home.area > 500;
          });
        }else if(this.selectedSiteArea[i].name === "1000+"){
          this.foundData = this.allFoundArandznatun.filter((home) => {
            return home.placeArea > 1000;
          });
        }

        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundArandznatun = this.foundArray;
    }

    if(this.selectedAreaMeters){
      this.foundData = [];
      this.foundArray = [];
      for(let i = 0; i < this.selectedAreaMeters.length; i++){
        if(this.selectedAreaMeters[i].name === "Մինչև 50"){
          this.foundData = this.allFoundArandznatun.filter((home) => {
            return +home.area < 50;
          });
        }else if(this.selectedAreaMeters[i].name === "50-80"){
          this.foundData = this.allFoundArandznatun.filter((home) => {
            return home.area < 81 && home.area > 49;
          });
        }else if(this.selectedAreaMeters[i].name === "80-120"){
          this.foundData = this.allFoundArandznatun.filter((home) => {
            return home.area < 121 && home.area > 79;
          });
        }else if(this.selectedAreaMeters[i].name === "120+"){
          this.foundData = this.allFoundArandznatun.filter((home) => {
            return home.area > 120;
          });
        }

        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundArandznatun = this.foundArray;
    }

    if(this.selectedPlaceFloor){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedPlaceFloor.length; i++){
        this.foundData = this.allFoundArandznatun.filter((home) => {
          return home.placeFloor === this.selectedPlaceFloor[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundArandznatun = this.foundArray;
    }

    if(this.selectedPriceStart){
      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedPriceStart.length; i++){
        if(this.selectedPriceStart[i].name === "100000 +"){
          this.foundData = this.allFoundArandznatun.filter((home) => {
            return +home.price > 99999;
          });
        }else{
          this.foundData = this.allFoundArandznatun.filter((home) => {
            return home.price > this.selectedPriceStart[i].name;
          });
        }
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundArandznatun = this.foundArray;
    }

    if(this.selectedPriceEnd){
      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedPriceEnd.length; i++){
        if(this.selectedPriceEnd[i].name === "100000 +"){
          this.foundData = this.allFoundArandznatun.filter((home) => {
            return +home.price > 99999;
          });
        }else{
          this.foundData = this.allFoundArandznatun.filter((home) => {
            return home.price < this.selectedPriceEnd[i].name;
          });
        }
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundArandznatun = this.foundArray;
    }

    if(this.selectedValue){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedValue.length; i++){
        this.foundData = this.allFoundArandznatun.filter((home) => {
          return home.value === this.selectedValue[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundArandznatun = this.foundArray;
    }
  }

  searchKomercion(){

    this.foundDataID = undefined;
    this.allFoundBnakaran = undefined;
    this.allFoundArandznatun = undefined;
    this.allFoundKomercion = undefined;
    this.allFoundBiznes = undefined;
    this.allFoundNorakaruyc = undefined;
    this.allFoundHoghamas = undefined;

    this.foundData = [];
    this.allFoundKomercion = this.allKomercion;

    if(this.selectedContractType){
      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedContractType.length; i++){
        this.foundData = this.allFoundKomercion.filter((home) => {
          return home.contractType === this.selectedContractType[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundKomercion = this.foundArray;
    }

    if(this.selectedStates){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedStates.length; i++){
        this.foundData = this.allFoundKomercion.filter((home) => {
          return home.state === this.selectedStates[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundKomercion = this.foundArray;
    }

    if(this.selectedCity){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedCity.length; i++){
        this.foundData = this.allFoundKomercion.filter((home) => {
          return home.city === this.selectedCity[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundKomercion = this.foundArray;
    }

    if(this.selectedYerevanPart){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedYerevanPart.length; i++){
        this.foundData = this.allFoundKomercion.filter((home) => {
          return home.part === this.selectedYerevanPart[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundKomercion = this.foundArray;
    }

    if(this.selectedAllStreets){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedAllStreets.length; i++){
        this.foundData = this.allFoundKomercion.filter((home) => {
          return home.street === this.selectedAllStreets[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundKomercion = this.foundArray;
    }

    if(this.selectedSiteArea){
      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedSiteArea.length; i++){
        if(this.selectedSiteArea[i].name === "Մինչև 300"){
          this.foundData = this.allFoundKomercion.filter((home) => {
            return +home.placeArea < 300;
          });
        }else if(this.selectedSiteArea[i].name === "300-500"){
          this.foundData = this.allFoundKomercion.filter((home) => {
            return home.placeArea < 501 && home.area > 300;
          });
        }else if(this.selectedSiteArea[i].name === "500-1000"){
          this.foundData = this.allFoundKomercion.filter((home) => {
            return home.placeArea < 1001 && home.area > 500;
          });
        }else if(this.selectedSiteArea[i].name === "1000+"){
          this.foundData = this.allFoundKomercion.filter((home) => {
            return home.placeArea > 1000;
          });
        }

        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundKomercion = this.foundArray;
    }

    if(this.selectedAreaMeters){
      this.foundData = [];
      this.foundArray = [];
      for(let i = 0; i < this.selectedAreaMeters.length; i++){
        if(this.selectedAreaMeters[i].name === "Մինչև 50"){
          this.foundData = this.allFoundKomercion.filter((home) => {
            return +home.area < 50;
          });
        }else if(this.selectedAreaMeters[i].name === "50-80"){
          this.foundData = this.allFoundKomercion.filter((home) => {
            return home.area < 81 && home.area > 49;
          });
        }else if(this.selectedAreaMeters[i].name === "80-120"){
          this.foundData = this.allFoundKomercion.filter((home) => {
            return home.area < 121 && home.area > 79;
          });
        }else if(this.selectedAreaMeters[i].name === "120+"){
          this.foundData = this.allFoundKomercion.filter((home) => {
            return home.area > 120;
          });
        }

        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundKomercion = this.foundArray;
    }

    if(this.selectedPriceStart){
      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedPriceStart.length; i++){
        if(this.selectedPriceStart[i].name === "100000 +"){
          this.foundData = this.allFoundKomercion.filter((home) => {
            return +home.price > 99999;
          });
        }else{
          this.foundData = this.allFoundKomercion.filter((home) => {
            return home.price > this.selectedPriceStart[i].name;
          });
        }
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundKomercion = this.foundArray;
    }

    if(this.selectedPriceEnd){
      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedPriceEnd.length; i++){
        if(this.selectedPriceEnd[i].name === "100000 +"){
          this.foundData = this.allFoundKomercion.filter((home) => {
            return +home.price > 99999;
          });
        }else{
          this.foundData = this.allFoundKomercion.filter((home) => {
            return home.price < this.selectedPriceEnd[i].name;
          });
        }
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundKomercion = this.foundArray;
    }

    if(this.selectedValue){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedValue.length; i++){
        this.foundData = this.allFoundKomercion.filter((home) => {
          return home.value === this.selectedValue[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundKomercion = this.foundArray;
    }
  }

  searchHoghamas(){

    this.foundDataID = undefined;
    this.allFoundBnakaran = undefined;
    this.allFoundArandznatun = undefined;
    this.allFoundKomercion = undefined;
    this.allFoundBiznes = undefined;
    this.allFoundNorakaruyc = undefined;
    this.allFoundHoghamas = undefined;

    this.foundData = [];
    this.allFoundHoghamas = this.allHoghamas;

    if(this.selectedContractType){
      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedContractType.length; i++){
        this.foundData = this.allFoundHoghamas.filter((home) => {
          return home.contractType === this.selectedContractType[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundHoghamas = this.foundArray;
    }

    if(this.selectedStates){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedStates.length; i++){
        this.foundData = this.allFoundHoghamas.filter((home) => {
          return home.state === this.selectedStates[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundHoghamas = this.foundArray;
    }

    if(this.selectedCity){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedCity.length; i++){
        this.foundData = this.allFoundHoghamas.filter((home) => {
          return home.city === this.selectedCity[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundHoghamas = this.foundArray;
    }

    if(this.selectedYerevanPart){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedYerevanPart.length; i++){
        this.foundData = this.allFoundHoghamas.filter((home) => {
          return home.part === this.selectedYerevanPart[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundHoghamas = this.foundArray;
    }

    if(this.selectedAllStreets){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedAllStreets.length; i++){
        this.foundData = this.allFoundHoghamas.filter((home) => {
          return home.street === this.selectedAllStreets[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundHoghamas = this.foundArray;
    }

    if(this.selectedSiteArea){
      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedSiteArea.length; i++){
        if(this.selectedSiteArea[i].name === "Մինչև 300"){
          this.foundData = this.allFoundHoghamas.filter((home) => {
            return +home.placeArea < 300;
          });
        }else if(this.selectedSiteArea[i].name === "300-500"){
          this.foundData = this.allFoundHoghamas.filter((home) => {
            return home.placeArea < 501 && home.area > 300;
          });
        }else if(this.selectedSiteArea[i].name === "500-1000"){
          this.foundData = this.allFoundHoghamas.filter((home) => {
            return home.placeArea < 1001 && home.area > 500;
          });
        }else if(this.selectedSiteArea[i].name === "1000+"){
          this.foundData = this.allFoundHoghamas.filter((home) => {
            return home.placeArea > 1000;
          });
        }

        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundHoghamas = this.foundArray;
    }

    if(this.selectedPriceStart){
      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedPriceStart.length; i++){
        if(this.selectedPriceStart[i].name === "100000 +"){
          this.foundData = this.allFoundHoghamas.filter((home) => {
            return +home.price > 99999;
          });
        }else{
          this.foundData = this.allFoundHoghamas.filter((home) => {
            return home.price > this.selectedPriceStart[i].name;
          });
        }
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundHoghamas = this.foundArray;
    }

    if(this.selectedPriceEnd){
      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedPriceEnd.length; i++){
        if(this.selectedPriceEnd[i].name === "100000 +"){
          this.foundData = this.allFoundHoghamas.filter((home) => {
            return +home.price > 99999;
          });
        }else{
          this.foundData = this.allFoundHoghamas.filter((home) => {
            return home.price < this.selectedPriceEnd[i].name;
          });
        }
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundHoghamas = this.foundArray;
    }

    if(this.selectedValue){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedValue.length; i++){
        this.foundData = this.allFoundHoghamas.filter((home) => {
          return home.value === this.selectedValue[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundHoghamas = this.foundArray;
    }
  }

  searchBiznes(){

    this.foundDataID = undefined;
    this.allFoundBnakaran = undefined;
    this.allFoundArandznatun = undefined;
    this.allFoundKomercion = undefined;
    this.allFoundBiznes = undefined;
    this.allFoundNorakaruyc = undefined;
    this.allFoundHoghamas = undefined;

    this.foundData = [];
    this.allFoundBiznes = this.allBiznes;

    if(this.selectedContractType){
      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedContractType.length; i++){
        this.foundData = this.allFoundBiznes.filter((home) => {
          return home.contractType === this.selectedContractType[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundBiznes = this.foundArray;
    }

    if(this.selectedStates){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedStates.length; i++){
        this.foundData = this.allFoundBiznes.filter((home) => {
          return home.state === this.selectedStates[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundBiznes = this.foundArray;
    }

    if(this.selectedCity){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedCity.length; i++){
        this.foundData = this.allFoundBiznes.filter((home) => {
          return home.city === this.selectedCity[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundBiznes = this.foundArray;
    }

    if(this.selectedYerevanPart){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedYerevanPart.length; i++){
        this.foundData = this.allFoundBiznes.filter((home) => {
          return home.part === this.selectedYerevanPart[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundBiznes = this.foundArray;
    }

    if(this.selectedAllStreets){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedAllStreets.length; i++){
        this.foundData = this.allFoundBiznes.filter((home) => {
          return home.street === this.selectedAllStreets[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundBiznes = this.foundArray;
    }

    if(this.selectedPriceStart){
      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedPriceStart.length; i++){
        if(this.selectedPriceStart[i].name === "100000 +"){
          this.foundData = this.allFoundBiznes.filter((home) => {
            return +home.price > 99999;
          });
        }else{
          this.foundData = this.allFoundBiznes.filter((home) => {
            return home.price > this.selectedPriceStart[i].name;
          });
        }
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundBiznes = this.foundArray;
    }

    if(this.selectedPriceEnd){
      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedPriceEnd.length; i++){
        if(this.selectedPriceEnd[i].name === "100000 +"){
          this.foundData = this.allFoundBiznes.filter((home) => {
            return +home.price > 99999;
          });
        }else{
          this.foundData = this.allFoundBiznes.filter((home) => {
            return home.price < this.selectedPriceEnd[i].name;
          });
        }
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundBiznes = this.foundArray;
    }

    if(this.selectedValue){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedValue.length; i++){
        this.foundData = this.allFoundBiznes.filter((home) => {
          return home.value === this.selectedValue[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundBiznes = this.foundArray;
    }
  }

  searchNorakaruyc(){

    this.foundDataID = undefined;
    this.allFoundBnakaran = undefined;
    this.allFoundArandznatun = undefined;
    this.allFoundKomercion = undefined;
    this.allFoundBiznes = undefined;
    this.allFoundNorakaruyc = undefined;
    this.allFoundHoghamas = undefined;

    this.foundData = [];
    this.allFoundNorakaruyc = this.allNorakaruyc;

    if(this.selectedContractType){
      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedContractType.length; i++){
        this.foundData = this.allFoundNorakaruyc.filter((home) => {
          return home.contractType === this.selectedContractType[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundNorakaruyc = this.foundArray;
    }

    if(this.selectedStates){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedStates.length; i++){
        this.foundData = this.allFoundNorakaruyc.filter((home) => {
          return home.state === this.selectedStates[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundNorakaruyc = this.foundArray;
    }

    if(this.selectedCity){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedCity.length; i++){
        this.foundData = this.allFoundNorakaruyc.filter((home) => {
          return home.city === this.selectedCity[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundNorakaruyc = this.foundArray;
    }

    if(this.selectedYerevanPart){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedYerevanPart.length; i++){
        this.foundData = this.allFoundNorakaruyc.filter((home) => {
          return home.part === this.selectedYerevanPart[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundNorakaruyc = this.foundArray;
    }

    if(this.selectedAllStreets){

      this.foundData = [];
      this.foundArray = [];

      for(let i = 0; i < this.selectedAllStreets.length; i++){
        this.foundData = this.allFoundNorakaruyc.filter((home) => {
          return home.street === this.selectedAllStreets[i].name;
        });
        this.foundArray = this.foundArray.concat(this.foundData);
      }
      this.allFoundNorakaruyc = this.foundArray;
    }
  }
}
