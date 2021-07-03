import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodega.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtrar-destino',
  templateUrl: './filtrar-destino.component.html',
  styleUrls: ['./filtrar-destino.component.css']
})
export class FiltrarDestinoComponent implements OnInit {

  filtrarDes: FormGroup;
  filtrodes: any = [];
  constructor(private formBuilder: FormBuilder,
    private servi: BodegaService,
    Router: Router) { }

    public filtrarDestino(destino) {

      var filtro = this.filtrarDes.getRawValue()['textfiltrodes'];
  
      this.servi.getFiltrarDestino('/' + filtro).subscribe((data: {}) => {this.filtrodes = data;}, error => {console.log(error)});
      
    } 

  ngOnInit() {

    this.filtrarDes = this.formBuilder.group(
      {
        textfiltrodes: []
      }); 
      this.formBuilder.group
  }

}
