import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { EntitiesComponent } from './components/entities/entities.component';


@NgModule({
  declarations: [
    EntitiesComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
