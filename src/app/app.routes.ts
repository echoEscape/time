import { Routes } from '@angular/router';
import { WireframeComponent } from './layout/wireframe/wireframe.component';
import { OverviewComponent } from './layout/components/overview/overview.component';
import { HistoryComponent } from './layout/components/history/history.component';
import { PageNotFoundComponent } from './layout/components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', component: WireframeComponent,},
    {path:'**', component:PageNotFoundComponent},
    {path: './layout/components/overview', component: OverviewComponent},
    {path: './layout/components/history', component: HistoryComponent},
];
