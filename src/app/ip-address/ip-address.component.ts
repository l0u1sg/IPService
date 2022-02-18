import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ip-address',
  templateUrl: './ip-address.component.html',
  styleUrls: ['./ip-address.component.css']
})


export class IpAddressComponent implements OnInit {
  ip = '127.0.0.1';

  constructor() { }

  ngOnInit(): void {
  }

}
