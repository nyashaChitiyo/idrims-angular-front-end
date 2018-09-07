import {Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DemoService } from '../../demo.service';
import{Router,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-my-transactions',
  templateUrl: './my-transactions.component.html',
  styleUrls: ['./my-transactions.component.css']
})
export class MyTransactionsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  transactions= [];
  userGroup:string;
  public temp_var: Object = false;

  constructor(private router: Router, private httpClient: HttpClient, private demo: DemoService) {
 this.gettransactions()
  }
  ngOnInit() {  
    this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 5
  };
  }
  
  gettransactions(){
    this.httpClient.post('http://108.61.174.41:7070/api/orders/view/userId',
    {
      "id": 0
    })
    .subscribe(
      (data:any[])=> {
        let arr = [];
        arr.push(data)
        this.transactions = arr[0];
        console.log(arr[0]);
      }
    ) 
  }

} 
 