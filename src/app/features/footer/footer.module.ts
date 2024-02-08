import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app.routing.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [AppRoutingModule, CommonModule],
  exports: [FooterComponent],
  providers: [],
  bootstrap: [FooterComponent],
})
export class FooterModule {}
