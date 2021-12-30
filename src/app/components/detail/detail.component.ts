import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallApiService } from '../../services/callApi/callApi.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
idRuta: any ;
listaMonto: any = [];
indicator: any;
monto: any;


  constructor(private callApi: CallApiService, private router:Router, private miruta: ActivatedRoute) { 

    this.idRuta = this.miruta.snapshot.paramMap.get("id");

  }


  ngOnInit(): void {
    this.getIndicatorByType(this.idRuta)
  }

  getIndicatorByType(code: string) {
    this.callApi.getInfo(code).subscribe(data =>{
      this.indicator = data.nombre;
      this.monto = data.serie[0].valor;
     this.listaMonto = data.serie;
      console.log(data);
      
    }) 
  }

}
