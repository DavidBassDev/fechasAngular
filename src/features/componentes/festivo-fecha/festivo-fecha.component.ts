import { Component, OnInit } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { ColumnMode, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatDialog } from '@angular/material/dialog';
import { Festivo } from '../../../shared/entidades/festivo';
import { FestivoService } from '../../../core/servicios/festivo.service';

@Component({
  selector: 'app-festivo-fecha',
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule,
  ],
  templateUrl: './festivo-fecha.component.html',
  styleUrl: './festivo-fecha.component.css'
})
export class FestivoFechaComponent {

  public festivos: Festivo[]=[];
  public fechaIngresada: string = "";





constructor(private festivoServicio: FestivoService,
    public dialogoServicio: MatDialog,

  ) { }


    
fechaSeleccionada: Date | null = null;

comprobarFecha() {
  if (!this.fechaSeleccionada) {
    alert("Seleccione una fecha para validarla");
    return;
  }

  const dia = this.fechaSeleccionada.getDate().toString().padStart(2, '0');
  const mes = (this.fechaSeleccionada.getMonth() + 1).toString().padStart(2, '0');
  const year = this.fechaSeleccionada.getFullYear().toString();

  
  this.fechaIngresada = `${dia}-${mes}-${year}`;

 

  this.festivoServicio.comprobarFecha(this.fechaIngresada).subscribe({
    next: (respuesta) => {
     window.alert(respuesta)
    },
    error: (error) => {
      console.error('Error al validar fecha:', error);
      alert('error al validar la fecha.');
    }
  });
  
}

  public agregar () {}
  public modificar () {}
  public eliminar () {}

}
