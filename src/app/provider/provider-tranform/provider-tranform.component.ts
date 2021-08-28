import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-provider-tranform',
  templateUrl: './provider-tranform.component.html',
  styleUrls: ['./provider-tranform.component.scss']
})
export class ProviderTranformComponent implements OnInit {

  desc: string = '';
  constructor( private _activatetRouter:ActivatedRoute) { 

    this._activatetRouter.params.subscribe(
      params =>{
        console.log(params['des']+'Descripcion transforms');
        this.desc=params['des'];
      }
    )

    


  }
  ngOnInit(): void {
  }

}
