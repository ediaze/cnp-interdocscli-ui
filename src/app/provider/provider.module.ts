import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderSelectorComponent } from './provider-selector/provider-selector.component';
import { ProviderFileComponent } from './provider-file/provider-file.component';
import { ProviderTranformComponent } from './provider-tranform/provider-tranform.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';



@NgModule({
  declarations: [
    ProviderSelectorComponent,
    ProviderFileComponent,
    ProviderTranformComponent,
    ConfiguracionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProviderModule { }
