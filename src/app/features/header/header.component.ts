import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cssalc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public tabItems: any | null = null;

  ngOnInit() {
    this.tabItems = [
      { label: 'Main', routerLink: '/main', name: 'main' },
      { label: 'Articles', routerLink: '/articles', name: 'articles' },
      { label: 'Edit', routerLink: '/main2', name: 'main' },
      { label: 'Documentation', routerLink: '/main3', name: 'main' },
      { label: 'About', routerLink: '/about', name: 'about' },
    ];
  }
}
