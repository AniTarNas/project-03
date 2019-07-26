import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-one-home',
  templateUrl: './one-home.component.html',
  styleUrls: ['./one-home.component.scss']
})
export class OneHomeComponent implements OnInit {

  id;
  new;
  top;
  hardaranq;
  naxagic;
  cack;
  arastag;
  phoneNumber;
  map;
  harmarutyunner;
  otherInfo;
  type;
  contractType;
  price;
  state;
  city;
  street;
  area;
  value;
  builtType;
  roomsCount;
  floor;
  img  = [];

  sPhoneNumbers = [];
  sHarmarutyunner = [];
  sOtherInfo = {};
  sImages = [];
  sAdditionalInfo = [];

  constructor(private router: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.sPhoneNumbers = this.dataService.phoneNumbers;
    this.sHarmarutyunner = this.dataService.harmarutyunner;
    this.sOtherInfo = this.dataService.otherInfo;
    this.sImages = this.dataService.images;
    this.sAdditionalInfo = this.dataService.additionalInfo;

    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.type = params['type'];
    });
    this.router.queryParams.subscribe((params: Params) => {
      this.new = params['new'];
      this.top = params['top'];
      this.hardaranq = params['hardaranq'];
      this.naxagic = params['naxagic'];
      this.cack = params['cack'];
      this.arastag = params['arastag'];
      this.phoneNumber = params['phoneNumber'];
      this.map = params['map'];
      this.harmarutyunner = params['harmarutyunner'];
      this.otherInfo = params['otherInfo'];
      this.type = params['type'];
      this.contractType = params['contractType'];
      this.price = params['price'];
      this.state = params['state'];
      this.city = params['city'];
      this.street = params['street'];
      this.area = params['area'];
      this.value = params['value'];
      this.builtType = params['builtType'];
      this.roomsCount = params['roomsCount'];
      this.floor = params['floor'];
      this.img = params['img'];
    });
  }
}
