import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HexGridContainerComponent } from './projects/hex-grid-container/hex-grid-container.component';
import { HexGridItemComponent } from './projects/hex-grid-item/hex-grid-item.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { EmailService } from './services/email.service';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    ContactUsComponent,
    HomepageComponent,
    HexGridContainerComponent,
    HexGridItemComponent,
    NavbarComponent


  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EmailService
  ]
})
export class PagesModule { }
