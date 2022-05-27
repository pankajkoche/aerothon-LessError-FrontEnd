import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  message$: Observable<any>;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.message$ = this.data.getWelcomeMessage();
  }

  ngOnDestroy(): void {}
}
