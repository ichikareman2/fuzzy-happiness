import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class FuzzyHapinessLibService {
    constructor() { }
}
FuzzyHapinessLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FuzzyHapinessLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FuzzyHapinessLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FuzzyHapinessLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FuzzyHapinessLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class FuzzyHapinessLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
FuzzyHapinessLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FuzzyHapinessLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
FuzzyHapinessLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: FuzzyHapinessLibComponent, selector: "lib-fuzzy-hapiness-lib", ngImport: i0, template: `
    <p>
      fuzzy-hapiness-lib works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FuzzyHapinessLibComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-fuzzy-hapiness-lib',
                    template: `
    <p>
      fuzzy-hapiness-lib works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class FuzzyHapinessLibModule {
}
FuzzyHapinessLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FuzzyHapinessLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FuzzyHapinessLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FuzzyHapinessLibModule, declarations: [FuzzyHapinessLibComponent], exports: [FuzzyHapinessLibComponent] });
FuzzyHapinessLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FuzzyHapinessLibModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FuzzyHapinessLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        FuzzyHapinessLibComponent
                    ],
                    imports: [],
                    exports: [
                        FuzzyHapinessLibComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of fuzzy-hapiness-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FuzzyHapinessLibComponent, FuzzyHapinessLibModule, FuzzyHapinessLibService };
//# sourceMappingURL=fuzzy-hapiness-lib.js.map
