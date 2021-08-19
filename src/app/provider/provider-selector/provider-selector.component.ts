import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-provider-selector',
  templateUrl: './provider-selector.component.html',
  styleUrls: ['./provider-selector.component.scss']
})
export class ProviderSelectorComponent implements OnInit {
  opcionSeleccionado: string = '0';
  verSeleccion: string = '';
    prestadores: string[] = [];
    prest: string = '';
    @Output()  recibidoDePadre = new EventEmitter<string>();
    padreForm: FormControl = new FormControl();
   
  constructor() { 

    this.prestadores[0]='Seleccione';
    this.prestadores[1]='Positiva ARL';
    this.prestadores[2]='Comeva EPS';
    this.prestadores[3]='Sura EPS - ARL - SOAT';
    this.prestadores[4]='AXA COLPATRIA ARL';
    this.prestadores[5]='EQUIDAD SOAT';
    this.prestadores[6]='MAFRE ARL - SOAT';
  }

  ngOnInit(): void {
  
  }
  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
    this.prest=this.prestadores[this.verSeleccion];
  
   
    
  }
  btnEnviarHijo():void {
    this.recibidoDePadre.emit(this.prest) ;
    console.log('Click',this.prest);
  }
}
