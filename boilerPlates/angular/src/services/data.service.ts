import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  EnvironmentConfig,
  ENV_CONFIG,
} from '../environments/environment-config.interface';

// data.service.ts
@Injectable({
  providedIn: 'root',
})
export class DataService {
  public apiUrl: string;
  constructor(
    @Inject(ENV_CONFIG) private config: EnvironmentConfig,
    private http: HttpClient
  ) {
    this.apiUrl = `${config.environment.baseUrl}`;
  }

  getWelcomeMessage() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
  }
}
