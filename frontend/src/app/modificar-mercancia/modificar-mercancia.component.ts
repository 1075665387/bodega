import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodega.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-mercancia',
  templateUrl: './modificar-mercancia.component.html',
  styleUrls: ['./modificar-mercancia.component.css']
})
export class ModificarMercanciaComponent implements OnInit {

  filtrarMer2: FormGroup;
  filtrom2: any = [];

  constructor(private formBuilder: FormBuilder,
    private servi: BodegaService,
    Router: Router) { }
  
    public filtrarMercancia2(id) {

      var filtro = this.filtrarMer2.getRawValue()['textfiltro2'];
  
      this.servi.getFiltrarMercancia2('/' + filtro).subscribe((data: {}) => {this.filtrom2 = data;}, error => {console.log(error)});
      
    }

    public modificarMercancia() {
      var filtro2 = this.filtrarMer2.getRawValue()['textfiltro2'];
      var marca = this.filtrarMer2.getRawValue()['textmarca2'];
      var codigo = this.filtrarMer2.getRawValue()['textcodigo2'];
      var nombre = this.filtrarMer2.getRawValue()['textnombre2'];
      var pcompra = this.filtrarMer2.getRawValue()['textcompra2'];
      var pventa = this.filtrarMer2.getRawValue()['textventa2'];
      var peso = this.filtrarMer2.getRawValue()['textpeso2'];
      var estado = this.filtrarMer2.getRawValue()['textestado2'];
  
      var cadena = {"id_mercancia":filtro2,"id_marca_mercancia":marca,"codigo_mercancia":codigo,
                    "nombre_mercancia":nombre,"precio_compra_mercancia":pcompra,
                    "precio_venta_mercancia":pventa,"peso":peso,"estado":estado};
  
      this.servi.updateMercancia(cadena).then
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

   
      this.filtrarMer2 = this.formBuilder.group(
        {
          textfiltro2: [],
          textmarca2: [],
          textcodigo2: [],
          textnombre2: [],
          textcompra2: [],
          textventa2: [],
          textpeso2: [],
          textestado2: []
        });
      this.formBuilder.group

  }

}
