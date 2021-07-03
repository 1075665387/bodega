import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodega.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-destino',
  templateUrl: './listar-destino.component.html',
  styleUrls: ['./listar-destino.component.css']
})
export class ListarDestinoComponent implements OnInit {

  destinos: any = [];
  constructor(private formBuilder: FormBuilder,
    private servi: BodegaService,
    Router: Router) { }

    listarDestino() {
      //console.log("22");
      
      this.servi.getListarDestino().subscribe((data: {destino: []}) => {this.destinos = data;}, error => {console.error(error + " ")});
      
      
     // console.log("23");
  }

  ngOnInit() {
  }

}
