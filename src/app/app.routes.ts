import { Routes } from '@angular/router';
import { WireframeComponent } from './layout/wireframe/wireframe.component';
import { OverviewComponent } from './layout/components/overview/overview.component';
import { HistoryComponent } from './layout/components/history/history.component';
import { PageNotFoundComponent } from './layout/components/page-not-found/page-not-found.component';
import { ShiftplanComponent } from './layout/components/shiftplan/shiftplan.component';
import { HolidayComponent } from './layout/components/holiday/holiday.component';
import { SickleaveComponent } from './layout/components/sickleave/sickleave.component';
import { EmployeesComponent } from './layout/components/employees/employees.component';
import { RequestsComponent } from './layout/components/requests/requests.component';
import { ViolationsComponent } from './layout/components/violations/violations.component';
import { SettingsComponent } from './layout/components/settings/settings.component';
import { SupportComponent } from './layout/components/support/support.component';

export const routes: Routes = [
    {path: '', component: OverviewComponent,},
    {path: 'overview', component: OverviewComponent},
    {path: 'history', component: HistoryComponent},
    {path: 'shiftplan', component: ShiftplanComponent},
    {path: 'holiday', component: HolidayComponent},
    {path: 'sickleave', component: SickleaveComponent},
    {path: 'employees', component: EmployeesComponent},
    {path: 'requests', component: RequestsComponent},
    {path: 'violations', component: ViolationsComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'support', component: SupportComponent},
    {path:'**', component:PageNotFoundComponent},
];
