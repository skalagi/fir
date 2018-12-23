import { Injectable } from '@angular/core';
import { ScreenStore } from './screen.store';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ScreenService {

  constructor(private screenStore: ScreenStore,
    private http: HttpClient) {
    this.get();
  }

  get() {
    this.http.get(`${environment.uri}?ctrl=getStream`).subscribe((stream: any) => {
      this.screenStore.setState(state => ({ url: stream.value }));
    });
  }

  add() {
  }

}
