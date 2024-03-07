import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cssalc-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  public showSidebar: boolean = true;

  private subscription = new Subscription();

  constructor(
    private layoutObserver: BreakpointObserver,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.layoutObserver
        .observe('(max-width: 960px)')
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.showSidebar = false;
          } else {
            this.showSidebar = true;
          }

          //   this.ref.detectChanges();
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
