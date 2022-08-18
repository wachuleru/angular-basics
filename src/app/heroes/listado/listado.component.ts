import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','BlackWidow','Capitan America','Antman'];
  heroeBorrado:string='';
  borrarHeroe():void{
    this.heroeBorrado=this.heroes.pop() ||'';
  }
}
