import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TeamService {
    private readonly url = 'team';

    constructor(private http: HttpClient) {}

    getList(): Observable<any[]> {
        return this.http.get<any>(this.url);
    }

    getOneById(teamId: number): Observable<any> {
        return this.http.get(`${this.url}/${teamId}`);
    }
}
