import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MatchModel } from '../models/match.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MatchService {
  constructor(private http: HttpClient) {}

  getList(): Observable<MatchModel[]> {
    return this.http.get<MatchModel[]>('http://localhost:3000/match');
  }

  getById(matchId: string): Observable<MatchModel> {
    return this.http.get<MatchModel>(`http://localhost:3000/match/${matchId}`);
  }
}
