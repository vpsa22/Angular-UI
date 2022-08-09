import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MatCheckboxModule } from '@angular/material/checkbox';

const materialModule = [
FormsModule,
ReactiveFormsModule,
MatSelectModule,
MatExpansionModule,
MatTableModule,
MatInputModule,
MatIconModule,
MatButtonModule,
MatFormFieldModule,
MatCheckboxModule,
FormsModule,
MatTableModule,
NgxMatSelectSearchModule,
MatCardModule,
MatButtonModule ,
MatSnackBarModule,
NgxSliderModule 

]

@NgModule({
  declarations: [],
  imports: [ materialModule],
  exports: [ materialModule],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialModule { }
