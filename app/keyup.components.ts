

import { Component } from '@angular/core';
@Component({
  selector: 'key-up1',
  template:`
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
    `
})
export class KeyUpComponent_v1 {
  values = '';

  onKey(event:any) { // without type info
    this.values += event.target.value + ' | ';
  }
}
