import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Bank, BankGroup, BANKGROUPS, BANKS } from 'src/app/common/constants/company-data';


@Component({
  selector: 'app-landing-right',
  templateUrl: './landing-right.component.html',
  styleUrls: ['./landing-right.component.css']
})
export class LandingRightComponent implements AfterViewInit {

  @ViewChild(MatTable) table : MatTable<BankGroup> | undefined ;
  
  datasource= new MatTableDataSource(BANKGROUPS);

  ngAfterViewInit(): void {
    if(this.table !=undefined ){
      this.table.dataSource = this.datasource;
  }
  }
  
  ngOnInit(): void {  }

  constructor(private router: Router) { }

  displayedColumn: string[] =[
    'name'
  ]
  applyFilter(event: Event){
    const filterValue =(event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();
  }
  routeToDetails(){   
    this.router.navigate(['/company-details']);
  }
  };
  // ngAfterViewInit() {
  //   this.setInitialValue();
  // }

 



