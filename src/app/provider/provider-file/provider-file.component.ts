import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-provider-file',
  templateUrl: './provider-file.component.html',
  styleUrls: ['./provider-file.component.scss']
})
export class ProviderFileComponent implements OnInit {
  @Input() recibidoDePadre: string='';
  constructor() { }

  ngOnInit(): void {
  }

}
