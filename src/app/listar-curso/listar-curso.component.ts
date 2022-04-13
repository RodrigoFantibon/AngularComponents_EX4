
import { Component, Input } from '@angular/core';

@Component({
  selector: 'listar-curso',
  templateUrl: './listar-curso.component.html'
})
export class ListarCursoComponent {
  
  @Input () cursoArray = []
  
}
