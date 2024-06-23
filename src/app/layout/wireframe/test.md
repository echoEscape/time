I am new to Angular itself, my project uses Angular 18.
All my components (dashboard, history, navigation, page-not-found) are standalone.
All <a> Links that I click display the page-not-found components content in \<app-routing\>

My folder structure for the (relevant) components/files look the following:
|-- app  
|   |-- layout  
|   |   |-- components  
|   |   |   |-- dashboard  
|   |   |   |-- history  
|   |   |   |-- page-not-found  
|   |   |-- navigation  
|   |   |   |-- navigation.component.html  
|   |   |   |-- navigation.component.ts  
|   | app.component.html  
|   | app.component.ts  
|   | app.routes.ts

app.routes.ts
``` angularjs
import { Routes } from '@angular/router';
import { DashboardComponent } from './layout/components/dashboard/dashboard.component';
import { HistoryComponent } from './layout/components/history/history.component';
import { PageNotFoundComponent } from './layout/components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '**', component: PageNotFoundComponent},
    {path: 'layout/components/dashboard', component: DashboardComponent},
    {path: 'layout/components/history', component: HistoryComponent},
];
```

app-component.html

```
    <router-outlet></router-outlet>
```

app-component.ts

```
    import { Component } from '@angular/core';
    import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
    import { NavigationComponent } from './layout/navigation/navigation.component';
    
    @Component({
        selector: 'app-root',
        standalone: true,
        imports: [RouterOutlet, RouterLink, RouterLinkActive, NavigationComponent],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css'
    })
    export class AppComponent {
        title = 'Test';
    }
```

navigation.component.html

```
    <a routerLink="layout/components/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="layout/components/history" routerLinkActive="active">History</a>
```

navigation.component.ts

```
    import { Component } from '@angular/core';
    import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
    
    @Component({
        selector: 'app-navigation',
        standalone: true,
        imports: [RouterLink, RouterLinkActive, RouterOutlet],
        templateUrl: './navigation.component.html',
        styleUrl: './navigation.component.css',
    })
    export class NavigationComponent {
        nav_exp = false;
    }
```


The goal was to display the content of the dashboard and history components, instead it showed the page-not-found components content.

When I try to enter localhost:4200/layout/components/dashboard manually it instead displays the page-not-found content and keeps the manually input URL in the URL-Bar.

Despite trying to use various formats of the path link I don't seem to get any correct results. I feel like I am understanding something very basic very wrong.