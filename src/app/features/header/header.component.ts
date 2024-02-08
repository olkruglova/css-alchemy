import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'cssalc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[] | null = null;

  public activeItem: MenuItem | null = null;

  ngOnInit() {
    this.items = [
      { label: 'Main' },
      { label: 'Articles' },
      { label: 'Edit' },
      { label: 'Documentation' },
      { label: 'Settings' },
    ];

    this.activeItem = this.items[0];
  }

  public onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
}
