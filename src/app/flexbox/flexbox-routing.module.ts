import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlignContentComponent } from './components/align-content/align-content.component';
import { AlignItemsComponent } from './components/align-items/align-items.component';

import { BasicComponent } from './components/basic/basic.component';
import { DirectionComponent } from './components/direction/direction.component';
import { FlexBasisComponent } from './components/flex-basis/flex-basis.component';
import { FlexGrowComponent } from './components/flex-grow/flex-grow.component';
import { FlexShrinkComponent } from './components/flex-shrink/flex-shrink.component';
import { FlowComponent } from './components/flow/flow.component';
import { JustifyContentComponent } from './components/justify-content/justify-content.component';
import { ReferencesComponent } from './components/references/references.component';
import { WrapComponent } from './components/wrap/wrap.component';

const routes: Routes = [
  { path: 'basic', component: BasicComponent },
  { path: 'direction', component: DirectionComponent },
  { path: 'wrap', component: WrapComponent },
  { path: 'flow', component: FlowComponent },
  { path: 'justify-content', component: JustifyContentComponent },
  { path: 'align-items', component: AlignItemsComponent }, 
  { path: 'align-content', component: AlignContentComponent }, 
  { path: 'flex-grow', component: FlexGrowComponent }, 
  { path: 'flex-basis', component: FlexBasisComponent }, 
  { path: 'flex-shrink', component: FlexShrinkComponent },   
  { path: 'reference', component: ReferencesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlexboxRoutingModule { }
