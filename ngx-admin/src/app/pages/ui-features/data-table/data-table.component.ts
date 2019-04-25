import { Component, OnInit, ViewChild, } from '@angular/core';
import { MatTableDataSource, MatSort, PageEvent, MatPaginator, MatInputModule } from '@angular/material';
import 'rxjs/add/observable/of';
import { ResourceService } from './resource.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Resource } from './resource';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'ngx-data-table',
  templateUrl: './data-table.component.html',
  // tslint:disable-next-line:trailing-comma
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  dataSource = new MatTableDataSource();
  pageEvent: PageEvent;
  displayedColumns = ['select','id', 'status', 'date', 'amount'];

  selection = new SelectionModel<any>(true, []);
  selectedRows;

  length: number;
  pageSize: number = 10;
  pageIndex: number = 1;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  previous: number;
  originalDataSet: any;

  constructor(private resourceService: ResourceService) { }


  ngOnInit() {
    this.loadData();


  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  loadData() {

    this.resourceService.getResource().subscribe(results => {
      if (!results) {
        this.masterToggle = this.dataSource['result']

        this.applyFilter.length;
        this.dataSource.sort = this.sort;
        this.length = this.dataSource['results']
        return;
      }
      this.dataSource.data = results;
      // console.log(JSON.stringify(results));

    });
    this.applyFilter= this.applyFilter;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));

     this.selectedRows = JSON.stringify(this.selection.selected); 
  }
  isSomeSelected() {
    return this.selection.selected.length > 0;
  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to 
    this.dataSource.filter = filterValue;
  }
  private newMethod(numSelected: number) {
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  payAmount(){
    console.log("payment is being done");
    this.selection.selected.forEach((item)=>{

    });
    this.resourceService.postResource(this.selection.selected);
  }
  onRowClicked(row) {
    console.log('Row clicked: ', row);


  }
  checkboxLabel(row?: Resource): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
  
}
  



