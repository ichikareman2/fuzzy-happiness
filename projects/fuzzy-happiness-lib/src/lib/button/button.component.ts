import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
  // host: {'class': 'someClass1'}
})
export class ButtonComponent implements OnInit {

  // @Input()
  @Output() onClick = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {}

}
