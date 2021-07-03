import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodega.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculo.component.html',
  styleUrls: ['./listar-vehiculo.component.css']
})
export class ListarVehiculoComponent implements OnInit {
  vehiculos: any = [];

  constructor(private formBuilder: FormBuilder,
    private servi: BodegaService,
    Router: Router) { }

    listarVehiculo() {
      //console.log("22");
      
      this.servi.getListarVehiculo().subscribe((data: {vehiculo: []}) => {this.vehiculos = data;}, error => {console.error(error + " ")});
      
      
     // console.log("23");
  }  

  ngOnInit() {
  }

}
