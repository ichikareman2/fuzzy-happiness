import { NgModule } from '@angular/core';
import { FuzzyHappinessLibComponent } from './fuzzy-happiness-lib.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    FuzzyHappinessLibComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    FuzzyHappinessLibComponent
  ]
})
export class FuzzyHappinessLibModule { }
