import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './containers/auth-form.component';
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AuthFormComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService
      ]
    };
  }
}
