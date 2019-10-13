import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html'
})
export class ResultadoComponent implements OnInit {

  heroes: any[] = [];
  atributo: string;

  constructor(  private activateRouter: ActivatedRoute,
                private _heroeService: HeroesService,
                private router: Router
                ) {

  }

  ngOnInit() {
    this.activateRouter.params.subscribe( params => {
      this.atributo = params['atributo'];
      this.heroes = this._heroeService.buscarHeroes( params[ 'atributo' ] );
  
     });
  }

  verHeroe( idx: number ) {

    this.router.navigate( ['/heroe', idx] ); // redireccionamient importanto router y usando navigate

  }

}
