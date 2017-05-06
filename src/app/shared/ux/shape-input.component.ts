import { Component, ElementRef, Input } from "@angular/core";

@Component({
    selector: 'wfe-shape-input',
    styleUrls: ['./shape-input.component.scss'],
    template:
    `
    <div class="shape-input" [style.width]="width">
        <label [style.color]="color">{{placeholder}}</label>
        <clr-icon [style.color]="color" class="fa fa-shape-input is-solid" [attr.shape]="shape" size="15"></clr-icon>
        <input (focus)="onFocus()" (blur)="onBlur()" type={{type}} placeholder={{placeholder}} [style.width]="width">
    </div>
    `
})
export class ShapeInputComponent {
    @Input()
    shape: string = "user";
    @Input()
    placeholder: string = "";
    @Input()
    width: string = "300px";
    @Input()
    type: string = "text";  

    hasFocus: boolean = false;
    color: string = "inherit";

    onBlur() {
        this.color = "inherit";
    }

    onFocus() {
        this.color = "#005C9B";
    }
}