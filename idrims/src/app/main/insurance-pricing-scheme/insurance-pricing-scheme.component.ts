import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';

@Component({
  selector: 'app-insurance-pricing-scheme',
  templateUrl: './insurance-pricing-scheme.component.html',
  styleUrls: ['./insurance-pricing-scheme.component.css']
})
export class InsurancePricingSchemeComponent implements OnInit {

  insclasses = [];
  constructor(private demo: DemoService) { 
    this.getInsTaxClass();
  }

   getInsTaxClass(){
    this.demo.get('http://108.61.174.41:7070/api/insurancePricing/view')
    .subscribe(insclasses=> { 
      let arr = [];
        arr.push(insclasses)
        this.insclasses = arr[0];
        console.log(insclasses);
      }
    ) 
  }

  ngOnInit() {
  }

}
 