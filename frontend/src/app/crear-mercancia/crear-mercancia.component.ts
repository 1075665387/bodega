import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodega.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-crear-mercancia',
  templateUrl: './crear-mercancia.component.html',
  styleUrls: ['./crear-mercancia.component.css']
})
export class CrearMercanciaComponent implements OnInit {
  
  
  crearMercancia2: FormGroup;
  marcaMercancia: any = [];


  constructor(private formBuilder: FormBuilder,
    private servi: BodegaService,
    Router: Router) { }
  
    
   

    public crearMercancia(form:NgForm) {
      //validamos que el formulario sea valido hay que poner un ngform en el html y luego lo recivimos como parametro 
      if(form.valid){
        var marca = this.crearMercancia2.getRawValue()['textmarca'];
        var codigo = this.crearMercancia2.getRawValue()['textcodigo'];
        var nombre = this.crearMercancia2.getRawValue()['textnombre'];
        var pcompra = this.crearMercancia2.getRawValue()['textcompra'];
        var pventa = this.crearMercancia2.getRawValue()['textventa'];
        var peso = this.crearMercancia2.getRawValue()['textpeso'];
        var estado = this.crearMercancia2.getRawValue()['textestado'];
        
  
        //console.log("Td", datosvalo2,datosvalo3)
    
        var cadena = {"id_marca_mercancia":marca,"codigo_mercancia":codigo,
                      "nombre_mercancia":nombre,"precio_compra_mercancia":pcompra,
                      "precio_venta_mercancia":pventa,"peso":peso,"estado":estado};
        
        //console.log(" 39 " + cadena);
    
        this.servi.crearMercancia(cadena).then(function(value){
          console.log(value); alert("registro insertado");
        },function(reason)
          {console.log(reason); alert("error al insertar");});
          
          
      }else{
    
        alert("llenar todos los campos");
 
      }
        
    }

    

    

  ngOnInit() {
    
    
    
    this.crearMercancia2 = this.formBuilder.group(
      {
        textmarca: ["",Validators.required],
        textcodigo: ["",Validators.required],
        textnombre: ["",Validators.required],
        textcompra: ["",Validators.required],
        textventa: ["",Validators.required],
        textpeso: ["",Validators.required],
        textestado: ["",Validators.required]
      });
      this.formBuilder.group
      
      //inicializamos de una vez para cargar el select
      this.servi.getListarMarcas().subscribe((data: {marca_mercancias: []}) => {
        this.marcaMercancia = data;},error => {console.error(error + " ")});
  }

}
