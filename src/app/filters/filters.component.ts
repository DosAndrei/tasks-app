import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { StateLabelMapping } from '../models/state';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  @Output() emitSelectedFilter = new EventEmitter<string>();
  @Output() emitViewSwitch = new EventEmitter();

  states = Object.values(StateLabelMapping);

  selectFilter(state: any) {
    this.emitSelectedFilter.emit(state);
  }

  switchView(){
    this.emitViewSwitch.emit();
  }
}
