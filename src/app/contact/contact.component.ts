import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  datosFormulario = { nombre: '', correo: '', mensaje: '' };

  constructor(private titleService: Title) {
    this.titleService.setTitle('Paulo Martinez - Contact');
  }

  enviarFormulario() {
    // Puedes agregar lógica adicional aquí si es necesario
    console.log('Enviando formulario:', this.datosFormulario);
  }
}

