import { Component, OnInit } from '@angular/core';
import { ArticuloFamilia } from '../../models/ArticuloFamilia';
import {MockArticulosFamiliasService} from "../mock-articulos-familias.service";
import{ArticulosFamiliasService} from "../articulos-familias.service";

@Component({
  selector: 'app-articulos-familias',
  templateUrl: './articulos-familias.component.html',
  styleUrls: ['./articulos-familias.component.css']
})

export class ArticulosFamiliasComponent implements OnInit {
  Items : ArticuloFamilia[] = [];
  Titulo = "Articulos Familias"

  constructor(
    // private articulosFamiliasService: MockArticulosFamiliasService,
    private articulosfamiliasService: ArticulosFamiliasService) { }

  ngOnInit() {
    this.getArticulosFamilia();
  }

  getArticulosFamilia(){
    this.articulosfamiliasService.get()
    .subscribe((res:ArticuloFamilia[])=>{
      this.Items = res;
    });
  }

}