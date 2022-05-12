import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexboxRoutingModule } from './flexbox-routing.module';
import { DirectionComponent } from './components/direction/direction.component';
import { WrapComponent } from './components/wrap/wrap.component';
import { FlowComponent } from './components/flow/flow.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DirectionComponent,
    WrapComponent,
    FlowComponent
  ],
  imports: [
    CommonModule,
    FlexboxRoutingModule,
    SharedModule
  ]
})
export class FlexboxModule { }
