import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormComponent} from "./components/form/form.component";
import {TarefasComponent} from "./components/tarefas/tarefas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, TarefasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-teste';

  addTask(tarefa: string) {

  }
}
