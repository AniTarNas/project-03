import { Component, OnInit } from '@angular/core';
import {DataService} from '../shared/data.service';
import {ImagesService} from '../shared/images.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  buildingTypes;

  visibleImageNumber = 0;

  images = [];

  constructor(private imagesService: ImagesService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getBuildingTypes().subscribe((buildingTypes) => {
      this.buildingTypes = buildingTypes;
    });

    this.images = this.imagesService.getImages();
    console.log(this.images, this.buildingTypes);
  }

  next(){
    if(this.visibleImageNumber < this.images.length - 1){
      ++this.visibleImageNumber;
    }
  }

  prev(){
    if(this.visibleImageNumber > 0){
      --this.visibleImageNumber;
    }
  }

}
