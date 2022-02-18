import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
