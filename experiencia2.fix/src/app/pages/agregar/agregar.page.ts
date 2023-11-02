import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idocente } from 'src/app/interfaces/idocente';
import { CarrerasService } from 'src/app/services/carreras.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  newDocente: Idocente = {
    seccion: "",
    nombredocente: "",
    carrera1: "",
    carrera2: ""
  }

  constructor(
    private CarrerasServ:CarrerasService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  crearDocente(){
    this.CarrerasServ.crearDocente(this.newDocente).subscribe()
    this.router.navigateByUrl("/lista")
  }

}
