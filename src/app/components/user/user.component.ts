import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private id:number;
  private name:string;
  private age:number;

  constructor(private ruta: ActivatedRoute) {
    //Inicializamos los atributos 
    this.id = 0;
    this.name = "";
    this.age = 0;
  }

  ngOnInit(): void {
    this.ruta.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.name = params['nombre'];
      this.age = params['edad'];
    });
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }
}
