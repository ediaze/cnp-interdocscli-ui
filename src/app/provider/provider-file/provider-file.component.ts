import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-provider-file',
  templateUrl: './provider-file.component.html',
  styleUrls: ['./provider-file.component.scss']
})
export class ProviderFileComponent implements OnInit {

  
  desc: string = '';

  constructor(private _router:Router, private _activatetRouter:ActivatedRoute) { 

    this._activatetRouter.params.subscribe(
      params =>{
        this.desc=params['des'];
      }
    )
  }

  ngOnInit(): void {
  }
  btnEnviarHijo():void {

    this._router.navigate(['/filing-trans',this.desc]);
    console.log('Clickk',this.desc);
  }
}
