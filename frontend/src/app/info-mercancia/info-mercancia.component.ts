import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodega.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-mercancia',
  templateUrl: './info-mercancia.component.html',
  styleUrls: ['./info-mercancia.component.css']
})
export class InfoMercanciaComponent implements OnInit {

  infoMer: FormGroup;
  infom: any = [];

  constructor(private formBuilder: FormBuilder,
    private servi: BodegaService,
    Router: Router) { }

    public infoMercancia(datosf,d2) {

      var mercancia = this.infoMer.getRawValue()['textmercancia'];
      var fecha1 = this.infoMer.getRawValue()['textfecha1'];
      var fecha2 = this.infoMer.getRawValue()['textfecha2'];
      
      this.servi.getInformeMer('/' + mercancia,fecha1,fecha2).subscribe((data: {}) => {this.infom = data;}, error => {console.log(error)});

    } 

  ngOnInit() {
    this.infoMer = this.formBuilder.group(
      {
        textmercancia: [],
        textfecha1:[],
        textfecha2:[]
      }); 
      this.formBuilder.group
  }

}
