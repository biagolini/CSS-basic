import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AlignItemsComponent } from './components/align-items/align-items.component';
import { BasicComponent } from './components/basic/basic.component';
import { DirectionComponent } from './components/direction/direction.component';
import { ReferencesComponent } from './components/references/references.component';
import { WrapComponent } from './components/wrap/wrap.component';
import { FlexboxRoutingModule } from './flexbox-routing.module';
import { FlowComponent } from './components/flow/flow.component';
import { JustifyContentComponent } from './components/justify-content/justify-content.component';
import { AlignContentComponent } from './components/align-content/align-content.component';
import { FlexGrowComponent } from './components/flex-grow/flex-grow.component';
import { FlexBasisComponent } from './components/flex-basis/flex-basis.component';
import { FlexShrinkComponent } from './components/flex-shrink/flex-shrink.component';


@NgModule({
  declarations: [
    AlignItemsComponent,
    DirectionComponent,
    BasicComponent,
    ReferencesComponent,
    WrapComponent,
    FlowComponent,
    JustifyContentComponent,
    AlignContentComponent,
    FlexGrowComponent,
    FlexBasisComponent,
    FlexShrinkComponent
  ],
  imports: [
    CommonModule,
    FlexboxRoutingModule,
    SharedModule
  ]
})
export class FlexboxModule { }
