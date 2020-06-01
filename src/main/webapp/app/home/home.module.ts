import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipstertest8SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Jhipstertest8SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class Jhipstertest8HomeModule {}
