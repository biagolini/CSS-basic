import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AlignItemsComponent } from './components/align-items/align-items.component';
import { BasicComponent } from './components/basic/basic.component';
import { DirectionComponent } from './components/direction/direction.component';
import { ReferencesComponent } from './components/references/references.component';
import { WrapComponent } from './components/wrap/wrap.component';
import { FlexboxRoutingModule } from './flexbox-routing.module';


@NgModule({
  declarations: [
    AlignItemsComponent,
    DirectionComponent,
    BasicComponent,
    ReferencesComponent,
    WrapComponent
  ],
  imports: [
    CommonModule,
    FlexboxRoutingModule,
    SharedModule
  ]
})
export class FlexboxModule { }
