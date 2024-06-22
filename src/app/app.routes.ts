import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WireframeComponent } from './layout/wireframe/wireframe.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    }
];
