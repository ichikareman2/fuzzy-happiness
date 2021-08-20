import { Component, Input, ChangeDetectionStrategy, HostBinding, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subject, BehaviorSubject, combineLatest } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Color } from '../../models/mode.model';



@Component({
  selector: '[lib-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css', '../../styles/tailwind.dev.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { 'class': 'p-2 rounded shadow-md active:shadow-none' }
})
export class ButtonComponent implements OnDestroy {
  /** subject to signal that component is being disposed of */
  private onDestroy$ = new Subject<true>();

  private libButtonSubject = new BehaviorSubject<Color | undefined>(undefined);
  @Input('lib-button') set color(value: Color) {
    this.libButtonSubject.next(value);
  }

  @HostBinding('class') class = '';

  state$ = combineLatest([
    this.libButtonSubject
  ]).pipe(map(([color]) => ({
    color
  })));

  btnClass$ = this.state$.pipe(
    map(state => {
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
          return 'bg-white active:bg-white hover:bg-white-100 text-black';
        case 'black':
          return 'bg-gray-900 active:bg-black hover:bg-black-bg-gray-700 text-white';
        default: return '';
      }
    })
  )

  constructor() {
    this.btnClass$.pipe(takeUntil(this.onDestroy$)).subscribe(x => {
      this.class = x;
    });
  }
  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
    this.onDestroy$.unsubscribe();
  }
}
