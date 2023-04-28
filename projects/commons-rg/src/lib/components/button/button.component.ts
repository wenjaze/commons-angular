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
	 */
	@Input() _type: string = 'raised';

	/**
	 * - small
	 * - medium
	 * - big
	 */
	@Input() _size: string = 'medium';

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
	}

	set type(type:string){
		this.type = type;
	}

	get type() : string {
		return this._type;
	}

	set size(size:string){
		this._size = size;
	}

	get size() : string {
		return this._size;
	}

}
