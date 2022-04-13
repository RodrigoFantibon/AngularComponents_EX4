
import { Component } from '@angular/core';

@Component({
  selector: 'salvar-curso',
  templateUrl: './salvar-curso.component.html'
})
export class SalvarCursoComponent {
  curso = ''
  cargaHoraria = 0
  cursoArray = [{
    'nome_curso': 'NODEJS',
    'carga_horaria': 20
    },{
    'nome_curso': 'MONGODB',
    'carga_horaria': 40
    },{
    'nome_curso': 'MYSQL',
    'carga_horaria': 10
    },{
    'nome_curso': 'ANGULAR',
    'carga_horaria': 50
    },{
    'nome_curso': 'REACT',
    'carga_horaria': 23
}]

//   salvarCurso(){
//     this.cursoArray.push({
//         'nome_curso': this.curso,
//         'carga_horaria': this.cargaHoraria,
//     })
//   }
}
