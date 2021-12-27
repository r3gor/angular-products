import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ButtonModule} from 'primeng/button';
import {SlideMenuModule} from 'primeng/slidemenu';
import {TableModule} from 'primeng/table';
import {InputSwitchModule} from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    SlideMenuModule,
    TableModule,
    InputSwitchModule,
    FormsModule,
    
    BrowserAnimationsModule,
  ]
})
export class PrimeNgModule { }
