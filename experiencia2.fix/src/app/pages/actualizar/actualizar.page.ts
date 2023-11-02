import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrerasService } from 'src/app/services/carreras.service';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {

  docente ={
    id:0,
    seccion: "",
    nombredocente: "",
    carrera1: "",
    carrera2: ""
  }

  constructor(private CarrerasServ: CarrerasService,
              private router: Router) { }

  ngOnInit() {
  }
  
  ionViewWillEnter(){
    this.getDocenteById(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url=this.router.url;
    let arr=url.split("/",5);
    let id = parseInt(arr[2]);
    return id;
  }

  getDocenteById(docenteID:number){
    this.CarrerasServ.BuscarDocenteId(docenteID).subscribe(
      (resp:any)=>{               
        this.docente={
          id: resp[0].id,
          seccion: resp[0].seccion,
          nombredocente: resp[0].nombredocente,
          carrera1: resp[0].carrera1,
          carrera2: resp[0].carrera2
        }
      }
    )
  } 
  
  updateDocente(){
    this.CarrerasServ.actualizarDocente(this.docente).subscribe();
    this.router.navigateByUrl("/lista");
  }

}
