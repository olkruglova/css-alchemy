import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cssalc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public tabItems: any | null = null;

  public activeItem: any | null = null;

  ngOnInit() {
    this.tabItems = [
      { label: 'Main', routerLink: 'main' },
      { label: 'Articles', routerLink: 'main1' },
      { label: 'Edit', routerLink: 'main2' },
      { label: 'Documentation', routerLink: 'main3' },
      { label: 'Settings', routerLink: 'main4' },
    ];

    this.activeItem = this.tabItems[0];
  }

  public onActiveItemChange(event: any) {
    this.activeItem = event;
  }
}
