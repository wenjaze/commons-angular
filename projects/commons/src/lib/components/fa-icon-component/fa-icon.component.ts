import { Component, Input } from '@angular/core';

@Component({
  selector: 'commons-fa-icon',
  templateUrl: './fa-icon.component.html',
})
export class FaIconComponent {
  @Input() name!: string;
  @Input() prefix: string = 'fa';
  @Input() spin: boolean = false;
  
  get classes(): string {
    return `fa-${this.name} ${this.prefix} ${this.spin ? 'fa-spin' : ''}`;
  }
}