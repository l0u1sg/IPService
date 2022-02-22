import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-ip-address',
  templateUrl: './ip-address.component.html',
  styleUrls: ['./ip-address.component.css']
})

export class IpAddressComponent implements OnInit {
  ipAddress: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchIP();
  }
  fetchIP() {
    this.http.get("https://api.ipify.org/?format=json").subscribe(data => {
      this.ipAddress = (<any>data).ip;
      console.log(this.ipAddress);
    })
  }

}
