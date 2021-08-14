import { PopOverComponent } from './pop-over/pop-over.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  declarations: [PopOverComponent],
  imports: [
    CommonModule,
   SharedRoutingModule
  ],
   exports : [CommonModule]
})
export class SharedModule { }
