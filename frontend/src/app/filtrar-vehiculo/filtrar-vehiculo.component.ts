import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodega.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtrar-vehiculo',
  templateUrl: './filtrar-vehiculo.component.html',
  styleUrls: ['./filtrar-vehiculo.component.css']
})
export class FiltrarVehiculoComponent implements OnInit {

  filtrarveh: FormGroup;
  filtrov: any = [];
  constructor(private formBuilder: FormBuilder,
    private servi: BodegaService,
    Router: Router) { }

    public filtrarVehiculo(id) {

      var filtro = this.filtrarveh.getRawValue()['textfiltrov'];
  
      this.servi.getFiltrarVehiculo('/' + filtro).subscribe((data: {}) => {this.filtrov = data;}, error => {console.log(error)});
      
    }

  ngOnInit() {

    this.filtrarveh = this.formBuilder.group(
      {
        textfiltrov: []
      }); 
      this.formBuilder.group
  }

}
