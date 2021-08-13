(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('fuzzy-hapiness-lib', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['fuzzy-hapiness-lib'] = {}, global.ng.core));
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

    var FuzzyHapinessLibService = /** @class */ (function () {
        function FuzzyHapinessLibService() {
        }
        return FuzzyHapinessLibService;
    }());
    FuzzyHapinessLibService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FuzzyHapinessLibService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    FuzzyHapinessLibService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FuzzyHapinessLibService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FuzzyHapinessLibService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var FuzzyHapinessLibComponent = /** @class */ (function () {
        function FuzzyHapinessLibComponent() {
        }
        FuzzyHapinessLibComponent.prototype.ngOnInit = function () {
        };
        return FuzzyHapinessLibComponent;
    }());
    FuzzyHapinessLibComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FuzzyHapinessLibComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    FuzzyHapinessLibComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: FuzzyHapinessLibComponent, selector: "lib-fuzzy-hapiness-lib", ngImport: i0__namespace, template: "\n    <p>\n      fuzzy-hapiness-lib works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FuzzyHapinessLibComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-fuzzy-hapiness-lib',
                        template: "\n    <p>\n      fuzzy-hapiness-lib works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var FuzzyHapinessLibModule = /** @class */ (function () {
        function FuzzyHapinessLibModule() {
        }
        return FuzzyHapinessLibModule;
    }());
    FuzzyHapinessLibModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FuzzyHapinessLibModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    FuzzyHapinessLibModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FuzzyHapinessLibModule, declarations: [FuzzyHapinessLibComponent], exports: [FuzzyHapinessLibComponent] });
    FuzzyHapinessLibModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FuzzyHapinessLibModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0__namespace, type: FuzzyHapinessLibModule, decorators: [{
                type: i0.NgModule,
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

    exports.FuzzyHapinessLibComponent = FuzzyHapinessLibComponent;
    exports.FuzzyHapinessLibModule = FuzzyHapinessLibModule;
    exports.FuzzyHapinessLibService = FuzzyHapinessLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fuzzy-hapiness-lib.umd.js.map
