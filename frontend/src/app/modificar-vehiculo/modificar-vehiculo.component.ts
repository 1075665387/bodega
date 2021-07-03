import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodega.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-vehiculo',
  templateUrl: './modificar-vehiculo.component.html',
  styleUrls: ['./modificar-vehiculo.component.css']
})
export class ModificarVehiculoComponent implements OnInit {

  filtrarveh2: FormGroup;
  filtrov2: any = [];

  constructor(private formBuilder: FormBuilder,
    private servi: BodegaService,
    Router: Router) { }

  public filtrarVehiculo2(id) {

      var filtro = this.filtrarveh2.getRawValue()['textfiltrov2'];
  
      this.servi.getFiltrarVehiculo2('/' + filtro).subscribe((data: {}) => {this.filtrov2 = data;}, error => {console.log(error)});
      
  }
  public modificarVehiculo() {
    var filtro2 = this.filtrarveh2.getRawValue()['textfiltrov2'];
    var tipo = this.filtrarveh2.getRawValue()['texttipo2'];
      var marcaV = this.filtrarveh2.getRawValue()['textmarcaV2'];
      var color = this.filtrarveh2.getRawValue()['textcolor2'];
      var modelo = this.filtrarveh2.getRawValue()['textmodelo2'];
      var placa = this.filtrarveh2.getRawValue()['textplaca2'];
      var capacidad = this.filtrarveh2.getRawValue()['textcapacidad2'];
      var conductor = this.filtrarveh2.getRawValue()['textconductor2'];
      var estadoV = this.filtrarveh2.getRawValue()['textestadoV2'];

      var cadena = {"id_vehiculo":filtro2,"id_tipo_vehiculo":tipo,"id_marca_vehiculo":marcaV,
      "id_color":color,"modelo_vehiculo":modelo,
      "placa_vehiculo":placa,"capacidad_en_Tn":capacidad,"id_conductor":conductor,"estado":estadoV};

    this.servi.updateVehiculo(cadena).then
      (
        res => {
          console.log("res",res)
          
        }
      ).catch(err => {
        console.log(err)
        
      })

      alert("registro modificado");
  } 

  ngOnInit() {
    this.filtrarveh2 = this.formBuilder.group(
      {
        textfiltrov2: [],
        texttipo2: [],
        textmarcaV2: [],
        textcolor2: [],
        textmodelo2: [],
        textplaca2: [],
        textcapacidad2: [],
        textconductor2:[],
        textestadoV2: []
      }); 
      this.formBuilder.group
  }

}
