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

  getOneById(playerId: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${playerId}`);
  }

  create(name: string): Observable<any> {
    return this.http.post(this.url, { name });
  }

  removeOneById(playerId: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${playerId}`);
  }

  update(playerId: number, player: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${playerId}`, player);
  }
}
