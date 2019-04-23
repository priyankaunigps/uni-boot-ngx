import { Component, OnInit,ViewChild,  } from '@angular/core';
import { MatTableDataSource, MatSort ,PageEvent, MatPaginator} from '@angular/material';
import 'rxjs/add/observable/of';
import { ResourceService } from './resource.service';



@Component({
  selector: 'ngx-data-table',
  templateUrl: './data-table.component.html',
// tslint:disable-next-line:trailing-comma
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit  {
  dataSource=new MatTableDataSource();
  pageEvent:PageEvent;
  displayedColumns = ['id', 'status', 'date', 'amount'];

  length:number;
  pageSize:number = 10;
  pageIndex:number = 1;
  pageSizeOptions:number[] = [5, 10, 25, 50, 100];


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

constructor (private resourceService: ResourceService) {}


ngOnInit() {
  this.loadData();
}
loadData(){
  this.resourceService.getResource().subscribe(results => {
    if (!results) {
      this.dataSource.sort = this.sort;
      this.length = this.dataSource['results']
      return;
      
    }
    this.dataSource.data = results;
    console.log(JSON.stringify(results));
  });
  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;
}
onRowClicked(row) {
  console.log('Row clicked: ', row);
}
}


