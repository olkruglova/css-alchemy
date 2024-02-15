import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  AfterViewChecked,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'cssalc-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  //   private elts: {
  //     text1: HTMLElement | null;
  //     text2: HTMLElement | null;
  //   } = {
  //     text1: null,
  //     text2: null,
  //   };

  private texts = ['For', 'text', 'animations', 'click', 'here', ':)'];
  private morphTime = 1;
  private cooldownTime = 0.25;

  private textIndex = this.texts.length - 1;
  private time = new Date();
  private morph = 0;
  private cooldown = this.cooldownTime;

  constructor() {}

  @ViewChild('text1') text1!: ElementRef;
  @ViewChild('text2') text2!: ElementRef;

  ngOnInit(): void {
    // this.text1.nativeElement.textContent =
    //   this.texts[this.textIndex % this.texts.length];
    // this.text2.nativeElement.textContent =
    //   this.texts[(this.textIndex + 1) % this.texts.length];
    // this.animate();
  }

  ngAfterViewInit(): void {
    this.text1.nativeElement.textContent =
      this.texts[this.textIndex % this.texts.length];
    this.text2.nativeElement.textContent =
      this.texts[(this.textIndex + 1) % this.texts.length];

    this.animate();
  }

  doMorph = () => {
    this.morph -= this.cooldown;
    this.cooldown = 0;

    let fraction = this.morph / this.morphTime;

    if (fraction > 1) {
      this.cooldown = this.cooldownTime;
      fraction = 1;
    }

    this.setMorph(fraction);
  };

  setMorph = (fraction: number) => {
    this.text2.nativeElement.style.filter = `blur(${Math.min(
      8 / fraction - 8,
      100
    )}px)`;
    this.text2.nativeElement.style.opacity = `${
      Math.pow(fraction, 0.4) * 100
    }%`;

    fraction = 1 - fraction;
    this.text1.nativeElement.style.filter = `blur(${Math.min(
      8 / fraction - 8,
      100
    )}px)`;
    this.text1.nativeElement.style.opacity = `${
      Math.pow(fraction, 0.4) * 100
    }%`;

    this.text1.nativeElement.textContent =
      this.texts[this.textIndex % this.texts.length];
    this.text2.nativeElement.textContent =
      this.texts[(this.textIndex + 1) % this.texts.length];
  };

  doCooldown = () => {
    this.morph = 0;

    this.text2.nativeElement.style.filter = '';
    this.text2.nativeElement.style.opacity = '100%';

    this.text1.nativeElement.style.filter = '';
    this.text1.nativeElement.style.opacity = '0%';
  };

  public animate = () => {
    requestAnimationFrame(this.animate);

    let newTime = new Date();
    let shouldIncrementIndex = this.cooldown > 0;
    let dt = (newTime.getTime() - this.time.getTime()) / 1000;
    this.time = newTime;

    this.cooldown -= dt;

    if (this.cooldown <= 0) {
      if (shouldIncrementIndex) {
        this.textIndex++;
      }

      this.doMorph();
    } else {
      this.doCooldown();
    }
  };
}
