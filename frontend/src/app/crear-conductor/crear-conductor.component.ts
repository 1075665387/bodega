import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodega.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-crear-conductor',
  templateUrl: './crear-conductor.component.html',
  styleUrls: ['./crear-conductor.component.css']
})
export class CrearConductorComponent implements OnInit {
  GrupocrearConductor: FormGroup;
  tipDoc: any = [];


  constructor(private formBuilder: FormBuilder,
    private servi: BodegaService,
    Router: Router) { }

    public crearConductor(form:NgForm) {
      //console.log("31  Inserta");
      if(form.valid){
        var tipodocu = this.GrupocrearConductor.getRawValue()['texttipodocu'];
        var numerodocu= this.GrupocrearConductor.getRawValue()['textnumerodocu'];
        var pnombre = this.GrupocrearConductor.getRawValue()['textpnombre'];
        var snombre = this.GrupocrearConductor.getRawValue()['textsnombre'];
        var papellido = this.GrupocrearConductor.getRawValue()['textpapellido'];
        var sapellido = this.GrupocrearConductor.getRawValue()['textsapellido'];
        var direccion = this.GrupocrearConductor.getRawValue()['textdireccion'];
        var telefono = this.GrupocrearConductor.getRawValue()['texttelefono'];
        var licencia = this.GrupocrearConductor.getRawValue()['textlicencia'];
        var venci = this.GrupocrearConductor.getRawValue()['textvenci'];
        var estadoC = this.GrupocrearConductor.getRawValue()['textestadoC'];
        
  
        //console.log("Td", datosvalo2,datosvalo3)
    
        var cadena = {"id_tipo_documento":tipodocu,"numero_documento":numerodocu,
                      "primer_nombre":pnombre,"segundo_nombre":snombre,
                      "primer_apellido":papellido,"segundo_apellido":sapellido,
                      "direccion":direccion,"numero_telefono":telefono,
                      "numero_licencia":licencia,"fecha_venci_licencia":venci,
                      "estado":estadoC
                    };
        
        //console.log(" 39 " + cadena);
    
        this.servi.crearConductor(cadena).then(res => {console.log(res)}).catch(err => 
          {console.log(err)});
  
        alert("registro creado");
      }else{
        alert("llenar todos los campos");
      }
        
    }

  ngOnInit() {
    this.GrupocrearConductor= this.formBuilder.group(
      {
        texttipodocu: ["",Validators.required],
        textnumerodocu: ["",Validators.required],
        textpnombre: ["",Validators.required],
        textsnombre: ["",Validators.required],
        textpapellido: ["",Validators.required],
        textsapellido: ["",Validators.required],
        textdireccion:["",Validators.required],
        texttelefono: ["",Validators.required],
        textlicencia: ["",Validators.required],
        textvenci:["",Validators.required],
        textestadoC: ["",Validators.required]
      });
      this.formBuilder.group

      //inicializamos de una vez para cargar el select
      this.servi.getListarTipDoc().subscribe((data: {tipo_veh: []}) => {
        this.tipDoc = data;},error => {console.error(error + " ")});
  }

}
