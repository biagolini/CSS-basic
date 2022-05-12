import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectionComponent } from './components/direction/direction.component';
import { FlowComponent } from './components/flow/flow.component';
import { WrapComponent } from './components/wrap/wrap.component';

const routes: Routes = [
  { path: 'direction', component: DirectionComponent },
  { path: 'wrap', component: WrapComponent },
  { path: 'flow', component: FlowComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlexboxRoutingModule { }
