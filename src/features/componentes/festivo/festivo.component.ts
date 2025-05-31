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
      name: "Id", prop: "id"
    },
    {
      name: "Nombre", prop: "nombre"
    },
    {
      name: "Dia", prop: "dia"
    },
    {
      name: "Mes", prop: "mes"
    },
    {
      name: "Tipo", prop: "idtipo"
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
      alert('Por favor, ingresa un año válido');
      return;
    }
  
    this.festivoServicio.listarFestivos(this.busquedaYear).subscribe({
      next: (response) => {
        this.festivos = response;
      },
      error: (error) => {
        console.error('Error al obtener festivos:', error);
        alert('No se pudo obtener los festivos');
      }
    });
  }
  

  public agregar () {}
  public modificar () {}
  public eliminar () {}

}
