import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-ng2-datatable',
  templateUrl: './ng2-datatable.component.html',
  styleUrls: ['./ng2-datatable.component.css']
})
export class Ng2DatatableComponent implements OnInit {
  public data: any[];
  public filterQuery = '';
  public rowsOnPage = 10;
  public sortBy = 'email';
  public sortOrder = 'asc';
  public activePage = 3;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('assets/datatable.json')
      .subscribe((data) => {
        setTimeout(() => {
          this.data = data.json();
        }, 800);
    });
  }

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.city.length;
  }

  public remove(item) {
    const index = this.data.indexOf(item);
    if (index > -1) {
      this.data.splice(index, 1);
    }
  }

}
