import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }


  public images = [
    {
      id: 1,
      url: "http://irealty.am/assets/images/livingroom2.jpg",
      visible: true
    },    {
      id: 2,
      url: "http://irealty.am/assets/images/room3.jpg",
      visible: false
    },   {
      id: 3,
      url: "http://irealty.am/assets/images/house.jpg",
      visible: false
    },
  ];

  getImages(){
    return this.images;
  }
}

