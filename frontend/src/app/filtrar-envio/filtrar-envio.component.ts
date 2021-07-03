import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodega.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtrar-envio',
  templateUrl: './filtrar-envio.component.html',
  styleUrls: ['./filtrar-envio.component.css']
})
export class FiltrarEnvioComponent implements OnInit {

  filtrarEn: FormGroup;
  filtroen: any = [];
  constructor(private formBuilder: FormBuilder,
    private servi: BodegaService,
    Router: Router) { }

    public filtrarEnvio(id) {

      var filtro = this.filtrarEn.getRawValue()['textfiltroEn'];
  
      this.servi.getFiltrarEnvio('/' + filtro).subscribe((data: {}) => {this.filtroen = data;}, error => {console.log(error)});
      
    } 

  ngOnInit() {

    this.filtrarEn = this.formBuilder.group(
      {
        textfiltroEn: []
      }); 
      this.formBuilder.group
  }

}
