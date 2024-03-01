import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cssalc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public tabItems: any | null = null;
  public showNavbar: boolean = true;
  public showSideMenu: boolean = false;

  private subscription = new Subscription();

  constructor(private layoutObserver: BreakpointObserver) {}

  ngOnInit() {
    this.subscription.add(
      this.layoutObserver
        .observe('(max-width: 960px)')
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.showNavbar = false;
          } else {
            this.showNavbar = true;
          }
        })
    );

    this.tabItems = [
      { label: 'Main', routerLink: '/main', name: 'main' },
      { label: 'Articles', routerLink: '/articles', name: 'articles' },
      { label: 'Edit', routerLink: '/main2', name: 'main' },
      { label: 'About', routerLink: '/main3', name: 'main' },
      { label: 'About', routerLink: '/about', name: 'about' },
    ];
  }

  toggleSideMenu() {
    console.log('toggleSideMenu');
    this.showSideMenu = !this.showSideMenu;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
