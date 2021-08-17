import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderSelectorComponent } from './provider-selector/provider-selector.component';
import { ProviderFileComponent } from './provider-file/provider-file.component';
import { ProviderTranformComponent } from './provider-tranform/provider-tranform.component';



@NgModule({
  declarations: [
    ProviderSelectorComponent,
    ProviderFileComponent,
    ProviderTranformComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProviderModule { }
