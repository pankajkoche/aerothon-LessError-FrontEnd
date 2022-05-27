import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  EnvironmentConfig,
  ENV_CONFIG,
} from '../../environments/environment-config.interface';

// http.module.ts
@NgModule({
  imports: [CommonModule],
})
export class HttpModule {
  static forRoot(config: EnvironmentConfig): ModuleWithProviders<HttpModule> {
    return {
      ngModule: HttpModule,
      providers: [
        {
          provide: ENV_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
