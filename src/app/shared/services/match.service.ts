import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { MatchModel } from '../../modules/match/models/match.model';

@Injectable({ providedIn: 'root' })
export class MatchService {
  private readonly url = 'match';

  constructor(private http: HttpClient) {}

  getList(): Observable<MatchModel[]> {
    return this.http.get<MatchModel[]>(this.url);
  }

  getById(matchId: string): Observable<MatchModel> {
    return this.http.get<MatchModel>(`${this.url}/${matchId}`);
  }
}
