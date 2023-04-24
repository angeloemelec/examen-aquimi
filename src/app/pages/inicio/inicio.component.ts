import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombre = 'Angelo';
  apellido = 'Quimi';
  loadingVisible = false;
  formUsuario!: FormGroup;
  formEmpleado!: FormGroup;

  constructor(private  ruta: Router,
    private mensajes: MessageService,
    private serviceEmpleado: EmpleadoService){
 
  }

  ngOnInit(): void {
    //this.buidFormulario();
    this.buidEmpleado();
  }

  visualizarLoading(){
    this.loadingVisible = true;

    setTimeout(()=> {this.loadingVisible = false},2000);
  }

  irPaginaTabla(){
  this.ruta.navigate(['tabla']);
  }

  buidFormulario()
  {
    this.formUsuario = new FormGroup(
      {
        nombre: new FormControl('',[Validators.required]),
        apellido: new FormControl('',[Validators.required])
      }
    );
  }


  buidEmpleado()
  {
    this.formEmpleado = new FormGroup(
      {
        name: new FormControl('',[Validators.required]),
        salary: new FormControl('',[Validators.required]),
        age: new FormControl('',[Validators.required])
      }
    );
  }

  verificar()
  {
    console.log(this.formUsuario);
    if(this.formUsuario.valid)
    {
      this.mensajes.add({ severity: 'success', summary: 'Sastifactorio', detail: 'Exito' })
    }
    else{
      this.mensajes.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema' });
    }
  }

  verificarEmpleado()
  {
    console.log(this.formEmpleado);
    if(this.formEmpleado.valid)
    {
      this.crearEmpleado();
    }
    else{
      this.mensajes.add({ severity: 'error', summary: 'Error', detail: 'Hubo un problema' });
    }
  }

  crearEmpleado(){
    this.serviceEmpleado.createEmployee(this.formEmpleado.value.name,
                                        this.formEmpleado.value.salary,
                                        this.formEmpleado.value.age).subscribe({
                                          next: (data)=>{
                                            console.log(data);
                                            this.formEmpleado.reset();
                                            this.mensajes.add({ severity: 'success', summary: 'Empleado creado con exito', detail: 'Exito' })
                                          },
                                          error:(data)=>{
                                            console.log(data);
                                            this.mensajes.add({ severity: 'error', summary: 'Error', detail: 'Hubo un error' });
                                          }
                                        });
  }

}


