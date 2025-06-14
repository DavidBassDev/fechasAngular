import { Component, OnInit } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { ColumnMode, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';
import { Festivo } from '../../../shared/entidades/festivo';
import { FestivoService } from '../../../core/servicios/festivo.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-festivo',
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule,
  ],
  templateUrl: './festivo.component.html',
  styleUrl: './festivo.component.css'
})
export class FestivoComponent implements OnInit {

  public busquedaYear! : number;
  public festivos: Festivo[]=[];


  public columnas = [
    {
      name: "Nombre", prop: "nombre"
    },
    {
      name: "Fecha", prop: "fecha"
    }
  ];

  public modoColumna = ColumnMode;


constructor(private festivoServicio: FestivoService,
    public dialogoServicio: MatDialog,

  ) { }
  ngOnInit(): void {
    this.listarFestivos();
  } 

    
  public listarFestivos(): void {
    if (!this.busquedaYear) {

      return;
    }
  
    this.festivoServicio.listarFestivos(this.busquedaYear).subscribe({
      next: (response) => {
        this.festivos = response;
      },
      error: (error) => {
       
        alert('No se pudo obtener los festivos');
      }
    });
  }
  

  public agregar () {}
  public modificar () {}
  public eliminar () {}

}
