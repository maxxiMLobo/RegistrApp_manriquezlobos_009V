import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'inicio', url: 'inicio', icon: 'star' },
    { title: 'informacion', url: 'info', icon: 'book' },

    { title: 'listar', url: 'listar', icon: 'list' },
    { title: 'login', url: 'login', icon: 'home' },
    { title: 'logout', url: 'logout', icon: 'exit' },
  ];
  public labels = [];

  constructor() {}
}
