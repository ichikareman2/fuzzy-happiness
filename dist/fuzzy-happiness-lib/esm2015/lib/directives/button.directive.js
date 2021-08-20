import { Directive, HostBinding, Input } from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class ButtonDirective {
    constructor(elemRef, renderer) {
        // this.state$.pipe(
        //   takeUntil(this.onDestroy$)
        // ).subscribe(x => {
        this.elemRef = elemRef;
        this.renderer = renderer;
        this.onDestroy$ = new Subject();
        this.libButtonSubject = new BehaviorSubject(undefined);
        this.class = '';
        this.state$ = combineLatest([
            this.libButtonSubject
        ]).pipe(map(([color]) => ({
            color
        })));
        this.btnClass$ = this.state$.pipe(map(state => {
            switch (state.color) {
                case 'blue':
                    return 'bg-blue-600 active:bg-blue-800 hover:bg-blue-500 text-white';
                case 'gray':
                    return 'bg-gray-600 active:bg-gray-800 hover:bg-gray-500 text-white';
                case 'red':
                    return 'bg-red-600 active:bg-red-800 hover:bg-red-500 text-white';
                case 'yellow':
                    return 'bg-yellow-600 active:bg-yellow-800 hover:bg-yellow-500 text-white';
                case 'green':
                    return 'bg-green-600 active:bg-green-800 hover:bg-green-500 text-white';
                case 'white':
                    return 'bg-white-600 active:bg-white-800 hover:bg-white-500 text-black';
                case 'black':
                    return 'bg-black-600 active:bg-black-800 hover:bg-black-500 text-white';
                default: return '';
            }
        }));
        // })
        this.btnClass$.pipe(takeUntil(this.onDestroy$)).subscribe(x => {
            this.class = x;
            console.log(x);
        });
        // elemRef.nativeElement
    }
    set libButton(value) {
        this.libButtonSubject.next(value);
    }
    ngOnDestroy() {
        this.onDestroy$.next(true);
        this.onDestroy$.complete();
        this.onDestroy$.unsubscribe();
    }
}
ButtonDirective.ɵfac = function ButtonDirective_Factory(t) { return new (t || ButtonDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
ButtonDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ButtonDirective, selectors: [["", "libButton2", ""]], hostVars: 2, hostBindings: function ButtonDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassMap(ctx.class);
    } }, inputs: { libButton: "libButton" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonDirective, [{
        type: Directive,
        args: [{
                selector: '[libButton2]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { libButton: [{
            type: Input
        }], class: [{
            type: HostBinding,
            args: ['class']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Z1enp5LWhhcHBpbmVzcy1saWIvc3JjL2xpYi9kaXJlY3RpdmVzL2J1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxXQUFXLEVBQUUsS0FBSyxFQUFrRCxNQUFNLGVBQWUsQ0FBQztBQUMxSCxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTs7QUFNL0MsTUFBTSxPQUFPLGVBQWU7SUFxQzFCLFlBQ1UsT0FBbUIsRUFDbkIsUUFBbUI7UUFFM0Isb0JBQW9CO1FBQ3BCLCtCQUErQjtRQUMvQixxQkFBcUI7UUFMYixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVc7UUF0Q3JCLGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ2pDLHFCQUFnQixHQUFHLElBQUksZUFBZSxDQUFvQixTQUFTLENBQUMsQ0FBQztRQUt2RCxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWpDLFdBQU0sR0FBRyxhQUFhLENBQUM7WUFDckIsSUFBSSxDQUFDLGdCQUFnQjtTQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDeEIsS0FBSztTQUNOLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFTCxjQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQzFCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNWLFFBQU8sS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDbEIsS0FBSyxNQUFNO29CQUNULE9BQU8sNkRBQTZELENBQUM7Z0JBQ3ZFLEtBQUssTUFBTTtvQkFDVCxPQUFPLDZEQUE2RCxDQUFDO2dCQUN2RSxLQUFLLEtBQUs7b0JBQ1IsT0FBTywwREFBMEQsQ0FBQztnQkFDcEUsS0FBSyxRQUFRO29CQUNYLE9BQU8sbUVBQW1FLENBQUM7Z0JBQzdFLEtBQUssT0FBTztvQkFDVixPQUFPLGdFQUFnRSxDQUFDO2dCQUMxRSxLQUFLLE9BQU87b0JBQ1YsT0FBTyxnRUFBZ0UsQ0FBQztnQkFDMUUsS0FBSyxPQUFPO29CQUNWLE9BQU8sZ0VBQWdFLENBQUM7Z0JBQzFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3BCO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQTtRQVVDLEtBQUs7UUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzVELElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztRQUNILHdCQUF3QjtJQUMxQixDQUFDO0lBaERELElBQWEsU0FBUyxDQUFDLEtBQVk7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBK0NELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7OEVBeERVLGVBQWU7a0VBQWYsZUFBZTs7O3VGQUFmLGVBQWU7Y0FIM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2FBQ3pCO3FGQUljLFNBQVM7a0JBQXJCLEtBQUs7WUFJZ0IsS0FBSztrQkFBMUIsV0FBVzttQkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycydcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAnLi4vbW9kZWxzL21vZGUubW9kZWwnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbGliQnV0dG9uMl0nXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgb25EZXN0cm95JCA9IG5ldyBTdWJqZWN0PHRydWU+KCk7XG4gIHByaXZhdGUgbGliQnV0dG9uU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q29sb3IgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIEBJbnB1dCgpIHNldCBsaWJCdXR0b24odmFsdWU6IENvbG9yKSB7XG4gICAgdGhpcy5saWJCdXR0b25TdWJqZWN0Lm5leHQodmFsdWUpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGNsYXNzID0gJyc7XG5cbiAgc3RhdGUkID0gY29tYmluZUxhdGVzdChbXG4gICAgdGhpcy5saWJCdXR0b25TdWJqZWN0XG4gIF0pLnBpcGUobWFwKChbY29sb3JdKSA9PiAoe1xuICAgIGNvbG9yXG4gIH0pKSk7XG5cbiAgYnRuQ2xhc3MkID0gdGhpcy5zdGF0ZSQucGlwZShcbiAgICBtYXAoc3RhdGUgPT4ge1xuICAgICAgc3dpdGNoKHN0YXRlLmNvbG9yKSB7XG4gICAgICAgIGNhc2UgJ2JsdWUnOlxuICAgICAgICAgIHJldHVybiAnYmctYmx1ZS02MDAgYWN0aXZlOmJnLWJsdWUtODAwIGhvdmVyOmJnLWJsdWUtNTAwIHRleHQtd2hpdGUnO1xuICAgICAgICBjYXNlICdncmF5JzpcbiAgICAgICAgICByZXR1cm4gJ2JnLWdyYXktNjAwIGFjdGl2ZTpiZy1ncmF5LTgwMCBob3ZlcjpiZy1ncmF5LTUwMCB0ZXh0LXdoaXRlJztcbiAgICAgICAgY2FzZSAncmVkJzpcbiAgICAgICAgICByZXR1cm4gJ2JnLXJlZC02MDAgYWN0aXZlOmJnLXJlZC04MDAgaG92ZXI6YmctcmVkLTUwMCB0ZXh0LXdoaXRlJztcbiAgICAgICAgY2FzZSAneWVsbG93JzpcbiAgICAgICAgICByZXR1cm4gJ2JnLXllbGxvdy02MDAgYWN0aXZlOmJnLXllbGxvdy04MDAgaG92ZXI6YmcteWVsbG93LTUwMCB0ZXh0LXdoaXRlJztcbiAgICAgICAgY2FzZSAnZ3JlZW4nOlxuICAgICAgICAgIHJldHVybiAnYmctZ3JlZW4tNjAwIGFjdGl2ZTpiZy1ncmVlbi04MDAgaG92ZXI6YmctZ3JlZW4tNTAwIHRleHQtd2hpdGUnO1xuICAgICAgICBjYXNlICd3aGl0ZSc6XG4gICAgICAgICAgcmV0dXJuICdiZy13aGl0ZS02MDAgYWN0aXZlOmJnLXdoaXRlLTgwMCBob3ZlcjpiZy13aGl0ZS01MDAgdGV4dC1ibGFjayc7XG4gICAgICAgIGNhc2UgJ2JsYWNrJzpcbiAgICAgICAgICByZXR1cm4gJ2JnLWJsYWNrLTYwMCBhY3RpdmU6YmctYmxhY2stODAwIGhvdmVyOmJnLWJsYWNrLTUwMCB0ZXh0LXdoaXRlJztcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH0pXG4gIClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1SZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIC8vIHRoaXMuc3RhdGUkLnBpcGUoXG4gICAgLy8gICB0YWtlVW50aWwodGhpcy5vbkRlc3Ryb3kkKVxuICAgIC8vICkuc3Vic2NyaWJlKHggPT4ge1xuXG4gICAgLy8gfSlcbiAgICB0aGlzLmJ0bkNsYXNzJC5waXBlKHRha2VVbnRpbCh0aGlzLm9uRGVzdHJveSQpKS5zdWJzY3JpYmUoeCA9PiB7XG4gICAgICB0aGlzLmNsYXNzID0geDtcbiAgICAgIGNvbnNvbGUubG9nKHgpO1xuICAgIH0pO1xuICAgIC8vIGVsZW1SZWYubmF0aXZlRWxlbWVudFxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMub25EZXN0cm95JC5uZXh0KHRydWUpO1xuICAgIHRoaXMub25EZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIHRoaXMub25EZXN0cm95JC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=