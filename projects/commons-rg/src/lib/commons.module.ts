import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
	declarations: [ButtonComponent],
	imports: [CommonModule,FontAwesomeModule],
	exports: [ButtonComponent],
})
export class CommonsModule {
}
