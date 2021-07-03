import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodega.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-conductor',
  templateUrl: './modificar-conductor.component.html',
  styleUrls: ['./modificar-conductor.component.css']
})
export class ModificarConductorComponent implements OnInit {

  filtrarCon2: FormGroup;
  filtrocon2: any = [];

  constructor(private formBuilder: FormBuilder,
    private servi: BodegaService,
    Router: Router) { }

    public filtrarConductor2(id) {

      var filtro = this.filtrarCon2.getRawValue()['textfiltrocon2'];
  
      this.servi.getFiltrarConductor2('/' + filtro).subscribe((data: {}) => {this.filtrocon2 = data;}, error => {console.log(error)});
      
    }

    public modificarConductor() {
      var filtro2 = this.filtrarCon2.getRawValue()['textfiltrocon2'];
      var tipodocu = this.filtrarCon2.getRawValue()['texttipodocu2'];
      var numerodocu= this.filtrarCon2.getRawValue()['textnumerodocu2'];
      var pnombre = this.filtrarCon2.getRawValue()['textpnombre2'];
      var snombre = this.filtrarCon2.getRawValue()['textsnombre2'];
      var papellido = this.filtrarCon2.getRawValue()['textpapellido2'];
      var sapellido = this.filtrarCon2.getRawValue()['textsapellido2'];
      var direccion = this.filtrarCon2.getRawValue()['textdireccion2'];
      var telefono = this.filtrarCon2.getRawValue()['texttelefono2'];
      var licencia = this.filtrarCon2.getRawValue()['textlicencia2'];
      var venci = this.filtrarCon2.getRawValue()['textvenci2'];
      var estadoC = this.filtrarCon2.getRawValue()['textestadoC2'];
  
      var cadena = {"id_conductor":filtro2,"id_tipo_documento":tipodocu,"numero_documento":numerodocu,
      "primer_nombre":pnombre,"segundo_nombre":snombre,
      "primer_apellido":papellido,"segundo_apellido":sapellido,
      "direccion":direccion,"numero_telefono":telefono,
      "numero_licencia":licencia,"fecha_venci_licencia":venci,
      "estado":estadoC};
  
      this.servi.updateConductor(cadena).then
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

    this.filtrarCon2 = this.formBuilder.group(
      {
        textfiltrocon2: [],
        texttipodocu2: [],
        textnumerodocu2: [],
        textpnombre2: [],
        textsnombre2: [],
        textpapellido2: [],
        textsapellido2: [],
        textdireccion2:[],
        texttelefono2: [],
        textlicencia2: [],
        textvenci2:[],
        textestadoC2: []
      }); 
      this.formBuilder.group
  }
  

}
