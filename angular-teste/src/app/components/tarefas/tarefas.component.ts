import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faEdit, faWindowClose} from "@fortawesome/free-solid-svg-icons";
import {TarefaComponent} from "../tarefa/tarefa.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [
    FaIconComponent,
    TarefaComponent,
    NgForOf
  ],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {

  protected readonly faEdit = faEdit;
  protected readonly faWindowClose = faWindowClose;

  tarefas: string[] = [
    'Estudar React',
    'Estudar Angular'
  ];

  deleteTask(tarefa: string) {
    this.tarefas.splice(this.tarefas.indexOf(tarefa), 1);
  }

  editTask(tarefa: string) {
    this.tarefas[this.tarefas.indexOf(tarefa)] = tarefa;
  }
}
