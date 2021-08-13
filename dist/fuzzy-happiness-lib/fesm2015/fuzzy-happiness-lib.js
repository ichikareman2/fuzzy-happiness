import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class FuzzyHappinessLibService {
    constructor() { }
}
FuzzyHappinessLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FuzzyHappinessLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FuzzyHappinessLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FuzzyHappinessLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FuzzyHappinessLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class FuzzyHappinessLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
FuzzyHappinessLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FuzzyHappinessLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FuzzyHappinessLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: FuzzyHappinessLibComponent, selector: "lib-fuzzy-happiness-lib", ngImport: i0, template: `
    <p>
      fuzzy-happiness-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FuzzyHappinessLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-fuzzy-happiness-lib',
                    template: `
    <p>
      fuzzy-happiness-lib works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class FuzzyHappinessLibModule {
}
FuzzyHappinessLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FuzzyHappinessLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FuzzyHappinessLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FuzzyHappinessLibModule, declarations: [FuzzyHappinessLibComponent], exports: [FuzzyHappinessLibComponent] });
FuzzyHappinessLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FuzzyHappinessLibModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FuzzyHappinessLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FuzzyHappinessLibComponent
                    ],
                    imports: [],
                    exports: [
                        FuzzyHappinessLibComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of fuzzy-happiness-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FuzzyHappinessLibComponent, FuzzyHappinessLibModule, FuzzyHappinessLibService };
//# sourceMappingURL=fuzzy-happiness-lib.js.map
