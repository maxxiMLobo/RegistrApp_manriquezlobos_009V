import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent} from '@ionic/angular';
import { CarrerasService } from 'src/app/services/carreras.service';
import { LoadingController } from '@ionic/angular';
import { Idocentes } from 'src/app/interfaces/idocentes';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage {

  docentes: Idocentes [] = [];

  constructor(private CarrerasServ:CarrerasService,
              private loadingCtr:LoadingController) { }

  ionViewWillEnter(){
    this.loadCarreras();
  }

  async loadCarreras(event?: InfiniteScrollCustomEvent){
    const loading = await  this.loadingCtr.create({
      message: "cargando...",
      spinner: "bubbles"
    }
  );
  await loading.present();

  this.CarrerasServ.listarDocentes().subscribe(
    {
      next: resp=>{
        console.log(resp);
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.docentes=JSON.parse(listString)
        event?.target.complete();
        console.log(this.docentes);
      }
    }
  )
  }
}
