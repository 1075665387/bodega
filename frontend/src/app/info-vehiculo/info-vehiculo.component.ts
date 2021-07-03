import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodega.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-vehiculo',
  templateUrl: './info-vehiculo.component.html',
  styleUrls: ['./info-vehiculo.component.css']
})
export class InfoVehiculoComponent implements OnInit {

  infoVeh: FormGroup;
  infov: any = [];

  constructor(private formBuilder: FormBuilder,
    private servi: BodegaService,
    Router: Router) { }

    public infoVehiculo(datosf,d2) {

      var vehiculo = this.infoVeh.getRawValue()['textvehiculo'];
      var fecha1 = this.infoVeh.getRawValue()['textfecha11'];
      var fecha2 = this.infoVeh.getRawValue()['textfecha22'];
      
      this.servi.getInformeVeh('/' + vehiculo,fecha1,fecha2).subscribe((data: {}) => {this.infov = data;}, error => {console.log(error)});

    } 

  ngOnInit() {

    this.infoVeh = this.formBuilder.group(
      {
        textvehiculo: [],
        textfecha11:[],
        textfecha22:[]
      }); 
      this.formBuilder.group
  
  }

}
