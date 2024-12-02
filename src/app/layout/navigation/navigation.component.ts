import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-navigation',
    imports: [RouterLink, RouterLinkActive, RouterOutlet],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  nav_hidden = true;
}
