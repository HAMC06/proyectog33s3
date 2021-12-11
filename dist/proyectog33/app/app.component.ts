import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyectog33';
  saludo='Bienvenidos a la empresa MISIONTIC 2022';
  variable1=3;
  variable2="44";
  registro={
    nombre:'',
    correo:'',
    mensaje:''
  }
  onRegister(){
    console.log(this.registro)
  }
}
