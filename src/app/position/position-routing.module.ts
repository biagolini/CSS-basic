import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AbsoluteComponent } from './components/absolute/absolute.component';
import { FixedComponent } from './components/fixed/fixed.component';
import { ReferencesComponent } from './components/references/references.component';
import { RelativeComponent } from './components/relative/relative.component';
import { StaticComponent } from './components/static/static.component';
import { StickyComponent } from './components/sticky/sticky.component';

const routes: Routes = [
  { path: 'absolute', component: AbsoluteComponent },
  { path: 'fixed', component: FixedComponent },
  { path: 'relative', component: RelativeComponent },
  { path: 'static', component: StaticComponent },
  { path: 'sticky', component: StickyComponent },
  { path: 'reference', component: ReferencesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionRoutingModule { }
