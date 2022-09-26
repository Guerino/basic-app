import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public nombre:string;
  public edad:number;

  constructor() {
    this.nombre = "juan";
    this.edad = 12;
  }

  ngOnInit(): void {
  }

}
