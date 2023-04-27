import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
	selector: 'commons-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @ViewChild('rootButton') rootButton!: ElementRef; 

	@Input() icon: string = '';
	@Input() text: string = '';
	@Input() upperCase: boolean = true;
	@Input() color = 'white';
    @Input() backgroundColor!:string;

	/**
	 * - fab
	 * - round
	 * - flat
	 * - raised
	 * - icon
	 */
	@Input() type: string = 'raised';

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
		];

        try {
            this.rootButton.nativeElement.style.color = this.color;
        } catch (exception) {
            console.log("Cannnot set color:",this.color);
        }

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
}
