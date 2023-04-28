import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
	selector: 'commons-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
    @ViewChild('rootButton') rootButton!: ElementRef; 

	@Input() icon = '';
	@Input() text!:string;

	/**
	 * Sets the color css property of the root button component.
	 */
	@Input() color = 'white';

	/**
	 * Sets the backgroundColor css property of the root button component.
	 */
    @Input() backgroundColor!:string;

	/**
	 * - fab
	 * - round
	 * - flat
	 * - raised
	 * - icon
	 * - rounded
	 */
	@Input() type = 'raised';

	public classList: string[] = [];
	public typeIcon: string | undefined;

	ngOnInit(): void {
		this.setClassList();
	}

	ngOnChanges() {
		this.setClassList();
	}

	public setClassList(): void {
		this.classList = [
			'commons-root-button',
			'commons-root-button--' + this.type,
		];
	}

	public setType(type:string){
		this.type = type;
	}

	public getType() : string {
		return this.type;
	}

	public setText(text : string) {
		this.text = text;
	}

	public getText() : string {
		return this.text
	}


}
