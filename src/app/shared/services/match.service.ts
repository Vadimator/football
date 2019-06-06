import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { CreateMatchDto } from '../models/create-match.dto';

@Injectable({ providedIn: 'root' })
export class MatchService {
  private readonly url = 'match';

  constructor(private http: HttpClient) {}

  getList(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getOneById(matchId: string): Observable<any> {
    let params: HttpParams = new HttpParams();

    params = params.append('join', 'firstTeam');
    params = params.append('join', 'secondTeam');

    return this.http.get<any>(`${this.url}/${matchId}`, { params });
  }

  create(body: CreateMatchDto): Observable<any> {
    return this.http.post(this.url, body);
  }
}
