import {Component, EventEmitter, Output} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FaIconComponent,
    FormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output() taskSubmit = new EventEmitter();

  protected readonly faPlus = faPlus;
  novaTarefa: string = '';

  formSubmit(novaTarefa: string) {
    this.taskSubmit.emit(novaTarefa);
  }
}
