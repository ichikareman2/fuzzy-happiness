import { ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { Color } from '../models/mode.model';
import * as i0 from "@angular/core";
export declare class ButtonDirective implements OnDestroy {
    private elemRef;
    private renderer;
    private onDestroy$;
    private libButtonSubject;
    set libButton(value: Color);
    class: string;
    state$: import("rxjs").Observable<{
        color: Color | undefined;
    }>;
    btnClass$: import("rxjs").Observable<"" | "bg-blue-600 active:bg-blue-800 hover:bg-blue-500 text-white" | "bg-gray-600 active:bg-gray-800 hover:bg-gray-500 text-white" | "bg-red-600 active:bg-red-800 hover:bg-red-500 text-white" | "bg-yellow-600 active:bg-yellow-800 hover:bg-yellow-500 text-white" | "bg-green-600 active:bg-green-800 hover:bg-green-500 text-white" | "bg-white-600 active:bg-white-800 hover:bg-white-500 text-black" | "bg-black-600 active:bg-black-800 hover:bg-black-500 text-white">;
    constructor(elemRef: ElementRef, renderer: Renderer2);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ButtonDirective, "[libButton2]", never, { "libButton": "libButton"; }, {}, never>;
}
//# sourceMappingURL=button.directive.d.ts.map