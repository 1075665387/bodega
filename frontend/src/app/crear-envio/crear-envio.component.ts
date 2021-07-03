import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodega.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-envio',
  templateUrl: './crear-envio.component.html',
  styleUrls: ['./crear-envio.component.css']
})
export class CrearEnvioComponent implements OnInit {

  GrupocrearEnvio: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
    private servi: BodegaService,
    Router: Router) { }
  public crearEnvio() {
      //console.log("31  Inserta");
  
      var fecha = this.GrupocrearEnvio.getRawValue()['textfechae'];
      var desstino = this.GrupocrearEnvio.getRawValue()['textdestino'];
      var pesoE = this.GrupocrearEnvio.getRawValue()['textpesoE'];
      var mercancia = this.GrupocrearEnvio.getRawValue()['textidmercancia'];
      var vehiculo = this.GrupocrearEnvio.getRawValue()['textidvehiculo'];
      var cantidad = this.GrupocrearEnvio.getRawValue()['textcantidad'];
   
      //console.log("Td", datosvalo2,datosvalo3)
  
      var cadena = {"fecha_envio":fecha,"destino":desstino,
                    "peso":pesoE,"id_mercancia":mercancia,
                    "id_vehiculo":vehiculo,"cantidad":cantidad};
      
      //console.log(" 39 " + cadena);
  
      this.servi.crearEnvio(cadena).then(res => {console.log(res)}).catch(err => 
        {console.log(err)});

        alert("registro creado");
  }


  ngOnInit() {
    this.GrupocrearEnvio = this.formBuilder.group(
      {
        textfechae: [],
        textdestino: [],
        textpesoE: [],
        textidmercancia: [],
        textidvehiculo: [],
        textcantidad: []
      });
      this.formBuilder.group
  }

}
