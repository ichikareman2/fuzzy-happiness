import { Component, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class ButtonComponent {
    constructor() {
        // @Input()
        this.onClick = new EventEmitter();
    }
    ngOnInit() { }
}
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: ButtonComponent, selector: "lib-button", outputs: { onClick: "onClick" }, ngImport: i0, template: "<button type=\"button\" (click)=\"onClick.emit($event)\">\n  <ng-content></ng-content>\n</button>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-button',
                    templateUrl: './button.component.html',
                    styleUrls: ['./button.component.css']
                    // host: {'class': 'someClass1'}
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { onClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Z1enp5LWhhcHBpbmVzcy1saWIvc3JjL2xpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Z1enp5LWhhcHBpbmVzcy1saWIvc3JjL2xpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFReEUsTUFBTSxPQUFPLGVBQWU7SUFLMUI7UUFIQSxXQUFXO1FBQ0QsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7SUFFOUIsQ0FBQztJQUVqQixRQUFRLEtBQVUsQ0FBQzs7NEdBUFIsZUFBZTtnR0FBZixlQUFlLG1GQ1I1QixxR0FHQTsyRkRLYSxlQUFlO2tCQU4zQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixXQUFXLEVBQUUseUJBQXlCO29CQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztvQkFDckMsZ0NBQWdDO2lCQUNqQzswRUFJVyxPQUFPO3NCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5jc3MnXVxuICAvLyBob3N0OiB7J2NsYXNzJzogJ3NvbWVDbGFzczEnfVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vIEBJbnB1dCgpXG4gIEBPdXRwdXQoKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxufVxuIiwiPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uQ2xpY2suZW1pdCgkZXZlbnQpXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvYnV0dG9uPlxuIl19