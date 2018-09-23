import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {
  @Input()
  label: string;
  @Input()
  name: string;
  @Input()
  value: string;
  @Output()
  changed: EventEmitter<{ field: string; value: string }> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  valueChanged(val: string) {
    this.changed.emit({ field: this.name, value: val });
  }
}
