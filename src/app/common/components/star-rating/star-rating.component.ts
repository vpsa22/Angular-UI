import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar'
@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
 currentRate = 0;
 rating=0;
 starCount=5;
 ratingArr: boolean[]=[];
  
 snackBarDuration =1000;
 response=[
   '1',
   '2',
   '3',
   '4',
   '5'
 ]
  constructor(private snackBar: MatSnackBar) {
    this.ratingArr=Array(this.starCount).fill(false);
   }

  ngOnInit(): void {
  }
  
  returnStar(i:number){
    if(this.rating >= i+1){
      return 'star';
    }else{
      return 'star-border';
    }
  }

  onClick(i:number){    
    this.rating =i + 1;
    this.snackBar.open(this.response[i], '',{
      duration:this.snackBarDuration,
      panelClass:['snack-bar']
    })
  }
}
