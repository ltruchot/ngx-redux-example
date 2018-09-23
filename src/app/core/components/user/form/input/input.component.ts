import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html'
})
export class InputComponent {
  @Input()
  label: string;
  @Input()
  name: string;
  @Input()
  value: string;
  @Output()
  changed: EventEmitter<{ field: string; value: string }> = new EventEmitter();

  valueChanged(val: string) {
    this.changed.emit({ field: this.name, value: val });
  }
}
