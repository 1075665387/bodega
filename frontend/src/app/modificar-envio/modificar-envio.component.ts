import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodega.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-envio',
  templateUrl: './modificar-envio.component.html',
  styleUrls: ['./modificar-envio.component.css']
})
export class ModificarEnvioComponent implements OnInit {

  filtrarEn2: FormGroup;
  filtroen2: any = [];

  constructor(private formBuilder: FormBuilder,
    private servi: BodegaService,
    Router: Router) { }

    public filtrarEnvio2(id) {

      var filtro = this.filtrarEn2.getRawValue()['textfiltroEn2'];
  
      this.servi.getFiltrarEnvio2('/' + filtro).subscribe((data: {}) => {this.filtroen2 = data;}, error => {console.log(error)});
      
    } 

    public modificarEnvio() {
      var filtro2 = this.filtrarEn2.getRawValue()['textfiltroEn2'];
      var fecha = this.filtrarEn2.getRawValue()['textfechae2'];
      var desstino = this.filtrarEn2.getRawValue()['textdestino2'];
      var pesoE = this.filtrarEn2.getRawValue()['textpesoE2'];
      var mercancia = this.filtrarEn2.getRawValue()['textidmercancia2'];
      var vehiculo = this.filtrarEn2.getRawValue()['textidvehiculo2'];
      var cantidad = this.filtrarEn2.getRawValue()['textcantidad2'];
  
      //console.log("Td", datosvalo2,datosvalo3)
  
      var cadena = {"id_envio":filtro2,"fecha_envio":fecha,"destino":desstino,
                    "peso":pesoE,"id_mercancia":mercancia,
                    "id_vehiculo":vehiculo,"cantidad":cantidad};
      
      //console.log(" 39 " + cadena);
  
      this.servi.updateEnvio(cadena).then(res => {console.log(res)}).catch(err => 
        {console.log(err)});

        alert("registro modificado");
    }

  ngOnInit() {

    this.filtrarEn2 = this.formBuilder.group(
      {
        textfiltroEn2: [],
        textfechae2: [],
        textdestino2: [],
        textpesoE2: [],
        textidmercancia2: [],
        textidvehiculo2: [],
        textcantidad2: []
      }); 
      this.formBuilder.group
  }
  

}
