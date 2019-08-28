import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IMatchListItem } from '../models/match/match-list-item.model';
import { CreateMatchDto } from '../models/match/create-match.dto';
import { IMatchItem } from '../models/match/match-item.model';

@Injectable({ providedIn: 'root' })
export class MatchService {
  private readonly url = 'match';

  constructor(private http: HttpClient) {}

  getList(): Observable<IMatchListItem[]> {
    return this.http.get<IMatchListItem[]>(this.url);
  }

  getListByLatestMonth(): Observable<IMatchListItem[]> {
    return this.http.get<IMatchListItem[]>(`${this.url}/latest-month`);
  }

  getOneById(matchId: number): Observable<IMatchItem> {
    return this.http.get<IMatchItem>(`${this.url}/${matchId}`);
  }

  create(body: CreateMatchDto): Observable<any> {
    return this.http.post(this.url, body);
  }

  removeOneById(matchId: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${matchId}`);
  }
}
