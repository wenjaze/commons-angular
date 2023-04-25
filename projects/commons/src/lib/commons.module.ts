import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { FaIconComponent } from './components/fa-icon-component/fa-icon.component';

@NgModule({
	declarations: [ButtonComponent, FaIconComponent],
	imports: [CommonModule],
	exports: [ButtonComponent],
})
export class CommonsModule {}
