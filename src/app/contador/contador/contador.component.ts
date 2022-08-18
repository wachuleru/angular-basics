import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `<h1>{{titulo}}</h1>
    <h2>La base es de <strong>{{base}}</strong></h2>
    <button (click)="acumular(base)">+{{base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-base)">-{{base}}</button>
    `,
    styleUrls:['../../app.component.css']
})
export class ContadorComponent{
    public titulo: string = 'Bases bablablba';
    numero:number=10;
    base:number=5;
    acumular(valor:number){
      this.numero+=valor>=0?(this.base):(-this.base);
    }
}