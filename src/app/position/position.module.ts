import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionRoutingModule } from './position-routing.module';
import { AbsoluteComponent } from './components/absolute/absolute.component';
import { FixedComponent } from './components/fixed/fixed.component';
import { RelativeComponent } from './components/relative/relative.component';
import { StaticComponent } from './components/static/static.component';
import { StickyComponent } from './components/sticky/sticky.component';
import { SharedModule } from '../shared/shared.module';
import { ReferencesComponent } from './components/references/references.component';


@NgModule({
  declarations: [
    AbsoluteComponent,
    FixedComponent,
    RelativeComponent,
    StaticComponent,
    StickyComponent,
    ReferencesComponent
  ],
  imports: [
    CommonModule,
    PositionRoutingModule,
    SharedModule
  ]
})
export class PositionModule { }
