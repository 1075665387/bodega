import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodega.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtrar-conductor',
  templateUrl: './filtrar-conductor.component.html',
  styleUrls: ['./filtrar-conductor.component.css']
})
export class FiltrarConductorComponent implements OnInit {

  filtrarCon: FormGroup;
  filtrocon: any = [];

  constructor(private formBuilder: FormBuilder,
    private servi: BodegaService,
    Router: Router) { }

    public filtrarConductor(id) {

      var filtro = this.filtrarCon.getRawValue()['textfiltrocon'];
  
      this.servi.getFiltrarConductor('/' + filtro).subscribe((data: {}) => {this.filtrocon = data;}, error => {console.log(error)});
      
    } 

  ngOnInit() {

    this.filtrarCon = this.formBuilder.group(
      {
        textfiltrocon: []
      }); 
      this.formBuilder.group
  }

}
