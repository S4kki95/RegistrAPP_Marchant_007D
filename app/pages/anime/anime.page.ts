import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/api-crud.service';
import { Anime } from '../interfaces/interfaces';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.page.html',
  styleUrls: ['./anime.page.scss'],
})
export class AnimePage implements OnInit {

  anime:Anime[]=[];

  constructor(private animeService: ApiCrudService,
              private loadingCtrl : LoadingController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.loadAnime();
  }

  async loadAnime(event?: InfiniteScrollCustomEvent){

    const loading = await this.loadingCtrl.create({
      message: "Cargando..",
      spinner: "bubbles"
    });
    await loading.present();

    this.animeService.listarAnime().subscribe(
      {
        next: resp=>{
          console.log(resp);
          loading.dismiss();
          let listString = JSON.stringify(resp)
          this.anime=JSON.parse(listString)
          event?.target.complete();
          console.log(this.anime);
        },
        error: err =>{
          console.log(err.error.message);
          loading.dismiss();
        }
      }
    )
  }

}
