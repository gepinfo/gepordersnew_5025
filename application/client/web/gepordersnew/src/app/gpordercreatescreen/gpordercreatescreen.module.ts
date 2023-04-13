import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GpordercreatescreenComponent } from './gpordercreatescreen.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgSelectModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: GpordercreatescreenComponent },
        ])
    ],
    declarations: [
        GpordercreatescreenComponent,
    ]
})
export class GpordercreatescreenModule { }