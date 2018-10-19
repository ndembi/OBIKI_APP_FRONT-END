import { Component, OnInit, Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatTableDataSource } from "@angular/material";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

/**
 * @title Filter autocomplete
 */
@Component({
  selector: "app-edit-pharmacien",
  templateUrl: "./edit-pharmacien.component.html",
  styleUrls: ["./edit-pharmacien.component.css"]
})
@Injectable()
export class EditPharmacienComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  dataSource = new MatTableDataSource();

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value))
    );
    this.fetchData();
  }

  fetchData = function() {
    this.http
      .get("http://localhost:8004/pharmacien/")
      .subscribe((res: Response) => {
        this.dataSource.data = res;
        this.addintoArray();
        // this.options.push(this.dataSource.data[0].name);
        console.log(this.options);
      });
  };

  addintoArray = function(){
    for (let index = 0; index < this.dataSource.data.length; index++) {
      this.options.push(this.dataSource.data[index].name);

    }
  };

  private _filter(value: string): string[] {
    /* this.fetchData(); */
    const filterValue = value.toLowerCase();
    this.addintoArray();

    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
