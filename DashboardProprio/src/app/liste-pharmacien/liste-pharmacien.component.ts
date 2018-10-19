import { Component, OnInit, ViewChild, Injectable } from "@angular/core";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-liste-pharmacien",
  templateUrl: "./liste-pharmacien.component.html",
  styleUrls: ["./liste-pharmacien.component.css"]
})
@Injectable()
export class ListePharmacienComponent implements OnInit {
  //Affichage des colonnes
  displayedColumns: string[] = [
    "id",
    "name",
    "email",
    "address",
    "phone",
    "siren"
  ];
  dataSource = new MatTableDataSource();

  constructor(public http: HttpClient) {}

  fetchData = function() {
    this.http
      .get("http://localhost:8004/pharmacien/")
      .subscribe((res: Response) => {
        this.dataSource.data = res;
      });
  };

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  ngOnInit() {
    this.fetchData();
    this.dataSource.paginator = this.paginator;
  }
}
