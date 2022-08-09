import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  value: number = 3;
  options: Options = {
    showTicksValues: true,
    showTicks:true,
   
    stepsArray: [
      { value: 1, legend: "Horrible" },
     
      { value: 2, legend: "Pretty Good" },
     
      { value: 3, legend: "Yep" },
        
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
