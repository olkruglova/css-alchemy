import { NgModule } from '@angular/core';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { MainModule } from './main/main.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { OverviewModule } from './overview/overview.module';

@NgModule({
  declarations: [],
  imports: [
    HeaderModule,
    FooterModule,
    MainModule,
    SidebarModule,
    OverviewModule,
  ],
  exports: [
    HeaderModule,
    FooterModule,
    MainModule,
    SidebarModule,
    OverviewModule,
  ],
  providers: [],
  bootstrap: [],
})
export class FeaturesModule {}
