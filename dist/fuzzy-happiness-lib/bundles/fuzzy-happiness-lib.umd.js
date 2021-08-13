(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('fuzzy-happiness-lib', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['fuzzy-happiness-lib'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var FuzzyHappinessLibService = /** @class */ (function () {
        function FuzzyHappinessLibService() {
        }
        return FuzzyHappinessLibService;
    }());
    FuzzyHappinessLibService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FuzzyHappinessLibService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FuzzyHappinessLibService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FuzzyHappinessLibService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FuzzyHappinessLibService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var FuzzyHappinessLibComponent = /** @class */ (function () {
        function FuzzyHappinessLibComponent() {
        }
        FuzzyHappinessLibComponent.prototype.ngOnInit = function () {
        };
        return FuzzyHappinessLibComponent;
    }());
    FuzzyHappinessLibComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FuzzyHappinessLibComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    FuzzyHappinessLibComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: FuzzyHappinessLibComponent, selector: "lib-fuzzy-happiness-lib", ngImport: i0__namespace, template: "\n    <p>\n      fuzzy-happiness-lib works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FuzzyHappinessLibComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-fuzzy-happiness-lib',
                        template: "\n    <p>\n      fuzzy-happiness-lib works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var FuzzyHappinessLibModule = /** @class */ (function () {
        function FuzzyHappinessLibModule() {
        }
        return FuzzyHappinessLibModule;
    }());
    FuzzyHappinessLibModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FuzzyHappinessLibModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    FuzzyHappinessLibModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FuzzyHappinessLibModule, declarations: [FuzzyHappinessLibComponent], exports: [FuzzyHappinessLibComponent] });
    FuzzyHappinessLibModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FuzzyHappinessLibModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FuzzyHappinessLibModule, decorators: [{
                type: i0.NgModule,
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

    exports.FuzzyHappinessLibComponent = FuzzyHappinessLibComponent;
    exports.FuzzyHappinessLibModule = FuzzyHappinessLibModule;
    exports.FuzzyHappinessLibService = FuzzyHappinessLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fuzzy-happiness-lib.umd.js.map
