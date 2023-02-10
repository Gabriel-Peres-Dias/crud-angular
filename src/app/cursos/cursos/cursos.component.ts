import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../model/curso';
import { CursosService } from '../service/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit{

  cursos: Observable<Curso[]>;
  displayedColumns = ['nome', 'categoria'];

  constructor(private cursoService: CursosService) {
    this.cursos = this.cursoService.listar();
  }

  ngOnInit(): void {

  }

}
