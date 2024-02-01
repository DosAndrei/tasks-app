import { Component } from '@angular/core';
import { Task } from '../models/task';
import { State } from '../models/state';
import { TaskComponent } from '../task/task.component';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskComponent, FiltersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  isTableView = false;
  selectedStateFilter = null;

  receiveFilter(event: any){
    this.selectedStateFilter = event;
  }

  switchView(){
    this.isTableView = !this.isTableView;
  }
}
