import { Component, VERSION } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule],
})
export class AppComponent {}
