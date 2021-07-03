import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodega.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-conductor',
  templateUrl: './listar-conductor.component.html',
  styleUrls: ['./listar-conductor.component.css']
})
export class ListarConductorComponent implements OnInit {
  conductores: any = [];

  constructor(private formBuilder: FormBuilder,
    private servi: BodegaService,
    Router: Router) { }

    listarConductor() {
      //console.log("22");
      
      this.servi.getListarConductor().subscribe((data: {conductor: []}) => {this.conductores = data;}, error => {console.error(error + " ")});
      
      
     // console.log("23");
  }  

  ngOnInit() {
  }

}
