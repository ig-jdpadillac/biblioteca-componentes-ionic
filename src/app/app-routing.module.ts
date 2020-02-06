import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
  { path: 'action-sheet', loadChildren: './pages/action-sheet/action-sheet.module#ActionSheetPageModule' },
  {
    path: 'avatar',
    loadChildren: () => import('./pages/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'botones',
    loadChildren: () => import('./pages/botones/botones.module').then( m => m.BotonesPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'check',
    loadChildren: () => import('./pages/check/check.module').then( m => m.CheckPageModule)
  },
  {
    path: 'date-time',
    loadChildren: () => import('./pages/date-time/date-time.module').then( m => m.DateTimePageModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./pages/fab/fab.module').then( m => m.FabPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./pages/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'infinite-scroll',
    loadChildren: () => import('./pages/infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./pages/input/input.module').then( m => m.InputPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
