import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodega.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtrar-mercancia',
  templateUrl: './filtrar-mercancia.component.html',
  styleUrls: ['./filtrar-mercancia.component.css']
})
export class FiltrarMercanciaComponent implements OnInit {

  filtrarMer: FormGroup;
  filtrom: any = [];

  constructor(private formBuilder: FormBuilder,
    private servi: BodegaService,
    Router: Router) { }

    public filtrarMercancia(id) {

      var filtro = this.filtrarMer.getRawValue()['textfiltro'];
  
      this.servi.getFiltrarMercancia('/' + filtro).subscribe((data: {}) => {this.filtrom = data;}, error => {console.log(error)});
      
    }  

  ngOnInit() {

    this.filtrarMer = this.formBuilder.group(
      {
        textfiltro: []
      }); 
      this.formBuilder.group
  }

}
