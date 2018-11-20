import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsetComponent } from './component/tabset/tabset.component';
import { FooterComponent } from './compoent/footer/footer.component';
import { GalloperComponent } from './component/galloper/galloper.component';

/**
 *
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TabsetComponent, FooterComponent, GalloperComponent],
  exports: [TabsetComponent]
})
export class SharedModule { }
