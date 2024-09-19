import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faEdit, faWindowClose} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent {

  @Input() tarefa!: string;
  @Output() onDeleteTask = new EventEmitter();
  @Output() onEditTask = new EventEmitter();

  protected readonly faEdit = faEdit;
  protected readonly faWindowClose = faWindowClose;

  onDelete(tarefa: string) {
    this.onDeleteTask.emit(tarefa);
  }

  onEdit(tarefa: string) {
    this.onEditTask.emit(tarefa);
  }
}
