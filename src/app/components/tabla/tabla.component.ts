import { Component, OnInit } from '@angular/core';
import {  CallApiService } from '../../services/callApi/callApi.service'
import { Indicator } from '../../interface/indicador';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  callTheApi: any = [];
  listaMonto: any = [];
  indicator: any;
  monto: any;
  unidad_medida: any;

  constructor(private callApi: CallApiService) { }

  ngOnInit() {
    this.getIndicators();
  }

  view() {
    console.log("paso")
 
  }

  getIndicators() {
    this.callTheApi = this.callApi.getUsers().pipe(map(data => {
      let listaApi = new Array<Indicator>();
      Object.keys(data).forEach(element => {

        if (data[element].nombre) {
          listaApi.push({
            name: data[element].nombre, date: (data[element].fecha),
            code: data[element].codigo, value: data[element].valor,
            unitOfMeasure: data[element].unidad_medida
          })
        }

      });
      return listaApi;
    }));
  }
  getIndicatorByType(code: string) {
    this.callApi.getInfo(code).subscribe(data =>{
      this.indicator = data.nombre;
      this.monto = data.serie[0].valor;
    this.listaMonto = data.serie;
    this.unidad_medida = data.unidad_medida;

      console.log(data);
      
    }) 
  }
}
