import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { NavigationComponent } from './layout/navigation/navigation.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, NavigationComponent,],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TIME';
}
