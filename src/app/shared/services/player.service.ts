import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PlayerService {
  private readonly url = 'player';

  constructor(private http: HttpClient) {}

  getList(): Observable<any[]> {
    return this.http.get<any>(this.url);
  }
}
