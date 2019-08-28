import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SortDirection } from '@angular/material';
import { Observable } from 'rxjs';

import { IPlayerListResponse } from '@shared/models/player/player-list-response.model';
import { IPlayer } from '@shared/models/player/player.model';

@Injectable({ providedIn: 'root' })
export class PlayerService {
  private readonly url = 'player';

  constructor(private http: HttpClient) {}

  getList(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getListStatistic(page: number = 0, limit: number = 10, sort: string, direction: SortDirection): Observable<IPlayerListResponse> {
    let params: HttpParams = new HttpParams()
        .set('page', page.toString())
        .set('limit', limit.toString());

    if (direction !== '') {
      params = params.append('sort', sort).append('direction', direction.toUpperCase());
    }

    return this.http.get<IPlayerListResponse>(`${this.url}/statistic`, { params });
  }

  getListByLatestMonth(): Observable<IPlayer[]> {
    return this.http.get<IPlayer[]>(`${this.url}/latest-month`);
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

  changeActive(playerId: number): Observable<any> {
    return this.http.put<any>(`${this.url}/active/${playerId}`, null);
  }
}
