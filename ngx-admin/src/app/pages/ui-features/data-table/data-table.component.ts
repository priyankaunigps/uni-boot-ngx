import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import 'rxjs/add/observable/of';
import { ResourceService } from './resource.service';



@Component({
  selector: 'ngx-data-table',
  templateUrl: './data-table.component.html',
// tslint:disable-next-line:trailing-comma
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  dataSource=new MatTableDataSource();
  displayedColumns = ['id', 'status', 'date', 'amount'];

constructor (private resourceService: ResourceService) {}

ngOnInit() {
  this.resourceService.getResource().subscribe(results => {
    if (!results) {
      return;
    }
    this.dataSource.data = results;
    console.log(JSON.stringify(results));
  })

}
}

