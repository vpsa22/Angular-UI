import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  //reviewForm!: FormGroup;
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

 constructor(private router: Router,private snackBar: MatSnackBar) {
  this.ratingArr=Array(this.starCount).fill(false);
 }

  ngOnInit(): void {
    
    // this.reviewForm = new FormGroup({
      
    // });
  }

  submitReview(){}
  onSubmit() {
    this.router.navigate(['/review']);    
   }
   
   returnStar(i:number){
    if(this.rating >= (i+1)){
      return 'star';
    }else{
      return 'star_border';
    }
  }

  onClick(i:number){    
    this.rating = i + 1;
    // this.snackBar.open(this.response[i], '',{
    //   duration:this.snackBarDuration,
    //   panelClass:['snack-bar']
    // });
  }
}
