import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodega.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-mercancia',
  templateUrl: './listar-mercancia.component.html',
  styleUrls: ['./listar-mercancia.component.css']
})
export class ListarMercanciaComponent implements OnInit {

  mercancias: any = [];

  constructor(private formBuilder: FormBuilder,
    private servi: BodegaService,
    Router: Router) { }

  listarMercancia() {
      //console.log("22");
      
      this.servi.getListarMercancia().subscribe((data: {mercancia: []}) => {this.mercancias = data;}, error => {console.error(error + " ")});
      
      
     // console.log("23");
  }

  ngOnInit() {
  }

}
