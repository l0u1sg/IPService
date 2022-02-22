import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
export interface IpAddress {
  // location
  lat: number;
  lon: number;
  location: string;
  city: string;
  zip: string;
  language: string;
  timezone: string;

  // connection
  ip: string;
  isp: string;
  type: string;
  ASN: string;
  hostname: string;

  // security
  proxy: boolean;
  tor: boolean;
  crawler: boolean;
  threat: boolean;

  // other
  loading: boolean;
  errorMessage: string;
}


@Component({
  selector: 'app-ip-expert',
  templateUrl: './ip-expert.component.html',
  styleUrls: ['./ip-expert.component.css']
})
@Injectable()
export class IpExpertComponent implements OnInit {  
  // location
  lat!: number;
  lon!: number;
  country!: string;
  countryCode!: string;
  regionName!: string;
  city!: string;
  zip!: string;
  language!: string;
  timezone!: string;

  // connection
  ip!: string;
  isp!: string;
  ASN!: string;
  as1!: string;
  hostname!: string;

  // security
  isProxy!: boolean;
  isMobile!: boolean;
  isHosting!: boolean;
  loading!: boolean;
  errorMessage!: string;

  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
    this.fetchIP()
  }
  fetchIP() {
    this.loading = true;
    this.http.get('https://api.ipify.org?format=json').subscribe(data => {
      console.log(data)
      this.getAllData((<any>data).ip)
      this.loading = false;
    })
  }
  getAllData(ip: any) {
    const query = `http://ip-api.com/json/${ip}?field=message,country,countryCode,regionName,city,zip,lat,lon,timezone,isp,as,asname,reverse,mobile,proxy,hosting,query`
    console.warn(query) 
    this.http.get(query).subscribe(data => {
      console.log(data)
      this.country = (<any>data).country;
      this.countryCode = (<any>data).countryCode;
      this.regionName = (<any>data).regionName;
      this.city = (<any>data).city;
      this.zip = (<any>data).zip;      
      this.lat = (<any>data).lat;
      this.lon = (<any>data).lon;
      this.timezone = (<any>data).timezone;
      this.isp  = (<any>data).isp;
      this.as1 = (<any>data).as;
      this.ASN = (<any>data).asname;
      this.hostname = (<any>data).reverse;
      this.isMobile = (<any>data).mobile;
      this.isProxy = (<any>data).proxy;
      this.isHosting = (<any>data).hosting;
      this.ip = (<any>data).query;
    })

  }
}
