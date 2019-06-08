import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CreateMatchDto } from '../models/create-match.dto';

@Injectable({ providedIn: 'root' })
export class MatchService {
  private readonly url = 'match';

  constructor(private http: HttpClient) {}

  getList(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getOneById(matchId: string): Observable<any> {
    return this.http.get<any>(`${this.url}/${matchId}`);
  }

  create(body: CreateMatchDto): Observable<any> {
    return this.http.post(this.url, body);
  }

  removeOneById(matchId: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${matchId}`);
  }
}
