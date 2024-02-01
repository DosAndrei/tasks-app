import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import {MatTable, MatTableModule} from '@angular/material/table';
import { State, StateLabelMapping } from '../models/state';
import { Task } from '../models/task';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule, MatSelectModule, MatTableModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnChanges{
  @ViewChild(MatTable) table: MatTable<Task>;
  public statusMapping = Object.values(StateLabelMapping);
  public displayedColumns: string[] = ['title', 'description', 'author', 'status'];
  @Input() tableView = false;
  @Input() selectedState = null;
  public tasks: Task[] = [
    {
      id: "1",
      title: "Title 1",
      description: "Something",
      author: "me",
      status: State.toDo
    },
    {
      id: "2",
      title: "Title 2",
      description: "doing",
      author: "me",
      status: State.inProgress
    },
    {
      id: "3",
      title: "Title 3",
      description: "done",
      author: "me",
      status: State.done
    },
    {
      id: "4",
      title: "Title 4",
      description: "not doing it anymore",
      author: "me",
      status: State.cancelled
    },
  ];

  public filteredTasks = this.tasks;

  ngOnChanges() {
    if (this.selectedState) {
      this.filteredTasks = this.tasks.filter(t => t.status === this.selectedState);
    }else{
      this.filteredTasks = this.tasks;
    }
  }

  deleteTask(taskId: string){
    var index = this.tasks.findIndex(t => t.id === taskId);
    this.tasks.splice(index, 1);
    if(!this.tableView){
      this.table.renderRows();
    }
  }
}
