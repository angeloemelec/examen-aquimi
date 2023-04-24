import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IDataEmpleado } from 'src/app/interfaces/empleadosIntefaces';
import { EmpleadoService } from 'src/app/services/empleado.service';

import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css']
})
export class PaginaTablaComponent implements OnInit {
  listEmpleado: IDataEmpleado[] = [];
  loading = false;
columnTabla: any;



  constructor(private rutas: Router,
              private empleadoServices: EmpleadoService,
              private mensajes: MessageService){

  }
  ngOnInit(): void {
    this.iniColumnaTabla();
    console.log('Hola estoy aqui desde el ngOnInit');
    this.loading = true;
  
    
    this.empleadoServices.getAllEmployee().subscribe(
      {
        next: (datos) => {
          console.log(datos);
          this.listEmpleado = datos.data;
          this.loading = false;
          this.mensajes.add({ severity: 'success', summary: 'Sastifactorio', detail: 'Exito' });
        },
        error: (err) => {
          console.log(err);
          this.loading = false;
          this.mensajes.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema' });
        }
      }
    );
  }

  

  iniColumnaTabla()
  {
    this.columnTabla = [
    {
      field: 'id', header: 'ID'
    },
    {
      field: 'name', header: 'NOMBRE EMPLEADO'
    },
    {
      field: 'salary', header: 'SALARIO EPLEADO'
    },
    {
      field: 'age', header: 'EDAD'
    }
    ];
  }

 

  regresarInicio(){
    this.rutas.navigate(['Inicio']);
  }

}
