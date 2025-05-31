import { Routes } from '@angular/router';
import { InicioComponent } from '../features/componentes/inicio/inicio.component';
import { FestivoComponent } from '../features/componentes/festivo/festivo.component';
import { FestivoFechaComponent } from '../features/componentes/festivo-fecha/festivo-fecha.component';

export const routes: Routes = [
    {path:"", redirectTo: "inicio", pathMatch: "full"},
    {path:"inicio", component : InicioComponent},
    {path:"festivos", component : FestivoComponent},
    {path:"fechaFestivos", component : FestivoFechaComponent}

];
