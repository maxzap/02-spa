import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html'
})
export class ResultadoComponent implements OnInit {

  heroes: any[] = [];

  constructor(  private activateRouter: ActivatedRoute,
                private _heroeService: HeroesService
                ) {

    this.activateRouter.params.subscribe( params => {
    this.heroes = this._heroeService.buscarHeroes( params[ 'atributo' ] );

   });

  }

  ngOnInit() {
    
  }

}
