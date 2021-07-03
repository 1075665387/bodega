import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodega.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-envio',
  templateUrl: './listar-envio.component.html',
  styleUrls: ['./listar-envio.component.css']
})
export class ListarEnvioComponent implements OnInit {
  envios: any = [];

  constructor(private formBuilder: FormBuilder,
    private servi: BodegaService,
    Router: Router) { }

    listarEnvio() {
      //console.log("22");
      
      this.servi.getListarEnvio().subscribe((data: {cenvio: []}) => {this.envios = data;}, error => {console.error(error + " ")});
      
      
     // console.log("23");
  } 

  ngOnInit() {
  }

}
