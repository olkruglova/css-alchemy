import { Component } from '@angular/core';

@Component({
  selector: 'cssalc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public date: Date = new Date();
}
