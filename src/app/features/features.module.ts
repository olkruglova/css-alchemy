import { NgModule } from '@angular/core';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { MainModule } from './main/main.module';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  declarations: [],
  imports: [HeaderModule, FooterModule, MainModule, SidebarModule],
  exports: [HeaderModule, FooterModule, MainModule, SidebarModule],
  providers: [],
  bootstrap: [],
})
export class FeaturesModule {}
