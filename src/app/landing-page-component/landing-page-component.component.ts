import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrls: ['./landing-page-component.component.css']
})
///Clase principal del componente de la logica de negocios
export class LandingPageComponentComponent implements OnInit {

  providers = [];
  info = "no hay datos";

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {

    this.serviceService.getAllProviders("getAllProvider/").subscribe((data : any[]) => {
      console.log(data);
      this.providers = data;
    });
  }

  onClickMe(){
    this.info = "si hay datos"
  }

}
