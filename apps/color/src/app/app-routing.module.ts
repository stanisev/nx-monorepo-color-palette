import { GeneratorComponent } from './generator/generator.component';
import { SavedComponent } from './saved/saved.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', component: GeneratorComponent },
  { path: 'saved', component: SavedComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
