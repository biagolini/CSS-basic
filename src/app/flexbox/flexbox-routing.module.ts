import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicComponent } from './components/basic/basic.component';
import { DirectionComponent } from './components/direction/direction.component';
import { FlowComponent } from './components/flow/flow.component';
import { ReferencesComponent } from './components/references/references.component';
import { WrapComponent } from './components/wrap/wrap.component';

const routes: Routes = [
  { path: 'basic', component: BasicComponent },
  { path: 'direction', component: DirectionComponent },
  { path: 'wrap', component: WrapComponent },
  { path: 'flow', component: FlowComponent },
  { path: 'reference', component: ReferencesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlexboxRoutingModule { }
