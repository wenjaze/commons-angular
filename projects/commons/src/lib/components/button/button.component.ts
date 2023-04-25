import { Component, ContentChild, ElementRef, Input } from '@angular/core';
import { CommonsButtonType } from '../../commons';
@Component({
  selector: 'commons-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
	@Input() icon : string = "";
	@Input() text : string = "";
	@Input() upperCase : boolean = true;
	@Input() color = "white";
	
    /**
     * - fab
	 * - round
	 * - flat
	 * - raised
	 * - icon
     */
    @Input() type: string = 'default';

    /**
     * - small
     * - medium
     * - big
     */
    @Input() size: string = 'medium';
    
    /**
     * - left
     * - center
     * - right
     */
    @Input() align: string = 'center';

    public classList: string[] = [];
    public typeIcon: string | undefined;

    ngOnInit(): void {
        this.setClassList();
    }

    private setClassList(): void {
        this.classList = [
            'commons-root-button',
            'commons-root-button--' + this.type,
            'commons-root-button--size-' + this.size,
			this.upperCase ? 'upperCase' : ''
        ];

		document.getElementById("commons-button")!.style.color = this.color;

        if (this.align.trim() != '') {
            this.classList.push(this.align.trim());
        }
    }

    public setType(type: string) {
        this.type = type;

        this.setClassList();
    }

    public setSize(size: string) {
        this.size = size;

        this.setClassList();
    }

    public setAlign(align: string) {
        this.align = align;

        this.setClassList();
    }


	ngAfterViewInit() {
	}
}
