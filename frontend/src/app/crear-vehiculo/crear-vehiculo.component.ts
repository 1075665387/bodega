import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodega.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {

  GrupocrearVehiculo: FormGroup;
  tipoVeh: any = [];
  marcaVeh: any = [];
  colorVeh: any = [];
  conductorVeh: any = [];

  constructor(private formBuilder: FormBuilder,
    private servi: BodegaService,
    Router: Router) { }

    public crearVehiculo(form:NgForm) {
      //console.log("31  Inserta");
      if(form.valid){
        var tipo = this.GrupocrearVehiculo.getRawValue()['texttipo'];
        var marcaV = this.GrupocrearVehiculo.getRawValue()['textmarcaV'];
        var color = this.GrupocrearVehiculo.getRawValue()['textcolor'];
        var modelo = this.GrupocrearVehiculo.getRawValue()['textmodelo'];
        var placa = this.GrupocrearVehiculo.getRawValue()['textplaca'];
        var capacidad = this.GrupocrearVehiculo.getRawValue()['textcapacidad'];
        var conductor = this.GrupocrearVehiculo.getRawValue()['textconductor'];
        var estadoV = this.GrupocrearVehiculo.getRawValue()['textestadoV'];
        
  
        //console.log("Td", datosvalo2,datosvalo3)
    
        var cadena = {"id_tipo_vehiculo":tipo,"id_marca_vehiculo":marcaV,
                      "id_color":color,"modelo_vehiculo":modelo,
                      "placa_vehiculo":placa,"capacidad_en_Tn":capacidad,"id_conductor":conductor,"estado":estadoV};
        
        //console.log(" 39 " + cadena);
    
        this.servi.crearVehiculo(cadena).then(res => {console.log(res)}).catch(err => 
          {console.log(err)});
  
          alert("registro creado");
      }else{
        alert("llenar todos los campos");
      }
      
    }

  ngOnInit() {
    this.GrupocrearVehiculo = this.formBuilder.group(
      {
        texttipo: ["",Validators.required],
        textmarcaV: ["",Validators.required],
        textcolor: ["",Validators.required],
        textmodelo: ["",Validators.required],
        textplaca: ["",Validators.required],
        textcapacidad: ["",Validators.required],
        textconductor:["",Validators.required],
        textestadoV: ["",Validators.required]
      });
      this.formBuilder.group

      //inicializamos de una vez para cargar el select
      this.servi.getListarTipoVeh().subscribe((data: {tipo_veh: []}) => {
        this.tipoVeh = data;},error => {console.error(error + " ")});

        //inicializamos de una vez para cargar el select
      this.servi.getListarMarcaVeh().subscribe((data: {marca_veh: []}) => {
        this.marcaVeh = data;},error => {console.error(error + " ")});

        //inicializamos de una vez para cargar el select
      this.servi.getListarColores().subscribe((data: {marca_veh: []}) => {
        this.colorVeh = data;},error => {console.error(error + " ")});

        //inicializamos de una vez para cargar el select
      this.servi.getListarCon().subscribe((data: {marca_veh: []}) => {
        this.conductorVeh = data;},error => {console.error(error + " ")});
  
  }

}
