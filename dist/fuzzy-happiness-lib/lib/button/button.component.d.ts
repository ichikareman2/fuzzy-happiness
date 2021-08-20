import { OnDestroy } from '@angular/core';
import { Color } from '../models/mode.model';
import * as i0 from "@angular/core";
export declare class ButtonComponent implements OnDestroy {
    /** subject to signal that component is being disposed of */
    private onDestroy$;
    private libButtonSubject;
    set color(value: Color);
    class: string;
    state$: import("rxjs").Observable<{
        color: Color | undefined;
    }>;
    btnClass$: import("rxjs").Observable<"" | "bg-blue-600 active:bg-blue-800 hover:bg-blue-500 text-white" | "bg-gray-600 active:bg-gray-800 hover:bg-gray-500 text-white" | "bg-red-600 active:bg-red-800 hover:bg-red-500 text-white" | "bg-yellow-600 active:bg-yellow-800 hover:bg-yellow-500 text-white" | "bg-green-600 active:bg-green-800 hover:bg-green-500 text-white" | "bg-white active:bg-white hover:bg-white-100 text-black" | "bg-gray-900 active:bg-black hover:bg-black-bg-gray-700 text-white">;
    constructor();
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "[lib-button]", never, { "color": "lib-button"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=button.component.d.ts.map