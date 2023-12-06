import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  datosFormulario={
    nombre: '',
    correo:'',
    mensaje:''
  };

  constructor(
    private titleService: Title,
    private projectsService: ProjectsService
    ){
    this.titleService.setTitle('Paulo Martinez - Contact')
  }

  enviarFormulario(){
    this.projectsService.enviarFormulario(this.datosFormulario).subscribe(
      (respuesta: any)=>{
        console.log('Mensaje enviado con exito', respuesta);
      },
      (error)=>{
        console.error('Error al enviar el mensaje', error)
      }
    );
  }


}
