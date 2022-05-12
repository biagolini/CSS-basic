import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'position',
    loadChildren: () =>
    import('./position/position.module').then((m) => m.PositionModule)
  },
  {
    path: 'flexbox',
    loadChildren: () =>
    import('./flexbox/flexbox.module').then((m) => m.FlexboxModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
