import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TabsetComponent } from './component/tabset/tabset.component';
import { FooterComponent } from './compoent/footer/footer.component';
import { GalloperComponent } from './component/galloper/galloper.component';
import { CarouselSelfComponent } from './component/carousel-self/carousel-self.component';
import { HeaderComponent } from './component/header/header.component';
import { PageNoFoundComponent } from './component/page-no-found/page-no-found.component';

/**
 *
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [TabsetComponent, FooterComponent, GalloperComponent, CarouselSelfComponent, HeaderComponent, PageNoFoundComponent],
  exports: [TabsetComponent, GalloperComponent]
})
export class SharedModule { }
