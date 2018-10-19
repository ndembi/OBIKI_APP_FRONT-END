import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageEvent } from '@angular/material';


@Component({
  selector: 'app-interface-pharmacien',
  templateUrl: './interface-pharmacien.component.html',
  styleUrls: ['./interface-pharmacien.component.css']
})
@Injectable()
export class InterfacePharmacienComponent implements OnInit {

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
  this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }


  constructor(public http: HttpClient) { }
  products = [];

  fetchData = function(){
    this.http.get("http://localhost:8004/pharmacien/").subscribe(
    (res: Response) => {
      console.log(res);
      this.products = res;
    }
  )
}
  ngOnInit() {
    this.fetchData();
  }

}
